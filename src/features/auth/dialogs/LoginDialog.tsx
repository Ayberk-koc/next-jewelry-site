import {
  Dialog,
  DialogContent,
  //  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
// import { CloseReviewIcon } from "../svg-icons/CloseIcons";
import LoginForm from "../forms/LoginForm";

export default function LoginDialog() {
  return (
    <Dialog open>
      {/* <DialogTrigger asChild>{children}</DialogTrigger>        //dialog soll immer open sein -> brauche das nicht*/}
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Nur für SR</DialogTitle>
        <div className="p-gap-11">
          <div className="w-full flex items-start justify-between gap-x-gap-9 mb-gap-11">
            <div className="flex flex-col gap-y-gap-5">
              <p className="font-sm-regular font-notoSerif text-gray-950">
                Welcome
              </p>
              <p className="font-text-sm-medium text-gray-700">
                Please login here
              </p>
            </div>
            {/* <DialogClose className="cursor-pointer">
              <CloseReviewIcon />
            </DialogClose> */}
          </div>
          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
