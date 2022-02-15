import { plainToInstance } from 'class-transformer';
import _ from 'lodash';
import { Drink } from './classes/Drink';

export class DrinksValidator {
  public static validate(rawdrinks: any) {
    const drinks: Drink[] = [];
    _.forEach(rawdrinks, (rawdrink) => {
      drinks.push(plainToInstance(Drink, rawdrink, {}));
    });
    return drinks;
  }
}
