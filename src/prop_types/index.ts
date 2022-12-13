import PropTypes from 'prop-types';

const propTypeIngredient = PropTypes.exact({
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  displayNameValue: PropTypes.string.isRequired,
  displayNameId: PropTypes.string.isRequired,
  size: PropTypes.string,
});

const propTypeRecipe = PropTypes.exact({
  blocks: PropTypes.arrayOf(propTypeIngredient).isRequired,
  components: PropTypes.arrayOf(propTypeIngredient).isRequired,
  ingots: PropTypes.arrayOf(propTypeIngredient).isRequired,
});

const propTypeGrid = PropTypes.exact({
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  blockCount: PropTypes.number.isRequired,
  mass: PropTypes.number.isRequired,
  recipe: propTypeRecipe.isRequired,
  pcuCost: PropTypes.number.isRequired,
});

const propTypeBlueprint = PropTypes.exact({
  dlc: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  name: PropTypes.string.isRequired,
  workshopId: PropTypes.string.isRequired,
  owner: PropTypes.exact({
    name: PropTypes.string.isRequired,
    steamId: PropTypes.string.isRequired,
  }),
  blockCount: PropTypes.number.isRequired,
  pcuCost: PropTypes.number.isRequired,
  mass: PropTypes.number.isRequired,
  recipe: propTypeRecipe.isRequired,
  mainGrid: propTypeGrid.isRequired,
  subGrids: PropTypes.arrayOf(propTypeGrid).isRequired,
});

export {
  propTypeIngredient,
  propTypeRecipe,
  propTypeGrid,
  propTypeBlueprint,
};
