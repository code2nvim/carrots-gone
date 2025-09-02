import { useEffect, useState } from "react";

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

export function useGetRoomList(): Room[] {
  const [rooms, setRooms] = useState([] as Room[]);

  useEffect(() => {
    const source = new EventSource("/api/rooms");

    source.addEventListener("rooms", (event) => {
      const data = JSON.parse(event.data);
      setRooms(data);
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
