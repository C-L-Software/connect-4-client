import React, { createContext, useReducer } from "react";
import {
  GameAction,
  GameActionType,
  GameDispatch,
  GameProviderProps,
  GameState,
} from "../types/game";

const GameContext = createContext<
  { state: GameState; dispatch: GameDispatch } | undefined
>(undefined);

const initialState: GameState = {
  hasStarted: false,
  turnPlayer: "123",
  gameBoard: [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ],
  gameOver: false,
  playerId: "123",
  hasConnected: false,
  socket: null,
  joinCode: "",
  winner: "",
};

// Click a piece
// { playerId: id, columnNumnber: numbers }

function gameReducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case "CONNECTED": {
      return {
        ...state,
        socket: action.value.socket,
        playerId: action.value.playerId,
        hasConnected: true,
      };
    }
    case GameActionType.NEW_GAME: {
      return {
        ...state,
        joinCode: action.value,
        winner: "",
      };
    }
    case "START_GAME": {
      return {
        ...state,
        hasStarted: true,
        winner: "",
      };
    }
    case "END_GAME": {
      return {
        ...state,
        winner: action.value.winner,
      };
    }
    case "UPDATE_BOARD": {
      return {
        ...state,
        gameBoard: action.value.gameBoard,
        turnPlayer: action.value.turnPlayer,
      };
    }
    default: {
      return state;
    }
  }
}

function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const value = { state, dispatch };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export { GameProvider, GameContext };
