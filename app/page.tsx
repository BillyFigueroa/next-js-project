import Image from "next/image";
import { User } from "./types";

import { fetchUsers } from "./requests";

export default async function Home() {
  const users: User[] = await fetchUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>AMEX TEST</h1>
      {users?.map((user: User) => (
        <p key={user.login.uuid}>{user.name.first}</p>
      ))}
    </main>
  );
}
