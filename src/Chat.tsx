import { useState } from "react";
import { RoomList } from "./components/chat/RoomList";
import { ChatRoom } from "./components/chat/ChatRoom";
import { InputBox } from "./components/chat/InputBox";

export default function Chat() {
  const [room, setRoom] = useState("default channel");

  const selectRoom = (room: string) => setRoom(room);

  return (
    <main className="flex grow gap-3 bg-slate-900 p-3 text-white">
      <RoomList select={selectRoom} />
      <div className="flex grow flex-col gap-2">
        <ChatRoom room={room} />
        <InputBox room={room} />
      </div>
    </main>
  );
}
