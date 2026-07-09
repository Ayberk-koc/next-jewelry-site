"use client"; // Nur dieser kleine Part ist Client-seitig!

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProductsListing from "./ProductsListing";
import { createPortal } from "react-dom";
import { TailSpin } from "react-loader-spinner";

type Item = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceNoDiscount: number;
  category: string;
  size: string;
  soldLastWeek?: number;
};
const TESTITEMS = [
  {
    id: 21,
    title: "Ring",
    price: 340,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
    soldLastWeek: 10,
  },
  {
    id: 22,
    title: "Necklaces",
    price: 50,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Necklaces",
    size: "3",
    soldLastWeek: 14,
  },
  {
    id: 23,
    title: "Bracelets",
    price: 3,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "6",
    soldLastWeek: 17,
  },
  {
    id: 24,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "8",
  },
  {
    id: 25,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "5",
  },
  {
    id: 26,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "2",
  },
  {
    id: 27,
    title: "Rings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
  },
  {
    id: 28,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "4",
  },
  {
    id: 29,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "5",
  },
  {
    id: 30,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "3",
  },

  {
    id: 31,
    title: "Ring",
    price: 340,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
    soldLastWeek: 10,
  },
  {
    id: 32,
    title: "Necklaces",
    price: 50,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Necklaces",
    size: "3",
    soldLastWeek: 14,
  },
  {
    id: 33,
    title: "Bracelets",
    price: 3,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "6",
    soldLastWeek: 17,
  },
  {
    id: 34,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "8",
  },
  {
    id: 35,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "5",
  },
  {
    id: 36,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "2",
  },
  {
    id: 37,
    title: "Rings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
  },
  {
    id: 38,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "4",
  },
  {
    id: 39,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "5",
  },
  {
    id: 40,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "3",
  },

  {
    id: 41,
    title: "Ring",
    price: 340,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
    soldLastWeek: 10,
  },
  {
    id: 42,
    title: "Necklaces",
    price: 50,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Necklaces",
    size: "3",
    soldLastWeek: 14,
  },
  {
    id: 43,
    title: "Bracelets",
    price: 3,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "6",
    soldLastWeek: 17,
  },
  {
    id: 44,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "8",
  },
  {
    id: 45,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "5",
  },
  {
    id: 46,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "2",
  },
  {
    id: 47,
    title: "Rings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Rings",
    size: "5",
  },
  {
    id: 48,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "4",
  },
  {
    id: 49,
    title: "Bracelets",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Bracelets",
    size: "5",
  },
  {
    id: 50,
    title: "Earrings",
    price: 300,
    priceNoDiscount: 340,
    image: "/images/earrings.png",
    category: "Earrings",
    size: "3",
  },
];

export default function InfiniteScrollLoader() {
  const { ref, inView } = useInView();
  const [additionalItems, setAdditionalItems] = useState<Item[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setAdditionalItems((prevState) => [
        ...prevState,
        ...TESTITEMS.slice(10, 50), //hier items mit api-call holen! Das ist erstmal nur zum testen. Das Gibt halt mega viele
      ]);
    }
  }, [inView]);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return;

  const productsContainerElement = document.getElementById("productsContainer");
  if (!productsContainerElement) return;

  return (
    <div>
      {additionalItems &&
        createPortal(
          <ProductsListing items={additionalItems} />,
          productsContainerElement,
        )}

      {/* Das ist der unsichtbare Trigger ganz unten auf der Seite */}
      <div ref={ref}>
        <TailSpin
          visible={inView}
          height="40"
          width="40"
          color="#343434"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}
