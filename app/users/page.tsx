import React from "react";
import { PiUserListThin } from "react-icons/pi";

import { User } from "@/app/types";

import { fetchUsers } from "./requests";
import UserList from "@/components/UserList";

export default async function UsersPage() {
  const users: User[] = await fetchUsers();

  return (
    <main className="flex flex-col mx-auto bg-gray-200 text-black pt-4 h-screen">
      <div className="flex flex-col mx-auto w-5/12 bg-white rounded-md pt-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex flex-col items-center justify-center mb-5">
          <PiUserListThin size={60} className="text-[#016FD0]" />

          <h1 className="mb-1 text-xl">User List</h1>
          <p className="text-[10px] text-gray-500">To view please click on a user&apos;s name</p>
        </div>

        <UserList users={users} />
      </div>
    </main>
  );
}
