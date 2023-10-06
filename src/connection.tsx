import React, { useEffect, useState, ReactNode } from "react";
import LoadingIndicator from "./components/loading-indicator";
import { SocketEvents } from "./types/game";
import { GameActionType } from "./types/game";
import { useGame } from "./hooks/useGame";
import { io } from "socket.io-client";

const socket = io("https://jlemon.org:4533", { secure: true });

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  const { dispatch } = useGame();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Connect to the socket
    socket.on(SocketEvents.ACK, () => {
      setLoading(false);
      dispatch({
        type: GameActionType.CONNECTED,
        value: { socket, playerId: socket.id },
      });
    });

    // Wait for the game to start
    socket.on(SocketEvents.START_GAME, () => {
      dispatch({ type: GameActionType.START_GAME });
    });

    socket.on(SocketEvents.GAME_STATE, ({ gameBoard, turnPlayer }) => {
      dispatch({
        type: GameActionType.UPDATE_BOARD,
        value: { gameBoard, turnPlayer },
      });
    });

    socket.on(SocketEvents.GAME_OVER, ({ winner }: { winner: string }) => {
      dispatch({
        type: GameActionType.END_GAME,
        value: { winner },
      });
    });
  }, []);

  return loading ? <LoadingIndicator /> : children;
};
