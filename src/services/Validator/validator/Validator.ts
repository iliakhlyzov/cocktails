import { Drink } from '../../../data/interfaces/drink';
import { MEASURE_OR_INGREDIENT_COUNT, DRINK_DTO_TAGS } from '../../../data/constants';

export class DrinksValidator {
  private static drinks: Drink[] = [];

  private static getValue = (object: any, key: string, isNullAllow: boolean = false) => {
    const value = object[key];
    if (typeof value === 'string') {
      return value.trim();
    }
    if (value === null && isNullAllow) {
      return null;
    }
    throw new Error();
  };

  public static getCurrentDrinks() {
    return this.drinks;
  }

  public static parseToDrinks(objects: any[]) {
    if (!(objects instanceof Array)) {
      return null;
    }

    const drinks: Drink[] = [];

    objects.forEach((object: any) => {
      if (typeof object === 'object' && !Array.isArray(object)) {
        const drinkDto: any = {};

        try {
          DRINK_DTO_TAGS.DEFINED_KEYS.forEach((key) => {
            drinkDto[key] = this.getValue(object, key);
          });
          drinkDto[DRINK_DTO_TAGS.TAG_KEY] = this.getValue(object, DRINK_DTO_TAGS.TAG_KEY, true);

          for (let i = 1; i <= MEASURE_OR_INGREDIENT_COUNT; i += 1) {
            const ingredientWithIndex = DRINK_DTO_TAGS.INGREDIENT_TAG + i;
            const measureWithIndex = DRINK_DTO_TAGS.MEASURE_TAG + i;
            const ingredient = this.getValue(object, ingredientWithIndex, true);
            const measure = this.getValue(object, measureWithIndex, true);
            if (ingredient) {
              drinkDto[ingredientWithIndex] = ingredient;
              drinkDto[measureWithIndex] = measure;
            }
          }
        } catch (_err) {
          return;
        }
        drinks.push(drinkDto);
      }
    });

    return drinks;
  }

  public static async validate(rawdrinks: any) {
    if (!(rawdrinks instanceof Array)) {
      return null;
    }

    this.drinks = this.parseToDrinks(rawdrinks) as Drink[];

    return this.drinks;
  }
}
