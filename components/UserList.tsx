import React from "react";

import UserCard from "@/components/UserCard";
import { User } from "@/app/types";

type UserListProps = { users: User[] };

export default async function UserList({ users }: UserListProps) {
  return (
    <div className="flex flex-col bg-gray-50 border-y border-slate-100 py-3 rounded-b-md">
      {users?.map((user: User, index: number) => (
        <React.Fragment key={user.login.uuid}>
          <UserCard user={user} displayBorder={index !== 0} />
        </React.Fragment>
      ))}
    </div>
  );
}
