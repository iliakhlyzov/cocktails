import { Cocktail, CocktailTag, CocktailTags, taggedCocktail } from '../../data/interfaces/cocktail';

export class CocktailTagBuilder {
  private static cocktailTags: CocktailTags = {};
  private static cocktailTag: CocktailTag[] = [];

  private static areCocktailLoaded: boolean = false;

  public static buildCocktailTags(taggedCocktails: taggedCocktail[]) {
    taggedCocktails.forEach((taggedCocktail) => {
      const tags = taggedCocktail.tags;
      const cocktail = Object.entries(taggedCocktail).reduce((acc, [key, value]) => {
        if (key === 'tags') {
          return acc;
        }
        acc[key] = value;
        return acc;
      }, {} as any) as Cocktail;
      tags.forEach((tag) => {
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
    Object.keys(this.cocktailTags).forEach((key) => {
      this.cocktailTag.push({ name: key, cocktails: this.cocktailTags[key] });
    });
    return this.cocktailTag;
  }

  public static getLoadStatus() {
    return this.areCocktailLoaded ? 'Ready' : 'Wait for build CocktailTags';
  }
}
