"use client";

import { createContext, ReactNode, useContext } from "react";

type Addresse = {
  id: string;
  isDefault: boolean;
  name: string;
  email: string;
  street: string;
  houseNr: string;
  zip: string;
  city: string;
  phoneNr: string;
};

type AddressListe = Addresse[];

type AddressContextValues = {
  addressListe: AddressListe;
};

const AddressContext = createContext<AddressContextValues | null>(null);

export default function AddressContextProvider({
  children,
  initialAddressData,
}: {
  children: ReactNode;
  initialAddressData: AddressListe;
}) {
  //HOhle die daten mit react query. Die initial daten sind dann das was ich mit der prop bekomme!

  const ctxValues: AddressContextValues = {
    addressListe: initialAddressData,
  };

  return <AddressContext value={ctxValues}>{children}</AddressContext>;
}

function useAddressContext() {
  const addressContext = useContext(AddressContext);

  if (!addressContext) {
    throw new Error("Context can only be used within a Provider!");
  }

  return addressContext;
}

export { useAddressContext };
