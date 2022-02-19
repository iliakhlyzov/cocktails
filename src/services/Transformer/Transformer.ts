import { EMPTY_TAG, MEASURE_OR_INGREDIENT_COUNT } from '../../data/constants';
import { Ingredient, taggedCocktail } from '../../data/interfaces/cocktail';
import { Drink } from '../Validator/validator/classes/Drink';

export class Transformer {
  private static taggedCocktails: taggedCocktail[] = [];

  private static parseTags(strTags: string | null) {
    if (strTags == null || !strTags.trim()) {
      return [EMPTY_TAG];
    }
    const matchedTags = strTags.match(/[a-zA-Z0-9\s]+/gm);
    if (!matchedTags) {
      return [EMPTY_TAG];
    }
    const tags: string[] = matchedTags.map((tag) => tag.trim());
    const uniqTags = [...new Set<string>(tags)].filter((tag) => tag !== EMPTY_TAG);
    if (!uniqTags.length) {
      return [EMPTY_TAG];
    }
    return uniqTags;
  }

  public static validateStrTags(strTags: string | null) {
    return this.parseTags(strTags);
  }

  public static getTaggedCocktailsFromDrinks(drinks: Drink[]) {
    this.taggedCocktails = [];

    const strIngredientList: string[] = [];
    const strMeasureList: string[] = [];

    for (let i = 1; i <= MEASURE_OR_INGREDIENT_COUNT; i++) {
      strIngredientList.push('strIngredient' + i);
      strMeasureList.push('strMeasure' + i);
    }

    drinks.forEach((drink) => {
      const id = drink.idDrink;
      const name = drink.strDrink;
      const category = drink.strCategory;
      const tags = this.parseTags(drink.strTags);
      const ingredients: Ingredient[] = [];
      for (let i = 0; i < MEASURE_OR_INGREDIENT_COUNT; i++) {
        const copyDrink: any = drink;
        const name = copyDrink[strIngredientList[i]];
        const measure = copyDrink[strMeasureList[i]];
        if (name) {
          ingredients.push({ name, measure });
        }
      }
      this.taggedCocktails.push({ id, name, category, tags, ingredients });
    });

    return this.taggedCocktails;
  }
}
