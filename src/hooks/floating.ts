import { useEffect } from "react";
import { useFloatingStore } from "../store/floating";

export function useFloatingMessage(status: string, error: Error | null) {
  const { showMessage, close } = useFloatingStore();

  useEffect(() => {
    switch (status) {
      case "pending":
        showMessage("Loading: username");
        break;

      case "error":
        showMessage("Error:" + error?.message);
        break;

      default:
        close();
        break;
    }
  }, [status, error, showMessage, close]);
}
