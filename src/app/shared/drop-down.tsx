import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import React from "react";

const DropDown = ({
  name,
  deletefunc,
  basepath,
}: {
  name: { id: any };
  deletefunc: any;
  basepath: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <div className="flex justify-center gap-2 px-10 ">
          {/* <EditButton prop={{ id: name.id }} basePath={basepath} /> */}
          <DropdownMenuSeparator />
          <Button onClick={() => deletefunc(name.id)} variant={"destructive"}>
            Delete
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
