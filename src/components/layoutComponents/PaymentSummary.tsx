import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import DiscountForm from "../forms/DiscountForm";

function TextPriceBox({
  text,
  price,
  className,
}: {
  text: string;
  price: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-gap-9 font-text-md-medium w-full",
        className
      )}
    >
      <p>{text}</p>
      <p>{price} €</p>
    </div>
  );
}

export default function PaymentSummary({
  totalPrice,
  children,
}: {
  totalPrice: number;
  children: ReactNode;
}) {
  //hier noch two way binding!! Auch muss dass eine api call wegen des discount codes machen!
  const deliveryPrice = 0;
  const grandTotalprice = totalPrice + deliveryPrice;
  return (
    <div className="w-full p-gap-11 flex flex-col gap-gap-11 border border-gray-200">
      <div className="flex flex-col gap-gap-9">
        <TextPriceBox
          text="Subtotal"
          price={totalPrice}
          className="pb-gap-9 border-b border-gray-200"
        />
        <DiscountForm />
        <TextPriceBox
          text="Delivery Fee"
          price={deliveryPrice}
          className="pb-gap-9 border-b border-gray-200"
        />
        <TextPriceBox
          text="Grabd Total"
          price={grandTotalprice}
          className="font-text-lg-bold"
        />
      </div>
      {children}
    </div>
  );
}
