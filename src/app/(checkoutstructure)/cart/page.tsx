import CartContent from "@/components/itemComponents/CartContent";
import CheckoutLayout from "@/components/layoutComponents/CheckoutLayout";

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

  return (
    <CheckoutLayout title="My Cart" action="Check out">
      <CartContent items={items} />
    </CheckoutLayout>
  );
}
