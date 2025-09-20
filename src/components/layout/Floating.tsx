import { useFloatingStore } from "../../store/floating";

export function Floating() {
  const { show, message } = useFloatingStore();

  return (
    <>
      {show && (
        <div className="absolute inset-0 flex min-h-screen w-full items-center justify-center bg-slate-900 text-white">
          {message}
        </div>
      )}
    </>
  );
}
