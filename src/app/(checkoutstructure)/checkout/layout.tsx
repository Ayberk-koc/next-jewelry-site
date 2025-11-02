"use client";

import { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PendingContextProvider from "@/components/contexts/TransitionContext";
import { z } from "zod";

const pickAddressFormSchema = z.object({
  addressId: z.string("Bitte eine addresse wählen"),
});
type PickAddressFormValues = z.infer<typeof pickAddressFormSchema>;

const pickPaymentMethodSchema = z.object({
  paymentMethod: z
    .string("Bitte wähle eine Zahlungsmethode")
    //das eigentlich nicht nötig, weil ich es ja erzwinge, dass paypal oder Kreditkarte gewählt wird. Trotzdem gut zur show
    .refine((val) => val === "paypal" || val === "Kreditkarte", {
      message: "Nur paypal und Kreditkarte zulässig",
    }),
});
type PickPaymentFormValues = z.infer<typeof pickPaymentMethodSchema>;

type AllFormValueTypes = PickAddressFormValues & PickPaymentFormValues;

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

type FormLayoutType = {
  pickAddressForm: UseFormReturn<PickAddressFormValues>;
  pickPaymentMethodForm: UseFormReturn<PickPaymentFormValues>;
};

const FormContext = createContext<FormLayoutType | null>(null);

export default function FormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pickAddressForm = useForm<PickAddressFormValues>({
    resolver: zodResolver(pickAddressFormSchema),
    defaultValues: { addressId: defaultAddress?.id },
  });

  const pickPaymentMethodForm = useForm<PickPaymentFormValues>({
    resolver: zodResolver(pickPaymentMethodSchema),
    //defaultValues: { paymentMethod: "paypal" },
  });

  const ctxValues: FormLayoutType = {
    pickAddressForm,
    pickPaymentMethodForm,
  };

  return (
    <FormContext value={ctxValues}>
      <PendingContextProvider>{children}</PendingContextProvider>
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

export { useFormLayoutContext };
export type { PickAddressFormValues, PickPaymentFormValues, AllFormValueTypes };
