import { gameBlocks } from '../../game_data/gameBlocks';
import { gameComponents } from '../../game_data/gameComponents';
import { gameIngots } from '../../game_data/gameIngots';
import xmlToJsObject from '../../utils/xmlToJsObject';
import { Grid, Ingredient, Recipe } from './types';

type XmlObject = Record<string, any>;

/**
 * Compute blocks for a recipe
 * @param {string[]} blocks
 * @param {string} size
 * @return {Ingredient[]}
 */
const computeBlocks = (blocks: string[], size: string): Ingredient[] => {
  const blocksCount = blocks.reduce(
    (acc: Record<string, number>, block) => (
      acc[block] ? { ...acc, [block]: acc[block] + 1 } : { ...acc, [block]: 1 }
    ),
    {},
  );
  return Object.entries(blocksCount).map(([name, count]) => ({
    name,
    size,
    count,
    displayNameId: gameBlocks[name].name,
    displayNameValue: name,
  }));
};

/**
 * Compute components for a recipe
 * @param {Ingredient[]} blocks
 * @return {Ingredient[]}
 */
const computeComponents = (blocks: Ingredient[]) => {
  const components: Record<string, number> = {};
  blocks.forEach(
    (block) => {
      gameBlocks[block.name].recipe.forEach(({ count, subtype }) => {
        components[subtype] = block.count * Number(count) + (components[subtype] || 0);
      });
    },
    {},
  );
  return Object.entries(components).map(([name, count]) => ({
    name,
    count,
    displayNameId: gameComponents[name].name,
    displayNameValue: name,
  }));
};

/**
 * Compute ingots for a recipe
 * @param {Ingredient[]} components
 * @return {Ingredient[]}
 */
const computeIngots = (components: Ingredient[]) => {
  const ingots: Record<string, number> = {};
  components.forEach(
    (component) => {
      gameComponents[component.name].recipe.forEach(({ count, subtype }) => {
        ingots[subtype] = component.count * Number(count) + (ingots[subtype] || 0);
      });
    },
    {},
  );
  return Object.entries(ingots).map(([name, count]) => ({
    name,
    count,
    displayNameId: gameIngots[name].name,
    displayNameValue: name,
  }));
};

/**
 * Compute recipe for a list of blocks
 * @param {Ingredient[]} blocks
 * @return {Recipe}
 */
const computeRecipe = (blocks: Ingredient[]) => {
  const components = computeComponents(blocks);
  const ingots = computeIngots(components);
  return {
    blocks,
    components,
    ingots,
  };
};

/**
 * Combine recipes
 * @param {Recipe[]} recipes
 * @return {Recipe}
 */
const combineRecipes = (recipes: Recipe[]) => {
  const blocks: Ingredient[] = [];
  recipes.forEach((recipe) => {
    recipe.blocks.forEach((ingredient) => {
      const index = blocks.findIndex((item) => item.name === ingredient.name);
      if (index === -1) {
        blocks.push({ ...ingredient });
      } else {
        blocks[index].count += ingredient.count;
      }
    });
  });
  return computeRecipe(blocks);
};

/**
 * Compute recipe for all blueprint grids
 * @param {Grid} mainGrid
 * @param {Grid[]} subGrids
 * @return {Recipe}
 */
const computeGlobalRecipe = (mainGrid: Grid, subGrids: Grid[]) => {
  const recipes = [mainGrid, ...subGrids].map((grid) => grid.recipe);
  return combineRecipes(recipes);
};

/**
 * Count blocks in a recipe
 * @param {Recipe} recipe
 * @return {number}
 */
const computeRecipeBlockCount = (recipe: Recipe) => (
  recipe.blocks.reduce((sum, block) => sum + block.count, 0)
);

/**
 * Compute mass of a grid from its recipe
 * @param {Recipe} recipe
 * @return {number}
 */
const computeRecipeMass = (recipe: Recipe) => (
  recipe.components.reduce(
    (sum, component) => (
      sum
      + (Number(gameComponents[component.name].mass) || 0)
      * component.count
    ),
    0,
  ));

/**
 * Compute pcu cost of a grid from its recipe
 * @param {Recipe} recipe
 * @return {number}
 */
