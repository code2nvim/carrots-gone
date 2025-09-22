import { useEffect } from "react";
import { Options } from "../components/layout/Options";
import { useFloatingStore } from "../store/floating";
import { useGetUsername } from "../hooks/account";
import { Select } from "./Select";

export default function Home() {
  const { data } = useGetUsername();
  const user = data?.username;

  const { close } = useFloatingStore();

  useEffect(() => {
    if (user) {
      close();
    }
  }, [user, close]);

  return user ? <Select /> : <Options />;
}
