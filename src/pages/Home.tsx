import { useEffect } from "react";
import Chat from "../Chat";
import { Options } from "../components/layout/Options";
import { useFloatingStore } from "../store/floating";
import { useGetUsername } from "../hooks/account";

export default function Home() {
  const { data } = useGetUsername();
  const user = data?.username;

  const { close } = useFloatingStore();

  useEffect(() => {
    if (user) {
      close();
    }
  }, [user, close]);

  return user ? <Chat /> : <Options />;
  /*
  return (
    <main className="grow bg-green-500">
      <p>Home</p>
    </main>
  );
   */
}
