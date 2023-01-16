import computeBlueprint from './computeBlueprint';
import getSelectedGridInfo from './getSelectedGridInfo';
import grid4014 from '../../mocks/xmlBlueprints/grid4014';
import GridDisplayOption from '../../enums/GridDisplayOption';

describe('blueprintService/getSelectedGridInfo', () => {
  it('should throw, given an invalid selectedGrid', () => {
    // @ts-expect-error
    expect(() => getSelectedGridInfo(computeBlueprint(grid4014), 'invalid')).toThrow();
  });

  it('should return the main grid, given GridDisplayOption.Main', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, GridDisplayOption.Main)).toBe(blueprint.mainGrid);
  });

  it('should return the sub grid, given a sub grid id', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, 1)).toBe(blueprint.subGrids[1]);
  });

  it('should return the blueprint, given GridDisplayOption.All', () => {
    const blueprint = computeBlueprint(grid4014);
    expect(getSelectedGridInfo(blueprint, GridDisplayOption.All)).toBe(blueprint);
  });
});
