import { useState } from "react";

export function Account() {
  const [create, setCreate] = useState(false);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-end"
    >
      {create ? <Create /> : <Login />}
      <button
        onClick={() => setCreate((create) => !create)}
        className="m-2 flex flex-col rounded-md bg-slate-500 p-1 text-white"
      >
        {create ? "login" : "create"}
      </button>
    </div>
  );
}

function Create() {
  return <AccountForm api="/api/account" text="create account" />;
}

function Login() {
  return <AccountForm api="/api/login" text="login" />;
}

interface AccountFromProps {
  api: string;
  text: string;
}

function AccountForm({ api, text }: AccountFromProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (username && password) {
      setSending(true);
      fetch(api, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
      setSending(false);
    }
  };

  return (
    <section className="rounded-md border-2 border-black bg-blue-300 p-2">
      <form onSubmit={handleSubmit} className="grid grid-rows-3 gap-2">
        <input
          disabled={sending}
          type="text"
          placeholder="account"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md border-2 p-1"
        />
        <input
          disabled={sending}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border-2 p-1"
        />
        <button
          disabled={sending}
          type="submit"
          className="mx-12 rounded-md border-2"
        >
          {text}
        </button>
      </form>
    </section>
  );
}
