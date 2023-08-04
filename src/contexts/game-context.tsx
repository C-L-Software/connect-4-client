import React, { createContext, useReducer } from "react";
import {
  GameAction,
  GameDispatch,
  GameProviderProps,
  GameState,
} from "../types/game";

const GameContext = createContext<
  { state: GameState; dispatch: GameDispatch } | undefined
>(undefined);

const initialState: GameState = {
  hasStarted: false,
  currentTurn: "",
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
};

// Click a piece
// { playerId: id, columnNumnber: numbers }

function gameReducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case "START_GAME": {
      return {
        ...state,
        hasStarted: true,
      };
    }
    case "END_GAME": {
      return {
        ...state,
        hasStarted: false,
      };
    }
    case "UPDATE_BOARD": {
      return {
        ...state,
        gameBoard: action.value,
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
