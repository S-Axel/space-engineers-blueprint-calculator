/* eslint-disable no-console */
import computeBlueprint from './computeBlueprint';
import miningShipBp from '../../mocks/xmlBlueprints/miningShipBp';
import grid7782 from '../../mocks/xmlBlueprints/grid7782';
import grid7420 from '../../mocks/xmlBlueprints/grid7420';
import grid4014 from '../../mocks/xmlBlueprints/grid4014';
import emptyBp from '../../mocks/xmlBlueprints/emptyBp';

describe('blueprintService/computeBlueprint', () => {
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
    expect(Array.isArray(blueprint.dlc)).toBe(true);
    expect(blueprint.dlc).toContainEqual('DecorativeBlocks');
    expect(blueprint.name).toBe('Mining Ship');
    expect(blueprint.owner).toBeInstanceOf(Object);
    expect(blueprint.owner.name).toBe('FRChewbie');
    expect(blueprint.owner.steamId).toBe('76561198047419561');
    expect(blueprint.workshopId).toBe('0');

    blueprint = computeBlueprint(grid7782);
    expect(Array.isArray(blueprint.dlc)).toBe(true);
    expect(blueprint.dlc.length).toBe(0);
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
    expect(blueprint.mainGrid.recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_LightArmorBlock', displayNameValue: 'LargeBlockArmorBlock' });
    expect(blueprint.mainGrid.recipe.blocks).toContainEqual({ name: 'LargeStator', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_Rotor', displayNameValue: 'LargeStator' });
    // components
    expect(blueprint.mainGrid.recipe.components).toBeInstanceOf(Array);
    expect(blueprint.mainGrid.recipe.components.length).toBe(5);
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'SteelPlate', count: 40, displayNameId: 'DisplayName_Item_SteelPlate', displayNameValue: 'SteelPlate' });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Construction', count: 10, displayNameId: 'DisplayName_Item_ConstructionComponent', displayNameValue: 'Construction' });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'LargeTube', count: 4, displayNameId: 'DisplayName_Item_LargeSteelTube', displayNameValue: 'LargeTube' });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Motor', count: 4, displayNameId: 'DisplayName_Item_Motor', displayNameValue: 'Motor' });
    expect(blueprint.mainGrid.recipe.components).toContainEqual({ name: 'Computer', count: 2, displayNameId: 'DisplayName_Item_Computer', displayNameValue: 'Computer' });
    // ingots
    expect(blueprint.mainGrid.recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.mainGrid.recipe.ingots.length).toBe(3);
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Iron', count: 1121, displayNameId: 'DisplayName_Item_IronIngot', displayNameValue: 'Iron' });
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Nickel', count: 20, displayNameId: 'DisplayName_Item_NickelIngot', displayNameValue: 'Nickel' });
    expect(blueprint.mainGrid.recipe.ingots).toContainEqual({ name: 'Silicon', count: 0.4, displayNameId: 'DisplayName_Item_SiliconWafer', displayNameValue: 'Silicon' });

    // sub grid
    expect(blueprint.subGrids[0].recipe).toBeInstanceOf(Object);
    // blocks
    expect(blueprint.subGrids[0].recipe.blocks).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.blocks.length).toBe(2);
    expect(blueprint.subGrids[0].recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_LightArmorBlock', displayNameValue: 'LargeBlockArmorBlock' });
    expect(blueprint.subGrids[0].recipe.blocks).toContainEqual({ name: 'LargeRotor', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_RotorPart', displayNameValue: 'LargeRotor' });
    // components
    expect(blueprint.subGrids[0].recipe.components).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.components.length).toBe(2);
    expect(blueprint.subGrids[0].recipe.components).toContainEqual({ name: 'SteelPlate', count: 55, displayNameId: 'DisplayName_Item_SteelPlate', displayNameValue: 'SteelPlate' });
    expect(blueprint.subGrids[0].recipe.components).toContainEqual({ name: 'LargeTube', count: 6, displayNameId: 'DisplayName_Item_LargeSteelTube', displayNameValue: 'LargeTube' });
    // ingots
    expect(blueprint.subGrids[0].recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.subGrids[0].recipe.ingots.length).toBe(1);
    expect(blueprint.subGrids[0].recipe.ingots).toContainEqual({ name: 'Iron', count: 1335, displayNameId: 'DisplayName_Item_IronIngot', displayNameValue: 'Iron' });
  });

  it('should compute global recipe', () => {
    const blueprint = computeBlueprint(grid7420);

    expect(blueprint.recipe).toBeInstanceOf(Object);
    // blocks
    expect(blueprint.recipe.blocks).toBeInstanceOf(Array);
    expect(blueprint.recipe.blocks.length).toBe(3);
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeBlockArmorBlock', count: 2, size: 'Large', displayNameId: 'DisplayName_Block_LightArmorBlock', displayNameValue: 'LargeBlockArmorBlock' });
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeStator', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_Rotor', displayNameValue: 'LargeStator' });
    expect(blueprint.recipe.blocks).toContainEqual({ name: 'LargeRotor', count: 1, size: 'Large', displayNameId: 'DisplayName_Block_RotorPart', displayNameValue: 'LargeRotor' });
    // components
    expect(blueprint.recipe.components).toBeInstanceOf(Array);
    expect(blueprint.recipe.components.length).toBe(5);
    expect(blueprint.recipe.components).toContainEqual({ name: 'SteelPlate', count: 95, displayNameId: 'DisplayName_Item_SteelPlate', displayNameValue: 'SteelPlate' });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Construction', count: 10, displayNameId: 'DisplayName_Item_ConstructionComponent', displayNameValue: 'Construction' });
    expect(blueprint.recipe.components).toContainEqual({ name: 'LargeTube', count: 10, displayNameId: 'DisplayName_Item_LargeSteelTube', displayNameValue: 'LargeTube' });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Motor', count: 4, displayNameId: 'DisplayName_Item_Motor', displayNameValue: 'Motor' });
    expect(blueprint.recipe.components).toContainEqual({ name: 'Computer', count: 2, displayNameId: 'DisplayName_Item_Computer', displayNameValue: 'Computer' });
    // ingots
    expect(blueprint.recipe.ingots).toBeInstanceOf(Array);
    expect(blueprint.recipe.ingots.length).toBe(3);
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Iron', count: 2456, displayNameId: 'DisplayName_Item_IronIngot', displayNameValue: 'Iron' });
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Nickel', count: 20, displayNameId: 'DisplayName_Item_NickelIngot', displayNameValue: 'Nickel' });
    expect(blueprint.recipe.ingots).toContainEqual({ name: 'Silicon', count: 0.4, displayNameId: 'DisplayName_Item_SiliconWafer', displayNameValue: 'Silicon' });
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
