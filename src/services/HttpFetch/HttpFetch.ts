import fetch from 'node-fetch';

export class HttpFetch {
  public static async getDrinks(url: URL) {
    const response = await fetch(url.href);
    const { drinks } = await response.json();
    if (!(drinks instanceof Array)) {
      throw new Error("There isn't array of drinks in response json!");
    }
    return drinks;
  }
}
