import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { ConfirmIcon } from "../svg-icons/ChekoutProsessIcons";

type ConfirmOrderDialogProps = { children: ReactNode };

export default function ConfirmOrderDialog({
  children,
}: ConfirmOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Muss hier sein für sr</DialogTitle>
        <div className="p-gap-11 flex flex-col gap-y-gap-11 items-center">
          <ConfirmIcon />
          <div className="mx-auto max-w-[350px]">
            <p className="font-sm-regular text-gray-950 text-center mb-gap-5 font-notoSerif">
              Your Order is Confirmed
            </p>
            <p className="font-text-sm-medium text-gray-700 text-center">
              Thanks for shopping! Your order hasn’t shipped yet, but we will
              send you and email when it done.
            </p>
          </div>
          <div className="flex gap-x-gap-9 w-full">
            <Button
              size={"xl"}
              variant={"outline"}
              className="flex-1 uppercase font-text-md-medium text-gray-950"
            >
              back to home
            </Button>
            <Button
              size={"xl"}
              variant={"fill"}
              className="flex-1 uppercase font-text-md-medium"
            >
              view order
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
