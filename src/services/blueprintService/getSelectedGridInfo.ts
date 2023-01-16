import GridDisplayOption from '../../enums/GridDisplayOption';
import { Blueprint, Grid } from './types';

/**
 * From a blueprint and a selected grid id, returns the selected grid info.
 * The id can be a number (sub grid id) or a GridDisplayOption enum.
 * @param {Blueprint} blueprint
 * @param {GridDisplayOption|number} selectedGrid
 * @return {Grid|Blueprint}
 */
const getSelectedGridInfo = (
  blueprint: Blueprint,
  selectedGrid: GridDisplayOption | number,
): Grid | Blueprint => {
  if (typeof selectedGrid === 'number') {
    if (blueprint.subGrids[selectedGrid]) {
      return blueprint.subGrids[selectedGrid];
    }
    throw new Error(`Invalid selectedGrid: ${selectedGrid}`);
  }
  if (selectedGrid === GridDisplayOption.MAIN) {
    return blueprint.mainGrid;
  }
  return blueprint;
};

export default getSelectedGridInfo;
