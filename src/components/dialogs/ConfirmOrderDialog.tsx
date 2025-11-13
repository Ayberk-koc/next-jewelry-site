import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Button } from "../ui/button";

function Icon() {
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="54" cy="54" r="54" fill="#F5F5F4" />
      <circle cx="54" cy="54" r="43" fill="#E7E5E4" />
      <circle cx="54" cy="54" r="32" fill="#0C0A09" />
      <path
        d="M50 54L52.5347 56.2812C52.9662 56.6696 53.6366 56.6101 53.993 56.1519L58 51M54 64C59.5228 64 64 59.5228 64 54C64 48.4772 59.5228 44 54 44C48.4772 44 44 48.4772 44 54C44 59.5228 48.4772 64 54 64Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          <Icon />
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
