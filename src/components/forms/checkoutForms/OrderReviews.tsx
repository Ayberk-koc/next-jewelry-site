"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { EditButton } from "@/components/svg-icons/ReviewPageIcon";
import { useCheckoutFormContext } from "@/components/contexts/CheckoutFormContext";
import { useAddressContext } from "@/components/contexts/AddressContext";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

function EditFormLink({
  title,
  subtext,
  subtextInfo,
  ...props
}: {
  title: string;
  subtext: string;
  subtextInfo?: string;
} & ComponentProps<"button">) {
  return (
    <div className="pb-gap-9 border-b border-gray-200">
      <p className="font-text-lg-medium text-gray-950 mb-gap-9">{title}</p>
      <div className="flex items-center gap-x-gap-9 justify-between">
        <div>
          <p className="font-text-md-medium text-gray-950 mb-gap-5">
            {subtext}
          </p>
          {subtextInfo && (
            <p className="font-text-sm-medium text-gray-500">{subtextInfo}</p>
          )}
        </div>
        <Button
          size={"md"}
          variant={"fill"}
          className="bg-gray-100 !p-gap-6"
          {...props}
        >
          <EditButton />
        </Button>
      </div>
    </div>
  );
}

type ReviewItemBocProps = {
  imgSrc: string;
  price: number;
  qty: number;
  title: string;
};

function ReviewItemBox({ imgSrc, price, qty, title }: ReviewItemBocProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] pb-gap-9 border-b border-gray-200 gap-x-gap-5">
      <div className="relative aspect-[1/1] bg-gray-200">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-[50%_50%] object-cover"
        ></Image>
      </div>
      <div className="flex flex-col gap-y-gap-3">
        <p className="font-text-md-medium text-gray-950">{title}</p>
        <p className="font-text-md-medium text-gray-700">${price}</p>
        <p className="font-text-md-medium text-gray-700">QTY: {qty}</p>
      </div>
    </li>
  );
}

type naviGationPaths = "address" | "payment" | "review";

export default function OrderReviewForm() {
  const itemsInReview: ({ id: number } & ReviewItemBocProps)[] = [
    {
      id: 0,
      imgSrc: "/images/product-test.png",
      price: 160,
      qty: 1,
      title: "Rose Gold Diamond Earrings",
    },
    {
      id: 1,
      imgSrc: "/images/product-test.png",
      price: 160,
      qty: 1,
      title: "Rose Gold Diamond Earrings",
    },
    {
      id: 2,
      imgSrc: "/images/product-test.png",
      price: 160,
      qty: 1,
      title: "Rose Gold Diamond Earrings",
    },
    {
      id: 3,
      imgSrc: "/images/product-test.png",
      price: 160,
      qty: 1,
      title: "Rose Gold Diamond Earrings",
    },
  ];

  const totalForm = useCheckoutFormContext();
  const pickedAddressId = totalForm.getValues("pickAddressForm.addressId");

  const router = useRouter();

  const { addressListe } = useAddressContext();

  const pickedAddress = addressListe.find(
    (address) => address.id === pickedAddressId
  );

  const addressSummary = `${pickedAddress?.street} ${pickedAddress?.houseNr}, ${pickedAddress?.zip} ${pickedAddress?.city}`;
  const name = pickedAddress?.name;

  function handleNavigate(href: naviGationPaths) {
    router.push(href);
  }

  return (
    <div className="flex flex-col gap-y-gap-11">
      <div className="flex flex-col">
        <p className="font-text-lg-medium text-gray-950 mb-gap-9">
          Estimated Delivery: August 13, 2024
        </p>
        <ul className="flex flex-col gap-y-gap-9">
          {itemsInReview.map((item) => (
            <ReviewItemBox
              key={item.id}
              imgSrc={item.imgSrc}
              price={item.price}
              qty={item.qty}
              title={item.title}
            />
          ))}
        </ul>
      </div>
      <EditFormLink
        title="Shipping Address"
        subtext={name ?? "Customer"}
        subtextInfo={addressSummary}
        onClick={() => handleNavigate("address")}
      />
      <EditFormLink
        title="Payment Methode"
        subtext="Perry wilson"
        subtextInfo="3891 Ranchview Dr. Richardson, California 62639"
        onClick={() => handleNavigate("payment")}
      />
    </div>
  );
}
