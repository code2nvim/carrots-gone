import {
  useFloatingMessage,
  useGetMessageList,
  useGetUsername,
} from "../../hooks/chat";

interface ChatRoomProps {
  room: string;
}

export function ChatRoom({ room }: ChatRoomProps) {
  const messages = useGetMessageList(room);

  const { status, data, error } = useGetUsername();
  const user = data?.username;

  useFloatingMessage(status, error);

  return (
    <section className="flex flex-col items-center gap-2 overflow-auto">
      {room && (
        <h1 className="rounded-full bg-blue-950 px-3 py-2 text-center text-sm">
          {room}
        </h1>
      )}
      <ul className="size-full gap-4 overflow-auto rounded-md bg-slate-800 p-4">
        {messages.map((message, idx) => (
          <li
            key={message.id}
            className={`flex ${message.user == user && "justify-end"}`}
          >
            <div className="flex flex-col">
              {(idx == 0 || messages[idx - 1].user != message.user) && ( // consecutive messages
                <label className="p-1">
                  {message.user != user && message.user + ": "}
                </label>
              )}
              <p className="my-1 flex rounded-md bg-blue-900 p-2">
                {message.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
