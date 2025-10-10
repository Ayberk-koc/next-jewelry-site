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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductItem from "@/components/ProductItem";

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

function StarsReview({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const reviewArr = toFive(rating);
  return (
    <div className={cn("flex space-x-1 items-center", className)}>
      {reviewArr.map((review, index) => (
        <RewievStar variant={review ? "fill" : "outline"} key={index} />
      ))}
    </div>
  );
}

function Rating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-x-gap-9", className)}>
      <StarsReview rating={rating} />
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
    { imgSrc: "/images/porträt.jpg", imgAlt: " " },
    { imgSrc: "/images/porträt.jpg", imgAlt: " " },
  ];
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[676/640] bg-gray-100">
              <Image
                src={image.imgSrc}
                alt={image.imgAlt}
                fill
                className="object-[50%_50%] object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-2"
        variant={"outline"}
        size={"sm"}
      />
      <CarouselNext
        className="absolute right-2"
        variant={"outline"}
        size={"sm"}
      />
    </Carousel>
  );
}

function ProductDetailsSideContent() {
  //das ist nur dumme component. Alle state management mache in wrapper-component! Hier soll nur der style sein. Trenne stets logik und style
  return (
    <>
      {/* text  mit beschreibung und stock anzahl */}
      <Rating rating={5} className="mb-gap-9" />
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
        <div className="flex-1">
          <GlareHover className="w-full">
            <Button value={"fill"} size={"xl"} className="w-full">
              ADD TO CART
            </Button>
          </GlareHover>
        </div>
      </div>
      <Button
        size={"xl"}
        variant={"outline"}
        className="w-full font-text-md-medium text-gray-950 mb-gap-13"
      >
        BUY NOW
      </Button>

      {/* das gehlört dnoch zdazu */}

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

function InfosAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <div className="flex flex-col gap-y-gap-11">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="font-text-md-medium text-gray-950 uppercase py-0 cursor-pointer">
            Description
          </AccordionTrigger>
          <AccordionContent className="font-text-sm-medium text-gray-500 border-b border-gray-200 mt-gap-5">
            <p>
              The Diamond Scattered Stud Earrings are crafted from high-quality
              gold, featuring a unique pattern of brilliant round diamonds
              totaling approximately 1.06 carats. Long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-0">
          <AccordionTrigger className="font-text-md-medium text-gray-950 uppercase py-0 cursor-pointer">
            Shipping
          </AccordionTrigger>
          <AccordionContent className="font-text-sm-medium text-gray-500 border-b border-gray-200 mt-gap-5">
            <p>
              The Diamond Scattered Stud Earrings are crafted from high-quality
              gold, featuring a unique pattern of brilliant round diamonds
              totaling approximately 1.06 carats. Long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-0">
          <AccordionTrigger className="font-text-md-medium text-gray-950 uppercase py-0 cursor-pointer">
            packaging
          </AccordionTrigger>
          <AccordionContent className="font-text-sm-medium text-gray-500 border-b border-gray-200 mt-gap-5">
            <p>
              The Diamond Scattered Stud Earrings are crafted from high-quality
              gold, featuring a unique pattern of brilliant round diamonds
              totaling approximately 1.06 carats. Long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-0">
          <AccordionTrigger className="font-text-md-medium text-gray-950 uppercase py-0 cursor-pointer">
            return
          </AccordionTrigger>
          <AccordionContent className="font-text-sm-medium text-gray-500 border-b border-gray-200 mt-gap-5">
            <p>
              The Diamond Scattered Stud Earrings are crafted from high-quality
              gold, featuring a unique pattern of brilliant round diamonds
              totaling approximately 1.06 carats. Long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
}

function Review({
  text,
  subText,
  name,
  rating,
  date,
  imgSrc,
}: {
  text: string;
  subText?: string;
  date?: string;
  name?: string;
  rating: number;
  imgSrc?: string;
}) {
  return (
    <div>
      <div id="userBadge" className="flex gap-x-gap-7 items-stretch mb-gap-9">
        <div className="relative w-[50px] h-[50px] rounded-full">
          <Image
            src={imgSrc ?? "/images/badge.svg"}
            alt="profile picture review"
            fill
            className="object-[0%_70%] object-cover"
          ></Image>
        </div>
        <div className="flex flex-col gap-y-gap-3">
          <p className="font-text-md-medium text-gray-950">
            {name ? name : "Anonym"}
          </p>
          <StarsReview rating={rating} />
        </div>
      </div>
      <div className="pb-gap-9 border-b border-gray-200">
        <div className="mb-gap-7">
          <p className="font-sm-regular text-gray-950 font-notoSerif">
            &#34;{text}&#34;
          </p>
          {subText ? (
            <p className="mt-gap-5 font-text-md-medium text-gray-500">
              {subText}
            </p>
          ) : null}
        </div>
        <p className="font-text-sm-medium text-gray-500">
          Review by <span className="text-gray-950">Gemjewel</span> Posted on{" "}
          <span className="text-gray-950">{date ?? "Aug 12, 2025"}</span>
        </p>
      </div>
    </div>
  );
}

function ReviewsSection() {
  //hier nehem id von produkt um db call für richtige reviews zu machen
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "My wife is thrilled with these earrings.",
      subText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 2,
      rating: 5,
      text: "I absolutely adored these fabulous diamond earrings—I'm in love! 😍",
      subText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between gap-x-gap-9 mb-gap-13">
        <p className="font-md-regular font-notoSerif">Reviews</p>
        <Button
          variant={"outline"}
          size={"lg"}
          className="font-text-md-medium text-gray-950 uppercase"
        >
          Write a Review
        </Button>
      </div>
      <div className="w-full flex flex-col gap-y-gap-13">
        {reviews.map((review) => (
          <Review
            key={review.id}
            rating={review.rating}
            text={review.text}
            subText={review.subText}
          />
        ))}
      </div>
    </>
  );
}

