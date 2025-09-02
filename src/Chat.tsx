import { useRef } from "react";
import { initError as initErr } from "./utils/helpers";
import { RoomList } from "./components/chat/RoomList";
import { ChatRoom } from "./components/chat/ChatRoom";

export default function Chat() {
  const selectRoom = useRef(() => initErr("selectRoom"));

  return (
    <main className="flex grow justify-center gap-3 bg-slate-900 p-3 text-white">
      <RoomList select={selectRoom} />
      <ChatRoom select={selectRoom} />
    </main>
  );
}
