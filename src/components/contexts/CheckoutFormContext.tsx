"use client";

import { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddressContext } from "./AddressContext";

//das ist für die id der addresse!
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
type CheckoutFormValuesType = z.infer<typeof totalFormSchema>;

const FormContext = createContext<UseFormReturn<CheckoutFormValuesType> | null>(
  null
);

export default function FormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { addressListe: deliveryAddresses } = useAddressContext();
  const defaultAddress = deliveryAddresses.find((address) => address.isDefault);

  const pickAddressForm = useForm<CheckoutFormValuesType>({
    resolver: zodResolver(totalFormSchema),
    defaultValues: {
      pickAddressForm: { addressId: defaultAddress?.id },
      pickPaymentMethodSchema: { paymentMethod: "Paypal" },
    },
  });

  const ctxValues = pickAddressForm; //type wird inferred

  return <FormContext value={ctxValues}>{children}</FormContext>;
}

function useCheckoutFormContext() {
  const formLayoutContext = useContext(FormContext);

  if (!formLayoutContext) {
    throw new Error(
      "Context muss innerhalb von provider-component genutzt werden!"
    );
  }

  return formLayoutContext;
}

export type { CheckoutFormValuesType };
export { useCheckoutFormContext };
