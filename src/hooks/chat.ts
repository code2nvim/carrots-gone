import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFloatingStore } from "../store/floating";

export interface Room {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  user: string;
  room: string;
  content: string;
}

export function useGetUsername() {
  return useQuery<{ username: string }>({
    queryKey: ["username"],
    queryFn: async () => {
      const res = await fetch("/api/username");
      return res.json();
    },
  });
}

export function useFloatingMessage(status: string, error: Error | null) {
  const { showMessage, close } = useFloatingStore();

  useEffect(() => {
    switch (status) {
      case "pending":
        showMessage("Loading: username");
        break;

      case "error":
        showMessage("Error:" + error?.message);
        break;

      default:
        close();
        break;
    }
  }, [status, error, showMessage, close]);
}

export function useGetRoomList(): Room[] {
  const [rooms, setRooms] = useState([] as Room[]);

  useEffect(() => {
    const source = new EventSource("/api/rooms");

    source.addEventListener("rooms", (event) => {
      const data = JSON.parse(event.data);
      setRooms(data ? data : []);
    });

    return () => {
      source.close();
    };
  }, []);

  return rooms;
}

export function useGetMessageList(room: string): Message[] {
  const [messages, setMessages] = useState([] as Message[]);

  useEffect(() => {
    const source = new EventSource("/api/room/" + room);

    source.addEventListener("messages", (event) => {
      const data = JSON.parse(event.data);
      setMessages(data ? data : []);
    });

    return () => {
      source.close();
    };
  }, [room]);

  return messages;
}
