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
}: {
  children: ReactNode;
}) {
  //diese werte über react-query bekommen
  const deliveryData = [
    {
      id: "0",
      isDefault: true,
      name: "Ayberk Koc",
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

  const ctxValues: AddressContextValues = {
    addressListe: deliveryData,
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
