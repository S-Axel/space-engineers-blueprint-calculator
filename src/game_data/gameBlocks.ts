import blocks from './blocks.json';

export interface GameBlock {
  type: string;
  name: string;
  size: string;
  pcu: string;
  recipe: { subtype: string; count: string }[];
}

export type GameBlocks = Record<string, GameBlock>;

export const gameBlocks: GameBlocks = blocks;
