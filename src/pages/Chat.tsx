import { useState } from "react";
import { RoomList } from "../components/chat/RoomList";
import { ChatRoom } from "../components/chat/ChatRoom";
import { InputBox } from "../components/chat/InputBox";

export default function Chat() {
  const [room, setRoom] = useState("default channel");

  const selectRoom = (room: string) => setRoom(room);

  return (
    <main className="absolute flex size-full justify-around gap-3 bg-slate-900 p-3 text-white">
      <RoomList select={selectRoom} />
      <div className="grid size-full grid-rows-[1fr_auto] gap-2">
        <ChatRoom room={room} />
        <InputBox room={room} />
      </div>
    </main>
  );
}
