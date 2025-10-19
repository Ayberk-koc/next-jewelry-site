import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";

export default function CheckoutLayout({
  children,
  title,
  action,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  action: string;
}>) {
  //note: layout soll keine große payload haben! Nur das nötigste! Die details nehme in den jeweiligen seiten!
  //muss halt notfalls eine call für die berechnung des gesamt preises machen!
  const totalPrice = 1900;

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">{title}</p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">{children}</div>
        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice} action={action} />
        </div>
      </MainContainer>
    </>
  );
}
