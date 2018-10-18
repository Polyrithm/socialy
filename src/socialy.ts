const twifo = require('twifo');
import insta from './insta';
class Socialy {
  public async twitter(username: string = 'johndoe') {
    const report = await twifo(username);
    return report;
  }

  /**
   * instagram
   */
  public async instagram(username: string = 'logic') {
    const report = await insta.getReport(username);
    return report;
  }

}

export default new Socialy();
