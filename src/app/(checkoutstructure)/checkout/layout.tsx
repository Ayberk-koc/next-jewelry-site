"use client";

import { ReactNode } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  FinalCheckoutSchema,
  FinalCheckoutFormValuesType,
} from "@/components/layoutComponents/checkOutProcessFormProviderLayoutSchemas";
import PendingContextProvider from "@/components/contexts/TransitionContext";

export default function CheckOutProcessFormProviderLayout({
  children,
}: {
  children: ReactNode;
}) {
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

  const form = useForm<FinalCheckoutFormValuesType>({
    resolver: zodResolver(FinalCheckoutSchema),
    defaultValues: {
      // pickedAddress: { id: defaultAddress?.id },
      // pickPaymentMethod: { method: "paypal" },
    },
  });

  return (
    <Form {...form}>
      <PendingContextProvider>{children}</PendingContextProvider>
    </Form>
  );
}

export type { FinalCheckoutFormValuesType };
