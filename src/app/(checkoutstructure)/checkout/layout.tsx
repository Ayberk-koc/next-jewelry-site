"use client";

import { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PendingContextProvider from "@/components/contexts/TransitionContext";
import { z } from "zod";
import AddressContextProvider from "@/components/contexts/AddressContext";

const pickAddressFormSchema = z.object(
  {
    addressId: z.string("Bitte eine addresse wählen"),
  },
  { error: "Bitte Addresse wählen!" }
);

const pickPaymentMethodSchema = z.object(
  {
    paymentMethod: z.union([z.literal("Paypal"), z.literal("Kreditkarte")]),
  },
  { error: "Bitte Bezahlmittel eingeben" }
);

const totalFormSchema = z.object({
  pickAddressForm: pickAddressFormSchema,
  pickPaymentMethodSchema: pickPaymentMethodSchema,
});
type TotalFormValuesType = z.infer<typeof totalFormSchema>;

//hohle dise daten mit react-query! Dann brauchst du keinen context und es wird schnell und optimistic geladen!
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

const FormContext = createContext<UseFormReturn<TotalFormValuesType> | null>(
  null
);

export default function FormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pickAddressForm = useForm<TotalFormValuesType>({
    resolver: zodResolver(totalFormSchema),
    defaultValues: {
      pickAddressForm: { addressId: defaultAddress?.id },
      pickPaymentMethodSchema: { paymentMethod: "Paypal" },
    },
  });

  const ctxValues: UseFormReturn<TotalFormValuesType> = pickAddressForm;

  return (
    <FormContext value={ctxValues}>
      <PendingContextProvider>
        <AddressContextProvider>{children}</AddressContextProvider>
      </PendingContextProvider>
    </FormContext>
  );
}

function useFormLayoutContext() {
  const formLayoutContext = useContext(FormContext);

  if (!formLayoutContext) {
    throw new Error(
      "Context muss innerhalb von provider-component genutzt werden!"
    );
  }

  return formLayoutContext;
}

export type { TotalFormValuesType };
export { useFormLayoutContext };
