import components from './components.json';

export interface GameComponent {
  name: string;
  mass?: string;
  recipe: { subtype: string; count: string }[];
}

export type GameComponents = Record<string, GameComponent>;

export const gameComponents: GameComponents = components;
