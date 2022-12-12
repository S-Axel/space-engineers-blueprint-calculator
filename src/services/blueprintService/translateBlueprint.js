import langEn from '../../game_data/lang/en.json';

/**
 * translate a recipe with the given translation dictionary
 * @param {Recipe} recipe
 * @param {Object} translations
 * @return {void}
 */
const translateRecipe = (recipe, translations) => {
  recipe.blocks.forEach((block) => {
    // eslint-disable-next-line no-param-reassign
    block.displayNameValue = translations[block.displayNameId] || block.name;
  });
  recipe.components.forEach((component) => {
    // eslint-disable-next-line no-param-reassign
    component.displayNameValue = translations[component.displayNameId] || component.name;
  });
  recipe.ingots.forEach((ingot) => {
    // eslint-disable-next-line no-param-reassign
    ingot.displayNameValue = translations[ingot.displayNameId] || ingot.name;
  });
};

/**
 * translate in english the given blueprint and returns it
 * @param {Blueprint} blueprint
 * @return {Blueprint}
 */
const translateBlueprint = (blueprint) => {
  const translations = langEn;
  translateRecipe(blueprint.recipe, translations);
  translateRecipe(blueprint.mainGrid.recipe, translations);
  blueprint.subGrids.forEach((grid) => {
    translateRecipe(grid.recipe, translations);
  });
  return blueprint;
};

export default translateBlueprint;
