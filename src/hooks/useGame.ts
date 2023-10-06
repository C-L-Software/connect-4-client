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

  const joinGame = async (joinCode: string) => {
    const { socket } = state;
    socket?.emit(SocketEvents.JOIN_GAME, { joinCode }, (err: Error | null) => {
      if (err) {
        // TODO: Error handling
        return;
      }
    });
  };

  const dropChip = (column: number) => {
    const { socket } = state;
    socket?.emit(SocketEvents.DROP_CHIP, { column }, (err: Error | null) => {
      if (err) {
        return;
      }
    });
  };

  return {
    ...context,
    newGame,
    joinGame,
    dropChip,
  };
};
