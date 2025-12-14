import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { CloseReviewIcon } from "../../../components/svg-icons/CloseIcons";
import ReviewForm from "../forms/ReviewForm";

export default function ReviewDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
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
          <div>
            <ReviewForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