function SimilarProductsCarousel() {
  //wenn ich infinite loops haben will, mache   <Carousel className="w-full relative" opts={{ loop: true }}> bzw muss
  //alle die keys in as opts object rein machen. Die mögl keys sehe hier: https://www.embla-carousel.com/api/options/

  //erstmal nur statisch! Db anbindung mache später
  const items = [
    {
      id: 1,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 200,
      priceNoDiscount: 400,
    },
    {
      id: 2,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 300,
      priceNoDiscount: 400,
    },
    {
      id: 3,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 400,
      priceNoDiscount: 400,
    },
    {
      id: 4,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 500,
      priceNoDiscount: 400,
    },
    {
      id: 5,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 600,
      priceNoDiscount: 400,
    },
    {
      id: 6,
      title: "Rose fold diamond earring",
      img: "/images/earrings.png",
      price: 700,
      priceNoDiscount: 400,
    },
  ];

  return (
    <Carousel
      className="w-full relative"
      opts={{
        align: "start",
        // slidesToScroll: "auto",   //falls immer so weit scrollen, dass alle alten weg sind
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="-ml-gap-5 min-[900px]:-ml-gap-gap-9">
        {items.map((item) => (
          <CarouselItem
            className="basis-1/2 pl-gap-5 min-[900px]:pl-gap-gap-9 min-[900px]:basis-1/3 min-[1400px]:basis-1/4"
            key={item.id}
          >
            <ProductItem
              title={item.title ?? "Fallback"}
              image={item.img ?? "/images/earrings.png"}
              price={item.price ?? 300}
              priceNoDiscount={item.priceNoDiscount ?? 400}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-2 top-[45%]"
        variant={"outline"}
        size={"sm"}
      />
      <CarouselNext
        className="absolute right-2 top-[45%]"
        variant={"outline"}
        size={"sm"}
      />
    </Carousel>
  );
}

function SimilarProductsSection() {
  //mache diese bilder immer so, dass entweder 1, 2, 3 oder 4 von ihnen drauf zu sehen sind. Wenn es weniger als 4 sind, mache dass man slide show sehen kann
  //mit step-breite so, dass immer neue zu sehen sind. D.h wenn 3 zu sehen sind step-1 wenn 2 zu sehen sind step-2 wenn 1 zu sehen ist step-1
  //außerdem müssen hier ja die daten rein!!
  return (
    <>
      <p className="font-md-regular text-gray-950 font-notoSerif mb-gap-13">
        Similar Products
      </p>
      <SimilarProductsCarousel />
    </>
  );
}

export default function ProductPage() {
  return (
    <MainContainer>
      <div className="flex flex-col gap-y-[48px] min-[900px]:flex-row min-[900px]:gap-x-[32px] min-[900px]:gap-y-0 w-full">
        <div className="basis-0 grow-[576] h-fit min-[900px]:sticky top-0">
          <ProductImages />
        </div>
        <div className="basis-0 grow-[560]">
          <ProductDetailsSideContent />
        </div>
      </div>
      <div className="w-full">
        <InfosAccordion />
      </div>
      <div className="w-full">
        <ReviewsSection />
      </div>
      <div id="similar products" className="w-full">
        <SimilarProductsSection />
      </div>
    </MainContainer>
  );
}
