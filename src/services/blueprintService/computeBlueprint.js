import gameBlocks from '../../game_data/blocks.json';
import gameComponents from '../../game_data/components.json';
import xmlToJsObject from '../../utils/xmlToJsObject';

/**
 * Block
 * @typedef {{name: string, count: number}} Block
 */

/**
 * Component
 * @typedef {{name: string, count: number}} Component
 */

/**
 * Ingot
 * @typedef {{name: string, count: number}} Ingot
 */

/**
 * Recipe
 * @typedef {{blocks: Block[], components: Component[], ingots: Ingot[]}} Recipe
 */

/**
 * Grid
 * @typedef {{name: string, size: string, recipe: Recipe}} Grid
 */

/**
 * Blueprint
 * @typedef {{
 *   owner: {steamId: string, name: string},
 *   subGrids: Grid[],
 *   mainGrid: Grid,
 *   workshopId: string,
 *   dlc: string
 * }} Blueprint
 */

/**
 * Compute blocks for a recipe
 * @param {string[]} blocks
 * @return {Block[]}
 */
const computeBlocks = (blocks) => {
  const blocksCount = blocks.reduce(
    (acc, block) => (acc[block] ? { ...acc, [block]: acc[block] + 1 } : { ...acc, [block]: 1 }),
    {},
  );
  return Object.entries(blocksCount).map(([name, count]) => ({ name, count }));
};

/**
 * Compute components for a recipe
 * @param {Block[]} blocks
 * @return {Component[]}
 */
const computeComponents = (blocks) => {
  const components = {};
  blocks.forEach(
    (block) => {
      gameBlocks[block.name].recipe.forEach(({ count, subtype }) => {
        components[subtype] = block.count * Number(count) + (components[subtype] || 0);
      });
    },
    {},
  );
  return Object.entries(components).map(([name, count]) => ({ name, count }));
};

/**
 * Compute ingots for a recipe
 * @param {Component[]} components
 * @return {Ingot[]}
 */
const computeIngots = (components) => {
  const ingots = {};
  components.forEach(
    (component) => {
      gameComponents[component.name].recipe.forEach(({ count, subtype }) => {
        ingots[subtype] = component.count * Number(count) + (ingots[subtype] || 0);
      });
    },
    {},
  );
  return Object.entries(ingots).map(([name, count]) => ({ name, count }));
};

/**
 * Compute recipe for a list of blocks
 * @param {Block[]} blocks
 * @return {Recipe}
 */
const computeRecipe = (blocks) => {
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
const combineRecipes = (recipes) => {
  const blocks = [];
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
const computeGlobalRecipe = (mainGrid, subGrids) => {
  const recipes = [mainGrid, ...subGrids].map((grid) => grid.recipe);
  return combineRecipes(recipes);
};

/**
 * Get all block names from a grid
 * @param {Object} xmlGrid
 * @return {string[]}
 */
const getXmlGridBlocks = (xmlGrid) => {
  let cubeBlocks = xmlGrid.CubeBlocks.MyObjectBuilder_CubeBlock;
  if (!Array.isArray(cubeBlocks)) cubeBlocks = [cubeBlocks];
  return cubeBlocks.map((block) => (block.SubtypeName));
};

/**
 * Compute grid
 * @param {Object} xmlGrid
 * @return {Grid}
 */
const computeGrid = (xmlGrid) => {
  const xmlBlocks = getXmlGridBlocks(xmlGrid);
  const blocks = computeBlocks(xmlBlocks);

  const name = xmlGrid.DisplayName;
  const size = xmlGrid.GridSizeEnum;
  const recipe = computeRecipe(blocks);
  return { name, size, recipe };
};

/**
 * Compute main grid
 * @param {string} mainGridName
 * @param {object} xmlGrids
 * @return {Grid[]}
 */
const computeMainGrid = (mainGridName, xmlGrids) => {
  const xmlMainGrid = xmlGrids.find((grid) => grid.DisplayName === mainGridName);
  return computeGrid(xmlMainGrid);
};

/**
 * Compute sub grids
 * @param {string} mainGridName
 * @param {object} xmlGrids
 * @return {Grid[]}
 */
const computeSubGrids = (mainGridName, xmlGrids) => {
  const xmlSubGrids = xmlGrids.filter((grid) => grid.DisplayName !== mainGridName);
  return xmlSubGrids.map(computeGrid);
};

/**
 * Gather static informations from xml object
 * @param {string} xmlObject
 * @return {{owner: {steamId: *, name: *}, name: *, workshopId: *, dlc: *}}
 */
const getStaticInfo = (xmlObject) => ({
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
 * @param {Object} xmlObject
 * @return {Object[]}
 */
const getXmlGrids = (xmlObject) => {
  const xmlGrids = xmlObject.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids.CubeGrid;
  return Array.isArray(xmlGrids) ? xmlGrids : [xmlGrids];
};

/**
 * Parse given xml string and return a blueprint object
 * @param {string} xmlString
 * @return {Blueprint}
 */
const computeBlueprint = (xmlString) => {
  const xmlObject = xmlToJsObject(xmlString);
  const xmlGrids = getXmlGrids(xmlObject);

  const staticInfo = getStaticInfo(xmlObject);
  const mainGrid = computeMainGrid(staticInfo.name, xmlGrids);
  const subGrids = computeSubGrids(staticInfo.name, xmlGrids);
  const recipe = computeGlobalRecipe(mainGrid, subGrids);

  return {
    ...staticInfo,
    mainGrid,
    subGrids,
    recipe,
  };
};

export default computeBlueprint;