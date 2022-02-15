import { HttpFetch } from '../../services/HttpFetch/HttpFetch';
import { DrinksValidator } from '../../services/Validator/validator/validator';
import { Transformer } from '../../services/Transformer/Transformer';
import { CocktailTagBuilder } from '../../services/CocktailBuilder/CocktailBuilder';

export default async () => {
  const url = new URL('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

  const rawdrinks: any[] = await HttpFetch.getDrinks(url);
  const drinks = DrinksValidator.validate(rawdrinks);
  const taggedCocktails = Transformer.getTaggedCocktailsFromDrinks(drinks);
  CocktailTagBuilder.buildCocktailTags(taggedCocktails);
};
