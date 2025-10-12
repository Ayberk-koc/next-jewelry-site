import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseSheetIcon } from "@/components/svg-icons/CloseIcons";
import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

//das habe ich mal so gemacht, einfach damit ich nicht vergesse, dass das auch so geht
type CartItemProps = {
  id: number;
  name: string;
  price: number;
  priceNoDiscount?: number;
  qty: number;
  imgSrc: string;
};
function QuickCartItem({
  name,
  price,
  priceNoDiscount,
  qty,
  imgSrc,
}: Omit<CartItemProps, "id">) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-stretch gap-x-gap-5">
      <div className="relative aspect-[1/1]">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-[50%_50%] object-cover bg-gray-100"
        />
      </div>
      <div className="flex flex-col gap-y-gap-3 grow-1">
        <p className="font-text-md-medium text-gray-950 mb-gap-3 relative bottom-1">
          {name}
        </p>
        <div className="flex items-center gap-x-gap-3 mb-gap-3 relative bottom-0.5">
          <p className="font-text-md-medium text-gray-700">${price}</p>
          {priceNoDiscount && (
            <p className="font-text-md-medium text-gray-400 line-through">
              ${priceNoDiscount}
            </p>
          )}
        </div>
        <p className="font-text-md-medium text-gray-700">QTY: {qty}</p>
      </div>
    </div>
  );
}

function QuickCartContent() {
  const items: CartItemProps[] = [
    {
      id: 1,
      name: "Rose Gold Diamond Earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
    {
      id: 2,
      name: "rose gold diamon earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
    {
      id: 3,
      name: "rose gold diamon earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
    {
      id: 4,
      name: "rose gold diamon earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
    {
      id: 5,
      name: "rose gold diamon earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
    {
      id: 6,
      name: "rose gold diamon earrings",
      price: 160,
      priceNoDiscount: 180,
      qty: 2,
      imgSrc: "/images/product-test.png",
    },
  ];

  const totalPrice = items.reduce((currVal, item) => {
    return currVal + item.price * item.qty;
  }, 0);

  return (
    <div className="h-full flex flex-col gap-y-gap-11">
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <ul className="flex flex-col gap-y-gap-9">
            {items.map((item) => (
              <li key={item.id} className="pb-gap-9 border-b border-gray-200">
                <QuickCartItem
                  name={item.name}
                  price={item.price}
                  priceNoDiscount={item.priceNoDiscount}
                  imgSrc={item.imgSrc}
                  qty={item.qty}
                />
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      {/* CTA  */}
      <div className="flex flex-col items-stretch gap-y-gap-9">
        <div className="flex items-center gap-y-[30px] justify-between font-text-lg-bold text-gray-950">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </div>

        <Button variant={"outline"} size={"xl"}>
          <span className="font-text-md-medium text-gray-950">VIEW CART</span>
        </Button>
        <Button variant={"fill"} size={"xl"}>
          <span className="font-text-md-medium text-white">CHECKOUT</span>
        </Button>
      </div>
    </div>
  );
}

export default function CartSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" mobileSide="bottom">
        <SheetTitle className="sr-only">Muss für Sr hier sein</SheetTitle>

        <div className="p-gap-9 sm:p-gap-11 flex flex-col h-full">
          <div className="mb-gap-11 flex justify-between items-center space-x-gap-3 pb-gap-9 border-b border-gray-200">
            <p className="font-text-lg-medium text-gray-950">
              You have <span className="font-text-lg-bold">3 items</span> in
              your cart
            </p>
            <SheetClose className="cursor-pointer">
              <CloseSheetIcon />
            </SheetClose>
          </div>
          <div className="flex-1 min-h-0">
            <QuickCartContent />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
