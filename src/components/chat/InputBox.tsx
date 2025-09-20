import { useRef, useState } from "react";
import { useFloatingMessage, useGetUsername } from "../../hooks/chat";

interface InputBoxProps {
  room: string;
}

export function InputBox({ room }: InputBoxProps) {
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const { status, data, error } = useGetUsername();
  const user = data?.username;

  useFloatingMessage(status, error);

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
      body: JSON.stringify({ user, room, content }),
      credentials: "same-origin",
    }).catch((err) => console.error(err));
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
