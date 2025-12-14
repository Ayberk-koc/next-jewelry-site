import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import RegisterForm from "../forms/RegisterForm";

export default function RegisterDialog() {
  return (
    <Dialog open>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Nur für SR</DialogTitle>
        <div className="p-gap-11">
          <div className="w-full flex items-start justify-between gap-x-gap-9 mb-gap-11">
            <div className="flex flex-col gap-y-gap-5">
              <p className="font-sm-regular font-notoSerif text-gray-950">
                Welcome
              </p>
              <p className="font-text-sm-medium text-gray-700">
                Please register here
              </p>
            </div>
          </div>
          <RegisterForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
