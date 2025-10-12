import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import QTYDropDown from "@/components/dropdowns/QTYDropDown";
import { DownArrow } from "@/components/svg-icons/ArrowIcons";
import {
  BoxIconCart,
  DeleteIcon,
  ReturnItemInBoxIcon,
  XIconCart,
} from "@/components/svg-icons/CartIcont";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
//FRAGE OB CHATGPT; WIE MAN MAN MIT TYPES UMGEHEN SOLL -> SOLL MAN DIE WIRKLICH JEDES MAL DRAUCH PACKEN; ODER NUR BEI TYPES DIE IMMER WIEDER VORKOMMEN!!!!

function CartItem({
  name,
  price,
  priceNoDiscount,
  qty,
  imgSrc,
}: Omit<CartItemProps, "id">) {
  //das muss wahrsch. ne client comp sein, da hier state verwaltet wird!
  return (
    <div className="w-full p-gap-9 grid grid-cols-[auto_1fr_auto] items-stretch gap-gap-9 border border-gray-200">
      <div className="relative aspect-[160/203]">
        <Image
          src={imgSrc}
          alt=""
          fill //hier fill -> display absolut
          className="object-[50%_50%] object-cover bg-gray-100"
        />
      </div>
      <div className="flex flex-col gap-y-gap-7">
        <div className="flex flex-col gap-y-gap-5">
          <p>{name}</p>
          <div className="flex items-center gap-x-gap-3 mb-gap-3">
            <p className="font-text-md-medium text-gray-700">${price}</p>
            {priceNoDiscount && (
              <p className="font-text-md-medium text-gray-400 line-through">
                ${priceNoDiscount}
              </p>
            )}
          </div>
          <p className="font-text-sm-medium text-gray-500">Color: Gold</p>
        </div>
        <QTYDropDown>
          <Button
            size={"sm"}
            variant={"ghost"}
            className="w-fit group bg-gray-50"
          >
            <p className="flex items-center font-text-sm-medium text-gray-950 space-x-[4px]">
              <span>QTY: {qty}</span>
              <DownArrow />
            </p>
          </Button>
        </QTYDropDown>
        <div className="font-text-md-medium text-gray-950 flex items-center">
          <span className="mr-gap-5">
            <ReturnItemInBoxIcon />
          </span>
          <p className="font-text-md-medium text-gray-500">
            <span className="text-gray-950">15 days</span> return available
          </p>
        </div>
        <div className="font-text-md-medium text-gray-950 flex items-center">
          <span className="mr-gap-5">
            <BoxIconCart />
          </span>
          <p className="font-text-md-medium text-gray-500">
            Delivered by <span className="text-gray-950">Aug 12, 2024</span>
          </p>
        </div>
      </div>
      {/* damit item löschen. ALso hier event-handler */}
      <span className="cursor-pointer">
        <XIconCart />
      </span>
    </div>
  );
}

function CartContent({ items }: { items: CartItemProps[] }) {
  //das nehme später aus db!

  //mache die props noch anständig!

  //das selected-state noch implementieren!
  return (
    <div className="flex flex-col gap-y-gap-11 w-full">
      <div className="flex items-center gap-y-gap-9 justify-between">
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

function PaymentSummary({ totalPrice }: { totalPrice: number }) {
  return <div>{totalPrice}</div>;
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
      <MainContainer className="flex gap-gap-13 sm:flex-row sm:gap-[64px]">
        <CartContent items={items} />
        <PaymentSummary totalPrice={totalPrice} />
      </MainContainer>
    </>
  );
}
