import { useRef } from "react";

export function InputBox() {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const box = ref.current;
    if (box) {
      box.style.height = "auto";
      box.style.height = `${box.scrollHeight + 2}px`; // className="p-1"
    }
  };

  return (
    <section className="flex gap-2">
      <textarea
        ref={ref}
        onInput={handleInput}
        className="h-auto grow resize-none rounded-md border border-slate-500 bg-slate-800 p-1"
      />
      <button className="aspect-square p-1">📤</button>
    </section>
  );
}
