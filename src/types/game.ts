import type { ReactNode } from "react";
import type { Socket } from "socket.io-client";

export type GameState = {
  hasConnected: boolean;
  hasStarted: boolean;
  turnPlayer: string;
  gameBoard: Array<Array<string>>;
  playerId: string;
  gameOver: boolean;
  socket: Socket | null;
  joinCode: string;
  winner: string;
};

export enum GameActionType {
  CONNECTED = "CONNECTED",
  START_GAME = "START_GAME",
  END_GAME = "END_GAME",
  UPDATE_BOARD = "UPDATE_BOARD",
  NEW_GAME = "NEW_GAME",
}

export enum SocketEvents {
  ACK = "ack",
  NEW_GAME = "new_game",
  JOIN_GAME = "join_game",
  START_GAME = "start_game",
  GAME_STATE = "game_state",
  DROP_CHIP = "drop_chip",
  PLAYER_JOINED = "player_joined",
  GAME_OVER = "game_over",
}

export type GameAction = {
  type: GameActionType;
  value?: any;
};

export type GameDispatch = (action: GameAction) => void;

export type GameProviderProps = {
  children: ReactNode;
};
