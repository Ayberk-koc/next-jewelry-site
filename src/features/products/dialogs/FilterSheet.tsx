"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseSheetIcon } from "@/components/svg-icons/CloseIcons";
import { ReactNode, useState } from "react";
import FilterForm from "../forms/FilterForm";

export default function FilterSheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" mobileSide="bottom">
        <SheetTitle className="sr-only">Muss für Sr hier sein</SheetTitle>

        <div className="p-gap-9 sm:p-gap-11 flex flex-col h-full">
          <div className="mb-gap-11 flex justify-between items-center space-x-gap-3">
            <p className="font-sm-regular font-notoSerif text-gray-950 ">
              Filter
            </p>
            <SheetClose className="cursor-pointer">
              <CloseSheetIcon />
            </SheetClose>
          </div>
          <div className="flex-1 min-h-0">
            <FilterForm handleClose={handleClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
