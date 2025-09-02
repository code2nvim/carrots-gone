import { useRef } from "react";
import { initError as initErr } from "./utils/helpers";
import { RoomList } from "./components/chat/RoomList";
import { ChatRoom } from "./components/chat/ChatRoom";
import { InputBox } from "./components/chat/InputBox";

export default function Chat() {
  const selectRoom = useRef(() => initErr("selectRoom"));

  return (
    <main className="flex grow gap-3 bg-slate-900 p-3 text-white">
      <RoomList select={selectRoom} />
      <div className="flex grow flex-col gap-2">
        <ChatRoom select={selectRoom} />
        <InputBox select={selectRoom} />
      </div>
    </main>
  );
}
