import ingots from './ingots.json';

export interface GameIngot {
  name: string;
}

export type GameIngots = Record<string, GameIngot>;

export const gameIngots: GameIngots = ingots;
