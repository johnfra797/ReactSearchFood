
export interface FoodNutrientSource {
  code: string;
  description: string;
  id: number;
}

export interface FoodNutrientDerivation {
  code: string;
  description: string;
  foodNutrientSource: FoodNutrientSource;
}

export interface Nutrient {
  id: number;
  name: string;
  number: string;
  rank: number;
  unitName: string;
}

export interface FoodNutrient {
  amount: number;
  dataPoints: number;
  foodNutrientDerivation: FoodNutrientDerivation;
  id: number;
  max: number;
  median: number;
  min: number;
  nutrient: Nutrient;
  type: string;
}

export interface FoodCategory {
  code: string;
  description: string;
  id: number;
}

export interface InputFood2 {
  dataType: string;
  description: string;
  fdcId: number;
  foodCategory: FoodCategory;
  foodClass: string;
  publicationDate: string;
}

export interface InputFood {
  foodDescription: string;
  id: number;
  inputFood: InputFood2;
}

export interface Food {
  description: string;
  foodCategory: string;
  foodClass: string;
  foodNutrients: FoodNutrient[];
  inputFoods: InputFood[];
  publicationDate: string;
}