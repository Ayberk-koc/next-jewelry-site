import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";

// type CartItemProps = {
//   id: number;
//   name: string;
//   price: number;
//   priceNoDiscount?: number;
//   qty: number;
//   imgSrc: string;
// };

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //note: layout soll keine große payload haben! Nur das nötigste! Die details nehme in den jeweiligen seiten!
  //muss halt notfalls eine call für die berechnung des gesamt preises machen!
  const totalPrice = 1900;

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">My Cart</p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">{children}</div>
        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice} />
        </div>
      </MainContainer>
    </>
  );
}
