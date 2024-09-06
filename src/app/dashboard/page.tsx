import getUser from "@/actions/get-user";
import React, { Suspense } from "react";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import UsersListComponent from "./components/users-list";

const UsersPage = () => {
  return (
    <main>
      <div className="mx-10">
        <div className="flex justify-between mt-10 ">
          <h1 className="font-semibold text-2xl my-2">Patient Tests</h1>
        </div>
        <UsersListView />
      </div>
    </main>
  );
};

export default UsersPage;

const UsersListView = async () => {
  const users = await getUser();
  const data = users && users.data;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersListComponent users={data} />
    </Suspense>
  );
};
