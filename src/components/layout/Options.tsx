import { useState } from "react";
import { Account } from "../options/Account";

export function Options() {
  const [show, setShow] = useState(true);

  return (
    <div className="pointer-events-none absolute flex size-full items-end justify-start">
      <button
        onClick={() => setShow(true)}
        className="pointer-events-auto m-2 text-2xl"
      >
        ⚙️
      </button>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="pointer-events-auto absolute flex size-full flex-col items-center justify-center bg-black opacity-50"
        >
          <Account />
        </div>
      )}
    </div>
  );
}
