import { useContext } from "react";
import { GameContext } from "../contexts/game-context";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
