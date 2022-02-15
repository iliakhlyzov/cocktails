export interface Ingredient {
  name: string;
  measure: string | null;
}

export interface Cocktail {
  id: string;
  name: string;
  category: string;
  ingredients: Ingredient[];
}

export interface CocktailTag {
  name: string;
  cocktails: Cocktail[];
}

export interface CocktailTags {
  [name: string]: Cocktail[];
}

export interface taggedCocktail extends Cocktail {
  tags: string[];
}