const computeRecipePcu = (recipe: Recipe) => (
  recipe.blocks.reduce(
    (sum, block) => sum + Number(gameBlocks[block.name].pcu) * block.count,
    0,
  )
);

/**
 * Get all block names from a grid
 * @param {XmlObject} xmlGrid
 * @return {string[]}
 */
const getXmlGridBlocks = (xmlGrid: XmlObject) => {
  let cubeBlocks = xmlGrid.CubeBlocks.MyObjectBuilder_CubeBlock;
  if (!Array.isArray(cubeBlocks)) cubeBlocks = [cubeBlocks];
  return cubeBlocks.map((block: XmlObject) => (block.SubtypeName));
};

/**
 * Compute grid
 * @param {XmlObject} xmlGrid
 * @return {Grid}
 */
const computeGrid = (xmlGrid: XmlObject) => {
  const xmlBlocks = getXmlGridBlocks(xmlGrid);
  const size = xmlGrid.GridSizeEnum;
  const blocks = computeBlocks(xmlBlocks, size);

  const name = xmlGrid.DisplayName;
  const recipe = computeRecipe(blocks);
  const blockCount = computeRecipeBlockCount(recipe);
  const mass = computeRecipeMass(recipe);
  const pcuCost = computeRecipePcu(recipe);
  return { name, size, recipe, blockCount, mass, pcuCost };
};

/**
 * Compute main grid
 * @param {string} mainGridName
 * @param {XmlObject} xmlGrids
 * @return {Grid}
 */
const computeMainGrid = (mainGridName: string, xmlGrids: XmlObject) => {
  const xmlMainGrid = xmlGrids.find((grid: XmlObject) => grid.DisplayName === mainGridName);
  return computeGrid(xmlMainGrid);
};

/**
 * Compute sub grids
 * @param {string} mainGridName
 * @param {XmlObject} xmlGrids
 * @return {Grid[]}
 */
const computeSubGrids = (mainGridName: string, xmlGrids: XmlObject) => {
  const xmlSubGrids = xmlGrids.filter((grid: XmlObject) => grid.DisplayName !== mainGridName);
  return xmlSubGrids.map(computeGrid);
};

/**
 * Gather static information from xml object
 * @param {XmlObject} xmlObject
 * @return {{owner: {steamId: string, name: string}, name: string, workshopId: string, dlc: string}}
 */
const getStaticInfo = (xmlObject: XmlObject) => ({
  owner: {
    name: xmlObject.Definitions.ShipBlueprints.ShipBlueprint.DisplayName,
    steamId: xmlObject.Definitions.ShipBlueprints.ShipBlueprint.OwnerSteamId,
  },
  workshopId: xmlObject.Definitions.ShipBlueprints.ShipBlueprint.WorkshopId,
  dlc: xmlObject.Definitions.ShipBlueprints.ShipBlueprint.DLC,
  // eslint-disable-next-line no-underscore-dangle
  name: xmlObject.Definitions.ShipBlueprints.ShipBlueprint.Id._Subtype,

});

/**
 * Get all grids from xml object and wrap them with an array
 * @param {XmlObject} xmlObject
 * @return {XmlObject[]}
 */
const getXmlGrids = (xmlObject: XmlObject) => {
  const xmlGrids = xmlObject.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids.CubeGrid;
  return Array.isArray(xmlGrids) ? xmlGrids : [xmlGrids];
};

/**
 * Parse given xml string and return a blueprint object
 * @param {string} xmlString
 * @return {Blueprint}
 */
const computeBlueprint = (xmlString: string) => {
  const xmlObject = xmlToJsObject(xmlString);
  const xmlGrids = getXmlGrids(xmlObject);

  const staticInfo = getStaticInfo(xmlObject);
  const mainGrid = computeMainGrid(staticInfo.name, xmlGrids);
  const subGrids = computeSubGrids(staticInfo.name, xmlGrids);
  const recipe = computeGlobalRecipe(mainGrid, subGrids);
  const blockCount = computeRecipeBlockCount(recipe);
  const mass = computeRecipeMass(recipe);
  const pcuCost = computeRecipePcu(recipe);

  return {
    ...staticInfo,
    mainGrid,
    subGrids,
    recipe,
    blockCount,
    mass,
    pcuCost,
  };
};

export default computeBlueprint;
