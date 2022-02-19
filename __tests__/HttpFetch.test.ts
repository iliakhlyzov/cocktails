import { URL } from 'url';

import { HttpFetch } from '../src/services/HttpFetch/HttpFetch';

const url = {
  right: new URL('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'),
  bad: new URL('https://www.yandex.ru'),
  wrong: new URL('http://dfasfasfdas.op')
};

const errorTypes = {
  json: 'invalid-json',
  sys: 'system'
};

describe('HttpFetch: Negative tests', () => {
  test('HttpFetch.getDrinks: bad url', async () => {
    await HttpFetch.getDrinks(url.bad).catch((err) => {
      expect(err.type).toBe(errorTypes.json);
    });
  });

  test('HttpFetch.getDrinks: wrong url', async () => {
    await HttpFetch.getDrinks(url.wrong).catch((err) => {
      expect(err.type).toBe(errorTypes.sys);
    });
  });
});
