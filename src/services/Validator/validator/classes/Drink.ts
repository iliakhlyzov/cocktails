import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class Drink {
  @IsNotEmpty()
  @IsString()
  idDrink: string;

  @IsNotEmpty()
  @IsString()
  strDrink: string;

  @IsNotEmpty()
  @IsString()
  strCategory: string;

  @IsNotEmpty()
  @IsString()
  strIngredient1: string;

  @ValidateIf((o) => o !== null)
  @IsNotEmpty()
  @IsString()
  strIngredient2: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient3: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient4: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient5: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient6: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient7: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient8: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient9: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient10: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient11: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient12: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient13: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient14: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strIngredient15: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure1: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure2: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure3: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure4: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure5: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure6: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure7: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure8: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure9: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure10: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure11: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure12: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure13: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure14: string;

  @ValidateIf((o) => o === null)
  @IsNotEmpty()
  @IsString()
  strMeasure15: string;

  @ValidateIf((o) => o == null)
  @IsNotEmpty()
  strTags: string;
}
