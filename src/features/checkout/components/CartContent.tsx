import { DeleteIcon } from "@/components/svg-icons/CartIcont";
import { Button } from "@/components/ui/button";

import CartItem from "@/features/checkout/components/CartItem";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  priceNoDiscount?: number;
  qty: number;
  imgSrc: string;
};

export default function CartContent({ items }: { items: CartItemProps[] }) {
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
