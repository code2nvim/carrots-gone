import { useState } from "react";
import { useGetMessageList } from "../../hooks/chat";

interface ChatRoomProps {
  select: React.RefObject<(room: string) => void>;
}

export function ChatRoom(props: ChatRoomProps) {
  const [room, setRoom] = useState("");

  const messages = useGetMessageList(room);

  props.select.current = (room: string) => setRoom(room);

  return (
    <ul>
      {room && <h1 className="bg-gray-800">{room}</h1>}
      {messages.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  );
}
