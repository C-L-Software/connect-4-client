import React, { useEffect, useState, ReactNode } from "react";
import LoadingIndicator from "./components/loading-indicator";
import { SocketEvents } from "./types/game";
import { GameActionType } from "./types/game";
import { useGame } from "./hooks/useGame";
import { io } from "socket.io-client";

const socket = io("http://192.168.1.92:3000");

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
      dispatch({ type: GameActionType.CONNECTED, value: socket });
    });
  }, []);

  return loading ? <LoadingIndicator /> : children;
};
