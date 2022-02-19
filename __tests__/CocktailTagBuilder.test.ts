import { taggedCocktail } from '../src/data/interfaces/cocktail';
import { CocktailTagBuilder } from '../src/services/CocktailTagBuilder/CocktailTagBuilder';
describe('CocktailTagBuilder with only validated objects', () => {
  beforeEach(() => {
    CocktailTagBuilder.reload();
  });

  describe('check', () => {
    const taggedCocktails = require('../__fixtures__/taggedCocktails').default;

    it('status', () => {
      expect(CocktailTagBuilder.getLoadStatus()).toBe('Wait for build CocktailTags');
      CocktailTagBuilder.buildCocktailTags(taggedCocktails);

      expect(CocktailTagBuilder.getLoadStatus()).toBe('Ready');

      CocktailTagBuilder.reload();

      expect(CocktailTagBuilder.getLoadStatus()).toBe('Wait for build CocktailTags');
    }),
      it('tags', () => {
        CocktailTagBuilder.buildCocktailTags(taggedCocktails);
        expect(CocktailTagBuilder.getTags()).toHaveLength(4);

        CocktailTagBuilder.reload();
        expect(CocktailTagBuilder.getTags()).toHaveLength(0);
      }),
      it('reload tags', () => {
        expect(CocktailTagBuilder.getTags()).toHaveLength(0);

        expect(CocktailTagBuilder.buildCocktailTags(taggedCocktails)).toBeTruthy();
        expect(CocktailTagBuilder.getTags()).toHaveLength(4);

        expect(CocktailTagBuilder.buildCocktailTags([])).toBeFalsy();
        expect(CocktailTagBuilder.getTags()).toHaveLength(4);

        CocktailTagBuilder.reload();
        expect(CocktailTagBuilder.getTags()).toHaveLength(0);
      }),
      it('load cocktail with 2 tags', () => {
        expect(CocktailTagBuilder.buildCocktailTags([taggedCocktails[0]])).toBeTruthy();
        expect(CocktailTagBuilder.getTags()).toHaveLength(2);
      }),
      it('load cocktail with empty tag', () => {
        expect(CocktailTagBuilder.buildCocktailTags([taggedCocktails[1]])).toBeTruthy();
        expect(CocktailTagBuilder.getTags()).toHaveLength(1);
      });
  });
});
