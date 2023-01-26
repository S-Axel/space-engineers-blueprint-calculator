export interface Ingredient {
  name: string;
  count: number;
  displayNameId: string;
  displayNameValue: string;
  size?: string;
}

export interface Recipe {
  blocks: Ingredient[];
  components: Ingredient[];
  ingots: Ingredient[];
}

export interface Grid {
  name: string;
  size: string;
  blockCount: number;
  mass: number;
  pcuCost: number;
  recipe: Recipe;
}

export interface Blueprint {
  name: string;
  owner: { steamId: string; name: string };
  dlc: string[];
  workshopId: string;
  blockCount: number;
  mass: number;
  pcuCost: number;
  recipe: Recipe;
  mainGrid: Grid;
  subGrids: Grid[];
}

export interface TranslationDictionary {
  [key: string]: string;
}
