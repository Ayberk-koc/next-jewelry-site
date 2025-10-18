"use client";

import QTYDropDown from "@/components/dropdowns/QTYDropDown";
import { DownArrow } from "@/components/svg-icons/ArrowIcons";
import {
  BoxIconCart,
  ReturnItemInBoxIcon,
  XIconCart,
} from "@/components/svg-icons/CartIcont";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  priceNoDiscount?: number;
  qty: number;
  imgSrc: string;
};

export default function CartItem({
  name,
  price,
  priceNoDiscount,
  qty,
  imgSrc,
}: Omit<CartItemProps, "id">) {
  const itemsDescriptionBox = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(200); //initial height is 150!

  useEffect(() => {
    if (!itemsDescriptionBox.current) return;

    function measureAndSetHeight() {
      const measuredHeight = itemsDescriptionBox.current?.offsetHeight;
      setHeight(measuredHeight as number);
    }

    measureAndSetHeight();
    window.addEventListener("resize", measureAndSetHeight);

    const resizeObserver = new ResizeObserver(measureAndSetHeight);
    resizeObserver.observe(itemsDescriptionBox.current);

    return () => {
      window.removeEventListener("resize", measureAndSetHeight);
      resizeObserver.disconnect();
    };
  }, []);
  //sm:aspect-[160/203]
  return (
    <div className="relative w-full p-gap-9 flex items-start gap-gap-9 border border-gray-200 [--factor:1] min-[1000px]:[--factor:0.8]">
      <div
        className="relative min-w-[130px] w-[50%]"
        style={{
          maxHeight: `${height}px`,
          maxWidth: `calc(${height}px * var(--factor))`,
          aspectRatio: `calc(1 * var(--factor))`,
        }}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-[50%_50%] object-cover bg-gray-100"
        />
      </div>
      <div
        ref={itemsDescriptionBox}
        className="flex items-start justify-between flex-1 gap-gap-9"
      >
        <div className="flex flex-col gap-y-gap-7">
          <div className="flex flex-col gap-y-gap-5">
            <p className="break-words">{name}</p>
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
          <div className="font-text-md-medium text-gray-950 flex items-start">
            <span className="mr-gap-5">
              <ReturnItemInBoxIcon />
            </span>
            <p className="font-text-md-medium text-gray-500">
              <span className="text-gray-950">15 days</span> return available
            </p>
          </div>
          <div className="font-text-md-medium text-gray-950 flex items-start">
            <span className="mr-gap-5">
              <BoxIconCart />
            </span>
            <p className="font-text-md-medium text-gray-500">
              Delivered by <span className="text-gray-950">Aug 12, 2024</span>
            </p>
          </div>
        </div>
        <span className="cursor-pointer">
          <XIconCart />
        </span>
      </div>
    </div>
  );
}
