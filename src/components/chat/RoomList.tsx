import { useGetRooms } from "../../hooks/chat";

interface RoomListProps {
  select: (room: string) => void;
}

export function RoomList({ select }: RoomListProps) {
  const rooms = useGetRooms();

  return (
    <nav className="flex w-min flex-col items-center justify-evenly rounded-xl">
      <ul className="flex h-full flex-col gap-2">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="rounded-md bg-slate-800 px-1 py-2 text-center text-sm"
          >
            <button onClick={() => select(room.name)}>{room.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
