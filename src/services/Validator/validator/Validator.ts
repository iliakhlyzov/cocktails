import { plainToInstance } from 'class-transformer';
import { Drink } from './classes/Drink';

export class DrinksValidator {
  public static validate(rawdrinks: any) {
    const drinks: Drink[] = [];
    rawdrinks.forEach((rawdrink: any) => {
      drinks.push(plainToInstance(Drink, rawdrink, {}));
    });
    return drinks;
  }
}
