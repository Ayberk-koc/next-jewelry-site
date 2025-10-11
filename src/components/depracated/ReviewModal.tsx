"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseSheetIcon } from "@/components/svg-icons/CloseIcons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { CloseReviewIcon } from "../svg-icons/CloseIcons";
import ReviewForm from "../forms/ReviewForm";
import { useMediaQuery } from "usehooks-ts";

//hier mache sheet für kleine und modal für große. Das ist clinet component, aber der inhalt von modals wird eh nicht gecrawlet!!
//das ist tausend mal besser!

export function ReviewDialog({
  children,
  open,
  toggleOpenState,
  contenComponent,
}: {
  children: ReactNode;
  open: boolean;
  toggleOpenState: () => void;
  contenComponent: ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={toggleOpenState}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0" aria-describedby="Review modal">
        <DialogTitle className="sr-only">Muss für Sr hier sein</DialogTitle>

        <div className="p-gap-11">
          <div className="w-full flex items-center justify-between gap-x-gap-9 pb-gap-9 border-b border-gray-200 mb-gap-11">
            <p className="font-text-lg-medium text-gray-950">Write a Review</p>
            <DialogClose className="cursor-pointer">
              <CloseReviewIcon />
            </DialogClose>
          </div>
          <div>{contenComponent}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ReviewSheet({
  children,
  open,
  toggleOpenState,
  contenComponent,
}: {
  children: ReactNode;
  open: boolean;
  toggleOpenState: () => void;
  contenComponent: ReactNode;
}) {
  return (
    <Sheet open={open} onOpenChange={toggleOpenState}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        mobileSide="bottom"
        className="max-[700px]:h-fit"
      >
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
          <div className="flex-1 min-h-0">{contenComponent}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function ReviewModal({ children }: { children: ReactNode }) {
  const isMediaUp = useMediaQuery("(max-width: 700px)", {
    initializeWithValue: false, // SSR-freundlich
    defaultValue: false,
  });

  const [open, setOpen] = useState<boolean>(false); //brauche, damit bei resize nicht einfach zu gehen! Der open state soll sich gemerkt werden bei resize!

  function toggleOpenState() {
    setOpen((prevState) => !prevState);
  }

  const reviewForm = <ReviewForm />; //das muss ich so machen, damit der state der form erhalten bleibt, wenn es von sheet zu dialog geht und vice verca

  if (isMediaUp) {
    return (
      <ReviewSheet
        contenComponent={reviewForm}
        open={open}
        toggleOpenState={toggleOpenState}
      >
        {children}
      </ReviewSheet>
    );
  } else {
    return (
      <ReviewDialog
        contenComponent={reviewForm}
        open={open}
        toggleOpenState={toggleOpenState}
      >
        {children}
      </ReviewDialog>
    );
  }
}
