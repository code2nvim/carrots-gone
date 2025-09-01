import { useGetRoomList } from "../../hooks/chat";
import { API_URL } from "../../utils/env";

interface RoomListProps {
  select: React.RefObject<(room: string) => void>;
}

export function RoomList(props: RoomListProps) {
  const rooms = useGetRoomList();

  const api = API_URL + "/rooms";

  return (
    <nav className="flex w-min flex-col items-center justify-evenly bg-gray-800 p-4">
      <ul className="h-full grow flex-col rounded-md">
        {rooms.map((room) => (
          <li key={room.id}>
            <button onClick={() => props.select.current(room.name)}>
              {room.name}
            </button>
          </li>
        ))}
      </ul>
      <a href={api} target="_blank" rel="noopener noreferrer">
        API
      </a>{" "}
    </nav>
  );
}
