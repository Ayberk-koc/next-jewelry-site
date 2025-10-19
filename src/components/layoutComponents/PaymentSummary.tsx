import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  action,
}: {
  totalPrice: number;
  action: string;
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
        <div>
          <Label className="font-text-sm-medium text-gray-500" scale={"xl2"}>
            Enter Discount Code
          </Label>
          <div className="flex items-stretch">
            <Input
              scale={"xl2"}
              className="font-text-md-medium text-gray-950 flex-1"
            ></Input>
            <Button
              variant={"fill"}
              size={"lg"}
              className="font-text-md-medium"
            >
              APPLY
            </Button>
          </div>
        </div>
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
      <Button size={"xl"} variant={"fill"} className="uppercase">
        {action}
      </Button>
    </div>
  );
}
