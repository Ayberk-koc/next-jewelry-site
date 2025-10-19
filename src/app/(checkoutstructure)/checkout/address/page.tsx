import AddressDialog from "@/components/dialogs/AddressDialog";
import CheckoutLayout from "@/components/layoutComponents/CheckoutLayout";
import ProgressCheckout from "@/components/layoutComponents/ProgressCheckout";
import { DotsIcon, PhoneIcon } from "@/components/svg-icons/AddressPageIcons";
import { PlusIcon } from "@/components/svg-icons/ChekoutProsessIcons";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

function AddressBox({
  name,
  address,
  phoneNr,
}: {
  name: string;
  address: string;
  phoneNr?: string;
}) {
  return (
    <div className="p-gap-9 flex gap-gap-7 items-start border border-gray-200">
      <input type="radio" className="relative top-[6px] size-4" />
      <div className="flex flex-col gap-gap-5 flex-1">
        <p className="font-text-md-medium text-gray-950">{name}</p>

        <p className="font-text-sm-medium text-gray-500">{address}</p>
        {phoneNr && (
          <div className="flex items-center gap-gap-5">
            <PhoneIcon />
            <p className="font-text-sm-medium">{phoneNr}</p>
          </div>
        )}
      </div>
      <div className="self-center">
        <Button
          variant={"outline"}
          size={"md"}
          className="!p-gap-6 !border-gray-200"
        >
          <DotsIcon />
        </Button>
      </div>
    </div>
  );
}

function AddressBoxes({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-gap-9">
      <p className="font-text-lg-medium text-gray-950">{title}</p>
      <div className="flex flex-col gap-y-gap-9">{children}</div>
    </div>
  );
}

export default function AddressPage() {
  const addresses = [
    {
      id: 0,
      isDefault: true,
      name: "Perry Wilson",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phoneNr: "(205) 555-0100",
    },
    {
      id: 1,
      isDefault: false,
      name: "Perry Wilson",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phoneNr: "(205) 555-0100",
    },
    {
      id: 2,
      isDefault: false,
      name: "Perry Wilson",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phoneNr: "(205) 555-0100",
    },
    {
      id: 3,
      isDefault: false,
      name: "Perry Wilson",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phoneNr: "(205) 555-0100",
    },
    {
      id: 4,
      isDefault: false,
      name: "Perry Wilson",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phoneNr: "(205) 555-0100",
    },
  ];
  const defaultAddress = addresses.filter((address) => address.isDefault);
  const otherAddresses = addresses.filter((address) => !address.isDefault);
  return (
    <CheckoutLayout title="Select Address" action="continue">
      <div className="mb-gap-13">
        <ProgressCheckout></ProgressCheckout>
      </div>
      <div className="flex flex-col gap-gap-13">
        <AddressBoxes title="Default Address">
          {defaultAddress.map((address) => (
            <AddressBox
              key={address.id}
              name={address.name}
              address={address.address}
              phoneNr={address.phoneNr}
            />
          ))}
        </AddressBoxes>
        <AddressBoxes title="Other Address">
          {otherAddresses.map((address) => (
            <AddressBox
              key={address.id}
              name={address.name}
              address={address.address}
              phoneNr={address.phoneNr}
            />
          ))}
        </AddressBoxes>
        <AddressDialog>
          <Button variant={"outline"} size={"xl"} className="w-fit" asChild>
            <div className="flex gap-x-gap-6">
              <PlusIcon />
              <p className="font-text-md-medium text-dark-500">
                ADD NEW ADDRESS
              </p>
            </div>
          </Button>
        </AddressDialog>
      </div>
    </CheckoutLayout>
  );
}
