import * as cheerio from 'cheerio';
const request = require('request');
const BASE_URL = 'https://www.instagram.com/';

class Insta {
  async getReport(username: string = 'johndoe'): Promise<any> {
    const url = BASE_URL + username;
    request(url, (err: any, resp: any, body: any) => {
      if (err) {
        throw err + resp;

      }
      const $ =  cheerio.load(body);
      let content = $('meta').eq(16).attr('content');
      content = content.replace(/,/g , '');
      const followers = content.substring(0, content.indexOf('Followers')).trim();
      const following = content.substring(content.indexOf('Followers') + 9 ,  content.indexOf('Following')).trim();
      const posts = content.substring(content.indexOf('Following') + 9, content.indexOf('Posts')).trim();

      const userInfo = {
        username,
        followers,
        following,
        posts,
        dateRequested: Date.now(), // Unix time
      };

      return userInfo;

      });
  }
}

export default new Insta();
