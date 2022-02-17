import fetch from 'node-fetch';
import { DrinkFetchResult } from './HttpFetch.d';

export class HttpFetch {
  public static async getDrinks(url: URL) {
    const response = await fetch(url.href);

    let result: DrinkFetchResult;
    if (response && response.ok) {
      const { drinks } = await response.json();
      if (drinks instanceof Array) {
        return { status: 'ok', drinks };
      }
    }
    return { status: 'error', drinks: null };
  }
}
