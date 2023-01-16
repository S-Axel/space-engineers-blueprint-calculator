import blocks from './blocks.json';

export interface GameBlock {
  type: string;
  name: string;
  size: string;
  pcu: string;
  recipe: { subtype: string; count: string }[];
}

export interface GameBlocks {
  [key: string]: GameBlock;
}

export const gameBlocks: GameBlocks = blocks;
