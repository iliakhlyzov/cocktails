import _ from 'lodash';
import { EMPTY_TAG, MEASEURE_OR_INGREDIENT_COUNT } from '../../data/constants';
import { Ingredient, taggedCocktail } from '../../data/interfaces/cocktail';
import { Drink } from '../Validator/validator/classes/Drink';

export class Transformer {
  public static getTaggedCocktailsFromDrinks(drinks: Drink[]) {
    const taggedCocktails: taggedCocktail[] = [];

    const strIngredientList: string[] = [];
    const strMeasureList: string[] = [];

    for (let i = 1; i <= 15; i++) {
      strIngredientList.push('strIngredient' + i);
      strMeasureList.push('strMeasure' + i);
    }

    _.forEach(drinks, (drink) => {
      const id = drink.idDrink;
      const name = drink.strDrink;
      const category = drink.strCategory;
      const tags = _.isNull(drink.strTags) ? [EMPTY_TAG] : _.uniq(drink.strTags.trim().split(','));
      const ingredients: Ingredient[] = [];
      for (let i = 0; i <= MEASEURE_OR_INGREDIENT_COUNT; i++) {
        const name = _.get(drink, strIngredientList[i]);
        const measure = _.get(drink, strMeasureList[i]);
        if (name) {
          ingredients.push({ name, measure });
        }
      }
      taggedCocktails.push({ id, name, category, tags, ingredients });
    });

    return taggedCocktails;
  }
}
