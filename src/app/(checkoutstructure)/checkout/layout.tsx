import AddressContextProvider from "@/components/contexts/AddressContext";
import FormContextProvider from "@/components/contexts/CheckoutFormContext";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  //stelle dir vor, das hätte direkt aus db genommen.
  const initAddressData = [
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

  return (
    <AddressContextProvider initialAddressData={initAddressData}>
      <FormContextProvider>{children}</FormContextProvider>
    </AddressContextProvider>
  );
}
