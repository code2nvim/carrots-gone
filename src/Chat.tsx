import { useRef } from "react";
import { initError as initErr } from "./utils/helpers";
import { RoomList } from "./components/chat/RoomList";
import { ChatRoom } from "./components/chat/ChatRoom";

export default function Chat() {
  const selectRoom = useRef(() => initErr("selectRoom"));

  return (
    <main className="grid grow grid-cols-2 bg-slate-900 text-white">
      <RoomList select={selectRoom} />
      <ChatRoom select={selectRoom} />
    </main>
  );
}
