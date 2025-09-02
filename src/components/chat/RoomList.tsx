import { useGetRoomList } from "../../hooks/chat";

interface RoomListProps {
  select: React.RefObject<(room: string) => void>;
}

export function RoomList(props: RoomListProps) {
  const rooms = useGetRoomList();

  return (
    <nav className="flex w-min flex-col items-center justify-evenly rounded-xl">
      <ul className="flex h-full flex-col gap-2">
        {rooms.map((room) => (
          <li
            key={room.id}
            className="rounded-md bg-slate-800 px-1 py-2 text-center"
          >
            <button onClick={() => props.select.current(room.name)}>
              {room.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
