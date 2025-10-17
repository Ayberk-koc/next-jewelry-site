import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import { DeleteIcon } from "@/components/svg-icons/CartIcont";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import CartItem from "@/components/clientComponents/CartItem";

//das musst du wahrscheinlich anpassen. Falls deine items mehrere variations haben!
//außerdem solltest du das sowieso daran anpassen, wie die items in medusa gespeichert sind. Das ist erstmal eine gute übung aber!
//du wirst dann viel refactoren müssen!!

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  priceNoDiscount?: number;
  qty: number;
  imgSrc: string;
};

function CartContent({ items }: { items: CartItemProps[] }) {
  //das nehme später aus db!

  //mache die props noch anständig!

  //das selected-state noch implementieren!
  return (
    <div className="flex flex-col gap-y-gap-11 w-full">
      <div className="flex flex-col min-[1000px]:flex-row gap-y-gap-9 min-[1000px]:items-center justify-between">
        <div className="flex items-center gap-x-gap-5">
          <input type="checkbox" />
          <p className="font-text-md-medium text-gray-950">
            3/3 Items Selected
          </p>
        </div>
        <div className="flex items-center gap-x-gap-9">
          <Button size={"md"} variant={"ghost"} className="bg-error-50">
            <DeleteIcon />
          </Button>
          <Button
            size={"md"}
            variant={"outline"}
            className="uppercase font-text-sm-medium"
          >
            move to wishlist
          </Button>
        </div>
      </div>
      <ul className="flex flex-col gap-gap-9 justify-between w-full">
        {items.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              price={item.price}
              priceNoDiscount={item.priceNoDiscount}
              imgSrc={item.imgSrc}
              qty={item.qty}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

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

function PaymentSummary({ totalPrice }: { totalPrice: number }) {
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
      <Button size={"xl"} variant={"fill"}>
        CHECKOUT
      </Button>
    </div>
  );
}

export default function CartPage() {
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

  const totalPrice = items.reduce((accValue, item) => {
    return accValue + item.price * item.qty;
  }, 0);

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">My Cart</p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">
          <CartContent items={items} />
        </div>
        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice} />
        </div>
      </MainContainer>
    </>
  );
}
