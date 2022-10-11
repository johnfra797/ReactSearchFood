export interface Id {
  $oid: string;
}

export interface Nutrient {
  id: number;
  number: string;
  name: string;
  rank: number;
  unitName: string;
}

export interface FoodNutrientSource {
  id: number;
  code: string;
  description: string;
}

export interface FoodNutrientDerivation {
  code: string;
  description: string;
  foodNutrientSource: FoodNutrientSource;
}

export interface FoodNutrient {
  type: string;
  id: number;
  nutrient: Nutrient;
  dataPoints: number;
  foodNutrientDerivation: FoodNutrientDerivation;
  max: number;
  min: number;
  median: number;
  amount: number;
}

export interface NutrientConversionFactor {
  type: string;
  proteinValue: number;
  fatValue: number;
  carbohydrateValue: number;
  value?: number;
}

export interface FoodCategory {
  description: string;
}

export interface MeasureUnit {
  id: number;
  name: string;
  abbreviation: string;
}

export interface FoodPortion {
  id: number;
  measureUnit: MeasureUnit;
  gramWeight: number;
  sequenceNumber: number;
  minYearAcquired: number;
  modifier: string;
}

export interface FoodCategory2 {
  id: number;
  code: string;
  description: string;
}

export interface InputFood2 {
  foodClass: string;
  description: string;
  fdcId: number;
  dataType: string;
  foodCategory: FoodCategory2;
  publicationDate: string;
}

export interface InputFood {
  id: number;
  foodDescription: string;
  inputFood: InputFood2;
}

export interface Food {
  _id: Id;
  foodClass: string;
  description: string;
  foodNutrients: FoodNutrient[];
  foodAttributes: any[];
  nutrientConversionFactors: NutrientConversionFactor[];
  isHistoricalReference: boolean;
  ndbNumber: number;
  fdcId: number;
  dataType: string;
  foodCategory: FoodCategory;
  foodPortions: FoodPortion[];
  inputFoods: InputFood[];
  publicationDate: string;
}
