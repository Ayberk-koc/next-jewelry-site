import CartContent from "@/components/itemComponents/CartContent";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import { Button } from "@/components/ui/button";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  priceNoDiscount?: number;
  qty: number;
  imgSrc: string;
};
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

  //das wird in der layout berechnet!!
  // const totalPrice = items.reduce((accValue, item) => {
  //   return accValue + item.price * item.qty;
  // }, 0);

  const totalPrice = 9000;

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
          <PaymentSummary totalPrice={totalPrice}>
            {/* hier brauche ich ein bestätigen button, der das dialog "bestätigen dialog" ruft */}
            <Button size={"xl"} variant={"fill"} className="uppercase">
              Place Order
            </Button>
          </PaymentSummary>
        </div>
      </MainContainer>
    </>
  );
}
