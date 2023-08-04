import type { ReactNode } from "react";

export type GameState = {
  hasStarted: boolean;
  currentTurn: string;
  gameBoard: Array<Array<string>>;
  playerId: string;
  gameOver: boolean;
};

export type GameAction = {
  type: string;
  value: any;
};

export type GameDispatch = (action: GameAction) => void;

export type GameProviderProps = {
  children: ReactNode;
};
