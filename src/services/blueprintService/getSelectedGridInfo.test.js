import computeBlueprint from './computeBlueprint';
import getSelectedGridInfo from './getSelectedGridInfo';
import grid4014 from '../../mocks/blueprints/grid4014';
import GRID_OPTION from '../../constants/grid_option';

describe('blueprintService/getSelectedGridInfo', () => {
  it('should throw, given an invalid selectedGrid', () => {
    expect(() => getSelectedGridInfo(computeBlueprint(grid4014), 'invalid')).toThrow();
  });

  it('should return the main grid, given GRID_OPTION.MAIN', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, GRID_OPTION.MAIN)).toBe(blueprint.mainGrid);
  });

  it('should return the sub grid, given a sub grid id', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, 1)).toBe(blueprint.subGrids[1]);
  });

  it('should return the blueprint, given GRID_OPTION.ALL', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, GRID_OPTION.ALL)).toBe(blueprint);
  });
});
