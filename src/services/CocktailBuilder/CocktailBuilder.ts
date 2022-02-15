import _ from 'lodash';
import { EMPTY_TAG } from '../../data/constants';
import { Cocktail, CocktailTag, CocktailTags, taggedCocktail } from '../../data/interfaces/cocktail';

export class CocktailTagBuilder {
  private static cocktailTags: CocktailTags = {};
  private static cocktailTag: CocktailTag[] = [];

  private static areCocktailLoaded: boolean = false;

  public static buildCocktailTags(taggedCocktails: taggedCocktail[]) {
    _.forEach(taggedCocktails, (taggedCocktail) => {
      const tags = taggedCocktail.tags;
      const cocktail: Cocktail = _.omit(taggedCocktail, 'tags');
      _.forEach(tags, (tag) => {
        if (this.cocktailTags[tag] === undefined) {
          this.cocktailTags[tag] = [];
        }
        this.cocktailTags[tag].push(cocktail);
      });
    });
    this.areCocktailLoaded = true;
  }

  public static getCocktailTagArray() {
    if (!this.areCocktailLoaded) {
      return null;
    }
    this.cocktailTag = [];
    _.forIn(this.cocktailTags, (cocktails, name) => {
      this.cocktailTag.push({ name, cocktails });
    });
    return this.cocktailTag;
  }

  public static getLoadStatus() {
    return this.areCocktailLoaded ? 'Ready' : 'Wait for build CocktailTags';
  }
}
