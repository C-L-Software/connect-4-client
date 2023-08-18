import { useContext } from "react";
import { GameActionType, SocketEvents } from "../types/game";
import { GameContext } from "../contexts/game-context";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  const { state, dispatch } = context;

  const newGame = async () => {
    const { socket } = state;
    if (!socket) return;

    socket.emit(
      SocketEvents.NEW_GAME,
      {},
      (err: Error | null, { joinCode }: { joinCode: string }) => {
        if (err) {
          return;
        }
        dispatch({ type: GameActionType.NEW_GAME, value: joinCode });
      }
    );
  };

  return {
    ...context,
    newGame,
  };
};
