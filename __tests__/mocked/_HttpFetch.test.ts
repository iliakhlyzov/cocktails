import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import { URL } from 'url';

import { HttpFetch } from '../../src/services/HttpFetch/HttpFetch';

const url = {
  right: new URL('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'),
  bad: new URL('https://yandex.ru'),
  wrong: new URL('http://dfasfasfdas.op')
};

jest.mock('node-fetch');

beforeEach(() => {
  mocked(fetch).mockReset();
});

const mock = (result: any, isReject: boolean = false) => {
  mocked(fetch).mockImplementation((): Promise<any> => {
    if (isReject) {
      return Promise.reject();
    }
    return Promise.resolve({ ok: true, json: () => Promise.resolve(result) });
  });
};

describe('HttpFetch: [mocked fetch]', () => {
  const drinks = require('../../__fixtures__/drinks');

  test('HttpFetch.getDrinks calls fetch and get result', async () => {
    mock(drinks);

    const response = await HttpFetch.getDrinks(url.right);

    expect(response).toStrictEqual({ status: 'ok', drinks: drinks['drinks'] });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url.right.href);
  });
});
