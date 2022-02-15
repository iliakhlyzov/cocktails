import http from 'http';
import _ from 'lodash';
import bootstrap from './data/bootstrap/bootstrap';
import 'reflect-metadata';
import { CocktailTagBuilder } from './services/CocktailBuilder/CocktailBuilder';

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
class Program {
  public static async Main() {
    await bootstrap();
    const server = http
      .createServer(function async(req, res) {
        if (CocktailTagBuilder.getLoadStatus() === 'Ready') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(CocktailTagBuilder.getCocktailTagArray(), null, 2));
        } else {
          res.write("Something doesn't work");
        }
        res.end();
      })
      .listen(8080);
  }
}

Program.Main().catch((err) => console.log('Something is wrong! ' + err));
