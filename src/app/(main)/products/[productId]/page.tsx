import { MainContainer } from "@/components/containers/MainContainer";
import Image from "next/image";
import { RewievStar } from "@/components/svg-icons/ReviewStars";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "@/components/svg-icons/PlusMinus";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  CertificateIcon,
  ContactIcon,
  DeliveryIcon,
  HeartIcon,
  ReturnIcon,
  Shipping3Icon,
  ShippingIconAlt,
  ShippingInfoIcon,
  ReturnIcon2,
  KlarnaIcon,
  PayPalIcon,
  VisaIcon,
  MastercardIcon,
} from "@/components/svg-icons/ProductPageIcons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import GlareHover from "@/components/animatedComponents/GlareHover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

///////small component///////////
const icontextCombiVariants = cva("flex", {
  variants: {
    alignment: {
      horizontal: "gap-x-gap-5 items-center",
      vertical: "gap-y-[16px] flex-col items-start",
    },
  },
  defaultVariants: {
    alignment: "horizontal",
  },
});

function IconTextCombi({
  alignment,
  className,
  text,
  icon,
}: VariantProps<typeof icontextCombiVariants> & {
  className?: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div className={cn(icontextCombiVariants({ alignment }), className)}>
      <span>{icon}</span>
      <p className="font-text-md-medium text-gray-950">{text}</p>
    </div>
  );
}
///////small component///////////

///////small component///////////
const toFive = (n: number) => {
  const k = Math.max(1, Math.min(5, Math.floor(n))); // das macht dass k zwischen 0 und 5 ist zwangsweise!
  return Array(5)
    .fill(0)
    .map((_, i) => (i < k ? 1 : 0));
};

function Rating({
  rating,
  className,
}: {
  rating: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const reviewArr = toFive(rating);
  return (
    <div className={cn("flex gap-x-gap-9", className)}>
      <div className="flex space-x-1 items-center mb-gap-11">
        {reviewArr.map((review, index) => (
          <RewievStar variant={review ? "fill" : "outline"} key={index} />
        ))}
      </div>
      <p className="font-text-md-medium text-gray-950">
        {rating}.0 (1.2k Reviews)
      </p>
    </div>
  );
}
///////small component///////////

function ProductImages() {
  const images = [
    { imgSrc: "/images/product-test.png", imgAlt: " " },
    { imgSrc: "/images/woman.png", imgAlt: " " },
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[676/640] bg-gray-100">
              <Image
                src={"/images/product-test.png"}
                alt=""
                fill //hier fill -> display absolut
                className="object-[50%_50%] object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function ProductDetailsSideContent() {
  return (
    <>
      {/* text  mit beschreibung und stock anzahl */}
      <Rating rating={5} className="mb-gap-16" />
      <p className="text-gray-950 font-lg-regular font-notoSerif mb-gap-7">
        Rose Gold Diamond Earrings
      </p>
      <div className="flex items-center gap-x-gap-3 pb-gap-9 mb-gap-11 border-b border-gray-200">
        <p className="font-text-xl-medium text-gray-950">$160.00</p>
        <p className="font-text-xl-medium text-gray-400 line-through">
          $180.00
        </p>
      </div>
      <p className="font-text-sm-medium text-gray-500 mb-gap-9">
        t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <p className="font-text-md-medium text-gray-950 mb-gap-13">
        Only <span className="text-error-500">8 items</span> left in stock
      </p>

      {/* Buttons */}
      <div className="flex gap-x-gap-9 items-stretch mb-gap-9">
        <div className="p-gap-9 flex gap-x-gap-9 border border-gray-200">
          <button className="cursor-pointer">
            <MinusIcon />
          </button>
          <span className="font-text-md-medium text-gray-950">1</span>
          <button className="cursor-pointer">
            <PlusIcon />
          </button>
        </div>
        <GlareHover className="flex-1">
          <Button value={"fill"} size={"xl"} className="w-full">
            ADD TO CART
          </Button>
        </GlareHover>
      </div>
      <Button
        size={"xl"}
        variant={"outline"}
        className="w-full font-text-md-medium text-gray-950 mb-gap-13"
      >
        BUY NOW
      </Button>

      {/* diese kleinen icons horizontal aligned */}
      <div className="flex w-full">
        <ScrollArea type={"auto"} className="mb-gap-13 w-[200px] grow">
          <div className="flex items-center justify-between gap-gap-9 pb-gap-9 border-b border-gray-200">
            <button className="cursor-pointer shrink-0">
              <IconTextCombi text="ADD TO WISHLIST" icon={<HeartIcon />} />
            </button>
            <button className="cursor-pointer shrink-0">
              <IconTextCombi text="CONTACT US" icon={<ContactIcon />} />
            </button>
            <button className="cursor-pointer shrink-0">
              <IconTextCombi text="SHIPPING INFO" icon={<ShippingInfoIcon />} />
            </button>
            <button className="cursor-pointer shrink-0">
              <IconTextCombi text="RETURN POLICY" icon={<ReturnIcon />} />
            </button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* diese 2 icons mit sätzen nebenan */}
      <div className="flex flex-col gap-y-gap-9 pb-gap-9 border-b border-gray-200 mb-gap-13">
        <p className="font-text-md-medium text-gray-950 flex items-center">
          <span className="mr-gap-7">
            <DeliveryIcon />
          </span>
          <span> Free wolrdwide shipping on all orders over 200€</span>
        </p>
        <p className="font-text-md-medium text-gray-950 flex items-center">
          <span className="mr-gap-7">
            <ShippingIconAlt />
          </span>
          <span className="mr-gap-5">Delivers in 2-4 working days</span>
          <span className="underline cursor-pointer">Shipping & Return</span>
        </p>
      </div>

      {/* diese 3 icons section */}
      <div className="flex items-center gap-x-gap-11 justify-between mb-gap-13">
        <IconTextCombi
          alignment={"vertical"}
          text="Free Shipping"
          icon={<Shipping3Icon />}
          className="flex-1 border-r border-gray-200"
        />
        <IconTextCombi
          alignment={"vertical"}
          text="Certified Jewelry"
          icon={<CertificateIcon />}
          className="flex-1 border-r border-gray-200"
        />
        <IconTextCombi
          alignment={"vertical"}
          text="Lifetime Exchange"
          icon={<ReturnIcon2 />}
          className="flex-1"
        />
      </div>

      {/* bezahlung hinweise */}
      <div className="py-gap-11 px-gap-9 bg-gray-100 flex flex-col items-center gap-y-gap-9">
        <div className="flex items-center gap-x-gap-5">
          <KlarnaIcon />
          <PayPalIcon />
          <VisaIcon />
          <MastercardIcon />
        </div>
        <p className="font-text-md-medium text-gray-950">
          Guaranteed Safe Checkout
        </p>
      </div>
    </>
  );
}

export default function ProductPage() {
  return (
    <MainContainer>
      <div className="flex gap-x-[32px] w-full">
        <div className="basis-0 grow-[576] h-fit sticky top-0">
          <ProductImages />
        </div>
        <div className="basis-0 grow-[560]">
          <ProductDetailsSideContent />
        </div>
      </div>
    </MainContainer>
  );
}
