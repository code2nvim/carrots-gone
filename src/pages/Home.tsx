import Chat from "../Chat";
import { Options } from "../components/layout/Options";
import { useGetUsername } from "../hooks/chat";

export default function Home() {
  const username = useGetUsername();

  return username ? <Chat /> : <Options />;
  /*
  return (
    <main className="grow bg-green-500">
      <p>Home</p>
    </main>
  );
   */
}
