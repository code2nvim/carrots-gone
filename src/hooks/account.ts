import { useQuery } from "@tanstack/react-query";

export function useGetUsername() {
  return useQuery<{ username: string }>({
    queryKey: ["username"],
    queryFn: async () => {
      const res = await fetch("/api/username");
      return res.json();
    },
  });
}
