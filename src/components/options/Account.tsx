import { useState, useTransition } from "react";

export function Account() {
  const [create, setCreate] = useState(false);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-end"
    >
      <section className="rounded-md border-2 border-black bg-blue-300 p-2">
        {create ? (
          <AccountForm api="/api/account" text="create account" />
        ) : (
          <AccountForm api="/api/login" text="login" />
        )}
      </section>
      <button
        onClick={() => setCreate((create) => !create)}
        className="m-2 flex flex-col rounded-md bg-slate-500 p-1 text-white"
      >
        {create ? "login" : "create"}
      </button>
    </div>
  );
}

interface AccountFromProps {
  api: string;
  text: string;
}

function AccountForm({ api, text }: AccountFromProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      if (username && password) {
        fetch(api, {
          method: "POST",
          body: JSON.stringify({ username, password }),
          credentials: "same-origin",
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-rows-3 gap-2">
      <input
        disabled={isPending}
        type="text"
        placeholder="account"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-md border-2 p-1"
      />
      <input
        disabled={isPending}
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md border-2 p-1"
      />
      <button
        disabled={isPending}
        type="submit"
        className="mx-12 rounded-md border-2"
      >
        {text}
      </button>
    </form>
  );
}
