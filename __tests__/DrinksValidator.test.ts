import { DrinksValidator } from '../src/services/Validator/validator/Validator';

describe(' DrinksValidator: Positive tests', () => {
  it('validate object: empty array', async () => {
    const drinks = await DrinksValidator.validate([]);
    expect(drinks).toHaveLength(0);
  }),
    it('validate object: array with like drink object', async () => {
      const { drinks } = require('../__fixtures__/drinks');
      const result = await DrinksValidator.validate(drinks);
      expect(result).toHaveLength(1);
    });
});

describe(' DrinksValidator: Negative tests', () => {
  it('validate object: hash', async () => {
    const drinks = await DrinksValidator.validate({});
    expect(drinks).toBe(null);
  }),
    it('validate object: number', async () => {
      const drinks = await DrinksValidator.validate(123);
      expect(drinks).toStrictEqual(null);
    });
  it('validate object: string', async () => {
    const drinks = await DrinksValidator.validate('hello pulsproject');
    expect(drinks).toStrictEqual(null);
  }),
    it('validate object: string', async () => {
      const arr = [{ name: 'ilia' }];
      const drinks = await DrinksValidator.validate(arr);
      expect(drinks).toHaveLength(0);
    }),
    it('novalidate object: array with not like drink object', async () => {
      const { nonValidatedDrinks } = require('../__fixtures__/drinks');
      const result = await DrinksValidator.validate(nonValidatedDrinks);
      expect(result).toHaveLength(0);

      expect(DrinksValidator.getCurrentDrinks()).toHaveLength(0);
    });
});
