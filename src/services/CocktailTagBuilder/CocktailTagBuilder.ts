import { Cocktail, CocktailTag, CocktailTags, taggedCocktail } from '../../data/interfaces/cocktail';

export class CocktailTagBuilder {
  private static cocktailTag: CocktailTag[] = [];
  private static tags: string[] = [];

  private static areCocktailLoaded: boolean = false;

  public static reload() {
    this.cocktailTag = [];
    this.tags = [];

    this.areCocktailLoaded = false;

    return true;
  }

  public static buildCocktailTags(taggedCocktails: taggedCocktail[]) {
    const cocktailTags: CocktailTags = {};
    if (this.areCocktailLoaded) {
      return false;
    }

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
        if (cocktailTags[tag] === undefined) {
          cocktailTags[tag] = [];
        }
        cocktailTags[tag].push(cocktail);
      });
    });

    Object.keys(cocktailTags).forEach((tag) => {
      this.tags.push(tag);
      this.cocktailTag.push({ name: tag, cocktails: cocktailTags[tag] });
    });

    this.areCocktailLoaded = true;
    return true;
  }

  public static getCocktailTagArray() {
    if (!this.areCocktailLoaded) {
      return null;
    }
    return this.cocktailTag;
  }

  public static getLoadStatus() {
    return this.areCocktailLoaded ? 'Ready' : 'Wait for build CocktailTags';
  }

  public static getTags() {
    return this.tags;
  }
}
