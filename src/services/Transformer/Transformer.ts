import { EMPTY_TAG, MEASURE_OR_INGREDIENT_COUNT } from '../../data/constants';
import { Ingredient, taggedCocktail } from '../../data/interfaces/cocktail';
import { Drink } from '../Validator/validator/classes/Drink';

export class Transformer {
  public static getTaggedCocktailsFromDrinks(drinks: Drink[]) {
    const taggedCocktails: taggedCocktail[] = [];

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
      const tags: string[] = drink.strTags == null || !drink.strTags.trim() ? [EMPTY_TAG] : [...new Set<string>(drink.strTags.trim().split(','))];
      const ingredients: Ingredient[] = [];
      for (let i = 0; i < MEASURE_OR_INGREDIENT_COUNT; i++) {
        const copyDrink: any = drink;
        const name = copyDrink[strIngredientList[i]];
        const measure = copyDrink[strMeasureList[i]];
        if (name) {
          ingredients.push({ name, measure });
        }
      }
      taggedCocktails.push({ id, name, category, tags, ingredients });
    });

    return taggedCocktails;
  }
}
