import grid7420 from '../../mocks/blueprints/grid7420';
import translateBlueprint from './translateBlueprint';

describe('blueprintService/translateBlueprint', () => {
  it('returns same blueprint object reference', () => {
    const blueprint = grid7420.get();
    expect(translateBlueprint(blueprint)).toBe(blueprint);
  });

  it('translates mainGrid recipe', () => {
    const blueprint = grid7420.get();
    translateBlueprint(blueprint);

    // Blocks
    expect(blueprint.mainGrid.recipe.blocks[0].displayNameValue).toBe('Light Armor Block');
    expect(blueprint.mainGrid.recipe.blocks[1].displayNameValue).toBe('Rotor');

    // Components
    expect(blueprint.mainGrid.recipe.components[0].displayNameValue).toBe('Steel Plate');
    expect(blueprint.mainGrid.recipe.components[1].displayNameValue).toBe('Construction Comp.');
    expect(blueprint.mainGrid.recipe.components[2].displayNameValue).toBe('Large Steel Tube');
    expect(blueprint.mainGrid.recipe.components[3].displayNameValue).toBe('Motor');
    expect(blueprint.mainGrid.recipe.components[4].displayNameValue).toBe('Computer');

    // Ingots
    expect(blueprint.mainGrid.recipe.ingots[0].displayNameValue).toBe('Iron Ingot');
    expect(blueprint.mainGrid.recipe.ingots[1].displayNameValue).toBe('Nickel Ingot');
    expect(blueprint.mainGrid.recipe.ingots[2].displayNameValue).toBe('Silicon Wafer');
  });

  it('translates subGrid recipes', () => {
    const blueprint = grid7420.get();
    translateBlueprint(blueprint);

    // Blocks
    expect(blueprint.subGrids[0].recipe.blocks[0].displayNameValue).toBe('Rotor Part');
    expect(blueprint.subGrids[0].recipe.blocks[1].displayNameValue).toBe('Light Armor Block');

    // Components
    expect(blueprint.subGrids[0].recipe.components[0].displayNameValue).toBe('Steel Plate');
    expect(blueprint.subGrids[0].recipe.components[1].displayNameValue).toBe('Large Steel Tube');

    // Ingots
    expect(blueprint.subGrids[0].recipe.ingots[0].displayNameValue).toBe('Iron Ingot');
  });

  it('translates global recipe', () => {
    const blueprint = grid7420.get();
    translateBlueprint(blueprint);
    // Blocks
    expect(blueprint.recipe.blocks[0].displayNameValue).toBe('Light Armor Block');
    expect(blueprint.recipe.blocks[1].displayNameValue).toBe('Rotor');
    expect(blueprint.recipe.blocks[2].displayNameValue).toBe('Rotor Part');

    // Components
    expect(blueprint.recipe.components[0].displayNameValue).toBe('Steel Plate');
    expect(blueprint.recipe.components[1].displayNameValue).toBe('Construction Comp.');
    expect(blueprint.recipe.components[2].displayNameValue).toBe('Large Steel Tube');
    expect(blueprint.recipe.components[3].displayNameValue).toBe('Motor');
    expect(blueprint.recipe.components[4].displayNameValue).toBe('Computer');

    // Ingots
    expect(blueprint.recipe.ingots[0].displayNameValue).toBe('Iron Ingot');
    expect(blueprint.recipe.ingots[1].displayNameValue).toBe('Nickel Ingot');
    expect(blueprint.recipe.ingots[2].displayNameValue).toBe('Silicon Wafer');
  });
});
