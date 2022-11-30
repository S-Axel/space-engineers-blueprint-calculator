/* eslint-disable no-console */
const blocks = require('../../game_data/blocks.json');
const components = require('../../game_data/components.json');
const ingots = require('../../game_data/ingots.json');

const longBlock = Object.keys(blocks).sort((a, b) => b.length - a.length);
console.log('\nBlocks:');
console.log(longBlock[0]);

const longComponent = Object.keys(components).sort((a, b) => b.length - a.length);
console.log('\nComponents:');
console.log(longComponent[0]);

const longIngot = Object.keys(ingots).sort((a, b) => b.length - a.length);
console.log('\nIngots:');
console.log(longIngot[0]);
