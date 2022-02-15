import _ from 'lodash';
import fetch from 'node-fetch';

export class HttpFetch {
  public static async getDrinks(url: URL) {
    const response = await fetch(url.href).catch(_.noop());
    const { drinks } = await response.json();
    if (!(drinks instanceof Array)) {
      throw new Error("There isn't array of drinks in response json!");
    }
    return drinks;
  }
}
