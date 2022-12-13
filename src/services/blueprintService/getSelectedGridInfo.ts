import GRID_OPTION from '../../constants/grid_option';

/**
 * From a blueprint and a selected grid id, returns the selected grid info.
 * The id can be a number (sub grid id) or a string (GRID_OPTION).
 * @param {Blueprint} blueprint
 * @param {string|number} selectedGrid
 * @return {Grid|Blueprint}
 */
const getSelectedGridInfo = (blueprint, selectedGrid) => {
  if (typeof selectedGrid === 'number') {
    return blueprint.subGrids[selectedGrid];
  }
  if (selectedGrid === GRID_OPTION.MAIN) {
    return blueprint.mainGrid;
  }
  if (selectedGrid === GRID_OPTION.ALL) {
    return blueprint;
  }
  throw new Error(`Invalid selectedGrid: ${selectedGrid}`);
};

export default getSelectedGridInfo;
