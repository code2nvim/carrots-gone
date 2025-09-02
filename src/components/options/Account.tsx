import { useState } from "react";

export function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    setSending(true);
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className="rounded-md border-2 border-black bg-slate-300 p-2"
    >
      <form onSubmit={handleSubmit} className="grid grid-rows-3 gap-2">
        <input
          disabled={sending}
          type="text"
          placeholder="account"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-md border-2"
        />
        <input
          disabled={sending}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border-2"
        />
        <button
          disabled={sending}
          type="submit"
          className="mx-12 rounded-md border-2"
        >
          login
        </button>
      </form>
    </section>
  );
}
