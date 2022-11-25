import computeBlueprint from './computeBlueprint';
import miningShipBp from '../../mocks/blueprints/miningShipBp';
import grid7782 from '../../mocks/blueprints/grid7782';
import grid7420 from '../../mocks/blueprints/grid7420';
import grid4014 from '../../mocks/blueprints/grid4014';
import emptyBp from '../../mocks/blueprints/emptyBp';

describe('computeBlueprint', () => {
  it('should return an object', () => {
    expect(computeBlueprint(miningShipBp)).toBeInstanceOf(Object);
    expect(computeBlueprint(grid7782)).toBeInstanceOf(Object);
  });

  it('should throw, given a empty string', () => {
    // disable console.error
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => computeBlueprint('')).toThrow();
    expect(console.error).toHaveBeenCalledTimes(1);

    // restore console.error
    console.error = consoleError;
  });

  it('should throw, given an incomplete xml', () => {
    expect(() => computeBlueprint(emptyBp)).toThrow();
  });

  it('should extract blueprint static informations', () => {
    let blueprint = computeBlueprint(miningShipBp);
    expect(blueprint.dlc).toBe('DecorativeBlocks');
    expect(blueprint.name).toBe('Mining Ship');
    expect(blueprint.owner).toBeInstanceOf(Object);
    expect(blueprint.owner.name).toBe('FRChewbie');
    expect(blueprint.owner.steamId).toBe('76561198047419561');
    expect(blueprint.workshopId).toBe('0');

    blueprint = computeBlueprint(grid7782);
    expect(blueprint.dlc).toBeUndefined();
    expect(blueprint.name).toBe('Static Grid 7782');
    expect(blueprint.owner).toBeInstanceOf(Object);
    expect(blueprint.owner.name).toBe('FRChewbie');
    expect(blueprint.owner.steamId).toBe('76561198047419561');
    expect(blueprint.workshopId).toBe('0');
  });

  it('should extract a main grid and sub grids', () => {
    let blueprint = computeBlueprint(grid7782);
    expect(blueprint.mainGrid).toBeInstanceOf(Object);
    expect(blueprint.subGrids).toBeInstanceOf(Array);
    expect(blueprint.subGrids.length).toBe(0);

    blueprint = computeBlueprint(grid7420);
    expect(blueprint.mainGrid).toBeInstanceOf(Object);
    expect(blueprint.subGrids).toBeInstanceOf(Array);
    expect(blueprint.subGrids.length).toBe(1);

    blueprint = computeBlueprint(grid4014);
    expect(blueprint.mainGrid).toBeInstanceOf(Object);
    expect(blueprint.subGrids).toBeInstanceOf(Array);
    expect(blueprint.subGrids.length).toBe(2);
  });

  it('should extract grid static informations', () => {
    let blueprint = computeBlueprint(grid7782);
    expect(blueprint.mainGrid.name).toBe('Static Grid 7782');
    expect(blueprint.mainGrid.size).toBe('Large');

    blueprint = computeBlueprint(grid7420);
    expect(blueprint.mainGrid.name).toBe('Static Grid 7420');
    expect(blueprint.mainGrid.size).toBe('Large');
    expect(blueprint.subGrids[0].name).toBe('Large Grid 770');
    expect(blueprint.subGrids[0].size).toBe('Large');
  });

  it('should compute grid recipes', () => {
    const blueprint = computeBlueprint(grid7420);

    // main grid
    expect(blueprint.mainGrid.recipe).toBeInstanceOf(Object);
    // blocks
    expect(blueprint.mainGrid.recipe.blocks).toBeInstanceOf(Array);
    expect(blueprint.mainGrid.recipe.blocks.length).toBe(2);
    expect(blueprint.mainGrid.recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 1 });
    expect(blueprint.mainGrid.recipe.blocks).toContainEqual({ name: 'LargeStator', count: 1 });
    // components
    expect(blueprint.mainGrid.recipe.components).toBeInstanceOf(Array);
    expect(blueprint.mainGrid.recipe.components.length).toBe(5);
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'SteelPlate', count: 40 });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Construction', count: 10 });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'LargeTube', count: 4 });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Motor', count: 4 });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Computer', count: 2 });
    // ingots
    expect(blueprint.mainGrid.recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.mainGrid.recipe.ingots.length).toBe(3);
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Iron', count: 1121 });
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Nickel', count: 20 });
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Silicon', count: 0.4 });

    // sub grid
    expect(blueprint.subGrids[0].recipe).toBeInstanceOf(Object);
    // blocks
    expect(blueprint.subGrids[0].recipe.blocks).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.blocks.length).toBe(2);
    expect(blueprint.subGrids[0].recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 1 });
    expect(blueprint.subGrids[0].recipe.blocks).toContainEqual({ name: 'LargeRotor', count: 1 });
    // components
    expect(blueprint.subGrids[0].recipe.components).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.components.length).toBe(2);
    expect(blueprint.subGrids[0].recipe.components).toContainEqual({ name: 'SteelPlate', count: 55 });
    expect(blueprint.subGrids[0].recipe.components).toContainEqual({ name: 'LargeTube', count: 6 });
    // ingots
    expect(blueprint.subGrids[0].recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.ingots.length).toBe(1);
    expect(blueprint.subGrids[0].recipe.ingots).toContainEqual({ name: 'Iron', count: 1335 });
  });

  it('should compute global recipe', () => {
    const blueprint = computeBlueprint(grid7420);

    expect(blueprint.recipe).toBeInstanceOf(Object);
    // blocks
    expect(blueprint.recipe.blocks).toBeInstanceOf(Array);
    expect(blueprint.recipe.blocks.length).toBe(3);
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 2 });
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeStator', count: 1 });
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeRotor', count: 1 });
    // components
    expect(blueprint.recipe.components).toBeInstanceOf(Array);
    expect(blueprint.recipe.components.length).toBe(5);
    expect(blueprint.recipe.components).toContainEqual({ name: 'SteelPlate', count: 95 });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Construction', count: 10 });
    expect(blueprint.recipe.components).toContainEqual({ name: 'LargeTube', count: 10 });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Motor', count: 4 });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Computer', count: 2 });
    // ingots
    expect(blueprint.recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.recipe.ingots.length).toBe(3);
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Iron', count: 2456 });
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Nickel', count: 20 });
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Silicon', count: 0.4 });
  });

  it('should compute grids mass', () => {
    const blueprint = computeBlueprint(grid7420);

    expect(blueprint.mass).toBe(2326.4);
    expect(blueprint.mainGrid.mass).toBe(1076.4);
    expect(blueprint.subGrids[0].mass).toBe(1250);
  });

  it('should compute grids pcu cost', () => {
    const blueprint = computeBlueprint(grid7420);

    expect(blueprint.pcuCost).toBe(103);
    expect(blueprint.mainGrid.pcuCost).toBe(101);
    expect(blueprint.subGrids[0].pcuCost).toBe(2);
  });

  it('should compute grids block count', () => {
    const blueprint = computeBlueprint(grid7420);

    expect(blueprint.blockCount).toBe(4);
    expect(blueprint.mainGrid.blockCount).toBe(2);
    expect(blueprint.subGrids[0].blockCount).toBe(2);
  });
});
