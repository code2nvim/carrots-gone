import { useGetMessageList, useGetUsername } from "../../hooks/chat";

interface ChatRoomProps {
  room: string;
}

export function ChatRoom({ room }: ChatRoomProps) {
  const messages = useGetMessageList(room);

  const username = useGetUsername();

  return (
    <section className="flex grow flex-col items-center gap-2">
      {room && (
        <h1 className="rounded-full bg-blue-950 px-6 py-2 text-center">
          {room}
        </h1>
      )}
      <ul className="size-full gap-4 rounded-md bg-slate-800 p-4">
        {messages.map((message, idx) => (
          <li
            key={message.id}
            className={`${message.user == username && "flex justify-end"}`}
          >
            {(idx == 0 || messages[idx - 1].user != message.user) && (
              <label className="p-1">
                {message.user != username && message.user + ": "}
              </label>
            )}
            <p className="my-1 w-min rounded-md bg-blue-900 p-2">
              {message.content}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
