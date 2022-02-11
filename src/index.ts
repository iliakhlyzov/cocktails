import http from 'http';

interface Cocktail {
  id: string; // idDrink
  name: string; // strDrink
  category: string; // strCategory
  ingredients: {
    name: string; // strIngredient(1-15)
    measure: string | null; // strMeasure(1-15)
  }[]
}

interface CocktailTag {
  name: string;
  cocktails: Cocktail[];
}

/**
 * Tasks
 * 1. Fetch cocktails list from https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
 * 2. Map cocktails into the structure of Cocktail interface (see above)
 * 3. Some cocktails have tags, f.i. "strTags": "IBA,ContemporaryClassic".
 *   Group cocktails by tags.
 *   The response should be of type CocktailTag[].
 *   Your server should respond with this array of cocktail tags
 * 4. Cover your code with unit tests (You'll need to add Jest or other testing library)
 */

http
  .createServer(function (req, res) {
    res.write('ok');
    res.end();
  })
  .listen(8080);
