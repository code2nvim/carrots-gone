import { useState } from "react";
import { useGetMessageList } from "../../hooks/chat";

interface ChatRoomProps {
  select: React.RefObject<(room: string) => void>;
}

export function ChatRoom(props: ChatRoomProps) {
  const [room, setRoom] = useState("default");

  const messages = useGetMessageList(room);

  props.select.current = (room: string) => setRoom(room);

  return (
    <section className="flex grow flex-col items-center gap-2">
      {room && (
        <h1 className="rounded-full bg-blue-950 px-6 py-2 text-center">
          {room}
        </h1>
      )}
      <ul className="size-full gap-4 rounded-md bg-slate-800 p-4">
        {messages.map((message, idx) => (
          <li key={message.id} className="gap-2 p-1">
            {(idx == 0 || messages[idx - 1].user != message.user) && (
              <label className="p-1"> {message.user}:</label>
            )}
            <p className="w-min rounded-md bg-blue-900 p-2">
              {message.content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
