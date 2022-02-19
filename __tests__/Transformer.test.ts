import { Transformer } from '../src/services/Transformer/Transformer';
import { Drink } from '../src/services/Validator/validator/classes/Drink';
describe('Transformer interacts with only already-validated objects', () => {
  describe('Transformer tests', () => {
    it('drinks is empty array', () => {
      const drinks: Drink[] = [];
      const taggedCocktails = Transformer.getTaggedCocktailsFromDrinks(drinks);

      expect(taggedCocktails).toStrictEqual([]);
    }),
      it('drinks have the same tag', () => {
        const { sameTagValidatedDrinks } = require('../__fixtures__/drinks');
        const taggedCocktails = Transformer.getTaggedCocktailsFromDrinks(sameTagValidatedDrinks);

        expect(Object.keys(taggedCocktails).length).toBe(3);
      });
  }),
    describe('Transformer, tags validation tests; strTags is always string or null', () => {
      it('strTags is hello', () => {
        const strTags = 'hello';
        expect(Transformer.validateStrTags(strTags)).toStrictEqual(['hello']);
      }),
        it('strTags has number', () => {
          const strTags = ',,,..,....3425';
          expect(Transformer.validateStrTags(strTags)).toStrictEqual(['3425']);
        }),
        it('strTags is null', () => {
          expect(Transformer.validateStrTags(null)).toStrictEqual(['']);
        }),
        it("strTags isn't normal. Should we parse this things?", () => {
          const strTags = '....]][].]].]fa]f.asa';
          expect(Transformer.validateStrTags(strTags)).toStrictEqual(['fa', 'f', 'asa']);
        }),
        it('strTags has spaces and comma', () => {
          const strTags = '        ,         ';
          expect(Transformer.validateStrTags(strTags)).toStrictEqual(['']);
        });
    });
});