import PropTypes from 'prop-types';

const propTypeIngredient = PropTypes.shape({
  name: PropTypes.string.isRequired, count: PropTypes.number.isRequired,
});

const propTypeRecipe = PropTypes.shape({
  blocks: PropTypes.arrayOf(propTypeIngredient).isRequired,
  components: PropTypes.arrayOf(propTypeIngredient).isRequired,
  ingots: PropTypes.arrayOf(propTypeIngredient).isRequired,
});

const propTypeGrid = PropTypes.shape({
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  recipe: propTypeRecipe.isRequired,
});

const propTypeBlueprint = PropTypes.shape({
  dlc: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  name: PropTypes.string.isRequired,
  workshopId: PropTypes.string.isRequired,
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
