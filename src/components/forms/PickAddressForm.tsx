"use client";

import AddressDialog from "@/components/dialogs/AddressDialog";
import { DotsIcon, PhoneIcon } from "@/components/svg-icons/AddressPageIcons";
import { PlusIcon } from "@/components/svg-icons/ChekoutProsessIcons";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

import { z } from "zod";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioButtonIconAlt } from "@/components/svg-icons/PaymentIcons";
import { pickAddressFormSchema } from "./pickAddressFormSchemas";
import { FinalCheckoutFormValuesType } from "@/components/layoutComponents/checkOutProcessFormProviderLayoutSchemas";

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

type PickAddressFormSchemaValuesType = z.infer<typeof pickAddressFormSchema>;

//diese component brauche ich nicht! Diese Logik kommt ja in das layout-form-provider!
function PickAddressFormProvider({ children }: { children: ReactNode }) {
  const deliveryData = [
    {
      id: "0",
      isDefault: true,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "1",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "2",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "3",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "4",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "5",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
  ];
  const defaultAddress = deliveryData.find((address) => address.isDefault);

  const form = useForm<PickAddressFormSchemaValuesType>({
    resolver: zodResolver(pickAddressFormSchema),
    defaultValues: {
      pickedAddress: defaultAddress?.id,
    },
  });
  return <Form {...form}>{children}</Form>;
}

function PickAddressForm() {
  const form = useFormContext<FinalCheckoutFormValuesType>();

  const deliveryData = [
    {
      id: "0",
      isDefault: true,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "1",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "2",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "3",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "4",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
    {
      id: "5",
      isDefault: false,
      name: "Perry Wilson",
      email: "ayberk@live.at",
      street: "Bahnhofstraße",
      houseNr: "14",
      zip: "62639",
      city: "California",
      phoneNr: "015783795878",
    },
  ];

  //das könnte man noch optimieren! Könnte in der db speicher, ob etwas als default gespeichert ist oder nicht! -> Dann spare diese rechnung!
  const defaultDeliveryAddress = deliveryData.filter((data) => data.isDefault);
  const otherDeliveryAddresses = deliveryData.filter((data) => !data.isDefault);

  return (
    <div className="flex flex-col gap-gap-13">
      <form>
        {/* hier die fehlermeldung für die form machen */}
        <AddressBoxes title="Default Address">
          {defaultDeliveryAddress.map((address) => (
            <FormField
              key={address.id}
              control={form.control}
              name="pickedAddress.id" //beachte hier die name! Das schema welches in der form-provider steckt ist verschachtelt! Deswegen geht sowas! Gucke das schema an!
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <AddressBox
                        key={address.id}
                        value={field.value}
                        onValueChange={field.onChange}
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
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          ))}
        </AddressBoxes>
        <AddressBoxes title="Other Address">
          {otherDeliveryAddresses.map((address) => (
            <FormField
              key={address.id}
              control={form.control}
              name="pickedAddress.id"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <AddressBox
                        key={address.id}
                        value={field.value}
                        onValueChange={field.onChange}
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
                    </FormControl>
                  </FormItem>
                );
              }}
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

export { PickAddressFormProvider, PickAddressForm };
