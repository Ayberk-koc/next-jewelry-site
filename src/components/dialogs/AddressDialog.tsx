import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { CloseReviewIcon } from "../svg-icons/CloseIcons";
import {
  AddressForm,
  EditAddressFormProvider,
  CreateAddressFormPrivoder,
} from "../forms/AddressForms";
import { EditAddressFormValuesType } from "../forms/addressFormSchemas";

export default function AddressDialog({
  children,
  mode,
  initial,
}: {
  children: ReactNode;
  mode: "edit" | "create";
  initial?: EditAddressFormValuesType;
}) {
  const FormToDisplay =
    mode === "create" ? (
      <CreateAddressFormPrivoder>
        <AddressForm />
      </CreateAddressFormPrivoder>
    ) : (
      <EditAddressFormProvider initial={initial as EditAddressFormValuesType}>
        <AddressForm />
      </EditAddressFormProvider>
    );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0" aria-describedby="Review modal">
        <DialogTitle className="sr-only">Muss für Sr hier sein</DialogTitle>

        <div className="p-gap-11">
          <div className="w-full flex items-center justify-between gap-x-gap-9 pb-gap-9 border-b border-gray-200 mb-gap-11">
            <p className="font-text-lg-medium text-gray-950">Add new Address</p>
            <DialogClose className="cursor-pointer">
              <CloseReviewIcon />
            </DialogClose>
          </div>
          <div>{FormToDisplay}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
