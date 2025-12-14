"use client";

import AddressDialog from "@/features/address/dialogs/AddressDialog";
import { DotsIcon, PhoneIcon } from "@/components/svg-icons/AddressPageIcons";
import { PlusIcon } from "@/components/svg-icons/ChekoutProsessIcons";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { RadioButtonIconAlt } from "@/components/svg-icons/PaymentIcons";
import { useCheckoutFormContext } from "@/features/checkout/contexts/CheckoutFormContext";
import { useFormState } from "react-hook-form";
import { useAddressContext } from "@/features/address/contexts/AddressContext";

function AddressBox({
  name,
  street,
  houseNr,
  zip,
  city,
  phoneNr,
  addressId,
  isDefault = false,
  email,
  value,
  onValueChange,
}: {
  name: string;
  street: string;
  houseNr: string;
  zip: string;
  city: string;
  phoneNr?: string;
  addressId: string;
  email: string;
  isDefault?: boolean;
  value: string;
  onValueChange: (val: string) => void;
}) {
  const address = `${street} ${houseNr}, ${zip} ${city}`;
  //hier prüfe checked wert mit form.value und addressId

  const values = {
    name,
    street,
    houseNr,
    zip,
    city,
    phoneNr,
    addressId,
    isDefault,
    email,
  };

  return (
    <div className="p-gap-9 flex gap-gap-7 items-start border border-gray-200">
      <button
        className="cursor-pointer"
        onClick={() => onValueChange(addressId)}
        type="button"
      >
        <RadioButtonIconAlt
          className="relative top-[1px]"
          isChecked={value === addressId}
        />
      </button>

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
        {/* hier noch initialser wert der form */}
        <AddressDialog mode={"edit"} initial={values}>
          <Button
            variant={"outline"}
            size={"md"}
            className="!p-gap-6 !border-gray-200"
            type="button"
          >
            <DotsIcon />
          </Button>
        </AddressDialog>
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

export default function PickAddressForm() {
  const totalForm = useCheckoutFormContext();
  const { errors } = useFormState({ control: totalForm.control });
  const { addressListe: deliveryData } = useAddressContext();

  const pickedValue = totalForm.watch("pickAddressForm.addressId");

  async function handlePickAddress(val: string) {
    totalForm.setValue("pickAddressForm.addressId", val);
    await totalForm.trigger("pickAddressForm");

    const formValues = totalForm.getValues("pickAddressForm.addressId");
    console.log(formValues);
  }

  const formErrors = errors.pickAddressForm?.message;

  //das kann sicher noch irgendwie optimieren!
  const defaultDeliveryAddress = deliveryData.filter((data) => data.isDefault);
  const otherDeliveryAddresses = deliveryData.filter((data) => !data.isDefault);

  return (
    <div className="flex flex-col gap-gap-13">
      <form>
        {formErrors && <p className="text-error-500 mb-gap-3">{formErrors}</p>}
        {/* hier die fehlermeldung für die form machen */}
        <AddressBoxes title="Default Address">
          {defaultDeliveryAddress.map((address) => (
            <AddressBox
              key={address.id}
              value={pickedValue}
              onValueChange={handlePickAddress}
              addressId={address.id}
              name={address.name}
              street={address.street}
              houseNr={address.houseNr}
              zip={address.zip}
              city={address.city}
              phoneNr={address.phoneNr}
              email={address.email}
              isDefault={address.isDefault}
            />
          ))}
        </AddressBoxes>
        <AddressBoxes title="Other Address">
          {otherDeliveryAddresses.map((address) => (
            <AddressBox
              key={address.id}
              value={pickedValue}
              onValueChange={handlePickAddress}
              addressId={address.id}
              name={address.name}
              street={address.street}
              houseNr={address.houseNr}
              zip={address.zip}
              city={address.city}
              phoneNr={address.phoneNr}
              email={address.email}
              isDefault={address.isDefault}
            />
          ))}
        </AddressBoxes>
      </form>

      <AddressDialog mode={"create"}>
        <Button
          variant={"outline"}
          size={"xl"}
          className="w-fit"
          asChild
          type="button"
        >
          <div className="flex gap-x-gap-6">
            <PlusIcon />
            <p className="font-text-md-medium text-dark-500">ADD NEW ADDRESS</p>
          </div>
        </Button>
      </AddressDialog>
    </div>
  );
}
