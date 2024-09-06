"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { UsersData } from "@/schema/users";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function UsersListComponent({ users }: { users: UsersData[] }) {
  // const [open, setOpen] = useState(false)

  // const openModal = () => setOpen(true)

  const router = useRouter();
  const routeToUserCreation = () => {
    router.push("/sign-up");
  };

  return (
    <div>
      {/* <Modal
            open={open}
            setOpen={setOpen}
            title='Add Patient Details'
        >
          <h1>Users</h1>
        </Modal> */}

      <div className="flex justify-between pb-5 -mt-10">
        <div></div>
        <Button onClick={routeToUserCreation} variant={"outline"}>
          +
        </Button>
      </div>
     <DataTable data={users} columns={columns}/>
    </div>
  );
}
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
