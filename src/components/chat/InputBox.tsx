import { useRef, useState } from "react";
import { useGetUsername } from "../../hooks/chat";

interface InputBoxProps {
  select: React.RefObject<(room: string) => void>;
}

export function InputBox({ select }: InputBoxProps) {
  const user = useGetUsername();
  const [room, setRoom] = useState("default channel");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  select.current = (room: string) => setRoom(room);

  const ref = useRef<HTMLTextAreaElement>(null);
  const handleInput = () => {
    const box = ref.current;
    if (box) {
      box.style.height = "auto";
      box.style.height = `${box.scrollHeight + 2}px`; // className="p-1"
    }
  };

  const handleSend = () => {
    setSending(true);
    fetch("/api/message", {
      method: "POST",
      body: JSON.stringify({ user: user, room: room, content: content }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setSending(false);
    setContent("");
  };

  return (
    <section className="flex gap-2">
      <textarea
        ref={ref}
        value={content}
        onInput={handleInput}
        onChange={(e) => setContent(e.target.value)}
        className="h-auto grow resize-none rounded-md border border-slate-500 bg-slate-800 p-1"
      />
      <button
        disabled={sending}
        onClick={handleSend}
        className="aspect-square p-1"
      >
        📤
      </button>
    </section>
  );
}
