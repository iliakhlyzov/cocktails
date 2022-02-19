# Setup guide

1. Clone the repo
1. Run `npm i`
1. Run `npm start`
1. Check `http://localhost:8080/`

## Tests

- Run `npm run test`

## Services and their functions

- HttpFetch:
  - getDrinks(url): it fetch data from url and returns value of key 'drinks'
- DrinksValidator:
  - validate: it plains drink-objects to drink-classes
- Transformer:
  - getTaggedCocktailsFromDrinks: it transforms objects of class Drink to Cocktail objects including key 'tags'
- CocktailBuilder:
  - buildCocktailTags: it creates a hash with tag-name (key) and an array of cocktails without tag (value)
  - getCocktailTagArray: it returns array of objects a sort of { name: tagName, cocktails: [...cocktails]
  - getLoadStatus: checks if the service has a hash and returns 'Ready' or not
