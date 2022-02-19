import * as v from 'class-validator';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Drink } from './classes/Drink';

export class DrinksValidator {
  private static drinks: Drink[] = [];

  public static getCurrentDrinks() {
    return this.drinks;
  }

  public static async validate(rawdrinks: any) {
    if (!(rawdrinks instanceof Array)) {
      return null;
    }

    this.drinks = await rawdrinks.reduce(async (acc, rawdrink) => {
      const drink: Drink = plainToClass(Drink, rawdrink, {});
      const errors = await v.validate(drink);
      if (errors.length === 0) {
        return [...await acc, drink];
      }
      return await acc;
    }, [] as any);

    return this.drinks;

  }
}
