import ingots from './ingots.json';

export interface GameIngot {
  name: string;
}

export interface GameIngots {
  [key: string]: GameIngot;
}

export const gameIngots: GameIngots = ingots;
