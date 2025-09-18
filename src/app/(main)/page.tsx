import { ArrowLeftRight } from "@/components/svg-icons/ArrowIcons";
import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/animatedComponents/GlareHover";
import { BoxIcon } from "@/components/svg-icons/BenefitIcons";

function HomePageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-gap-9 py-gap-13 sm:px-[70px] sm:py-[80px] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeaderContainer({
  action,
  children,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-gap-11 sm:flex-row sm:justify-between sm:items-center mb-gap-13 sm:mb-[48px]">
      <p className="font-sm-regular sm:font-lg-regular text-gray-950 font-notoSerif">
        {children}
      </p>
      {action}
    </div>
  );
}

function UlScrollableX({
  children,
  spacing,
  className,
  ...props
}: {
  children: ReactNode;
  spacing: string;
  className?: string;
}) {
  return (
    <ul
      className={`flex overflow-x-auto scroll-smooth ${spacing} ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
}

// das kann ich für andere projekte noch nutzen!
function CategoryItem({
  categoryText,
  categoryImg,
}: {
  categoryText: string;
  categoryImg: string;
}) {
  return (
    <div className="w-[250px] flex justify-between sm:w-[476px]">
      <p className="[writing-mode:vertical-lr] rotate-180 self-end font-notoSerif font-sm-regular sm:font-lg-regular">
        {categoryText}
      </p>
      <div className="relative w-[208px] h-[261px] sm:w-[400px] sm:h-[500px]">
        <Image
          src={categoryImg}
          alt=""
          fill //hier fill -> display absolut
          className="object-[50%_50%] object-cover"
        />
      </div>
    </div>
  );
}

function Categorys() {
  return (
    <UlScrollableX spacing="space-x-gap-11 sm:space-x-gap-13">
      <li className="odd:pb-[34px] even:pt-[34px] sm:odd:pb-[64px] sm:even:pt-[64px]">
        <CategoryItem
          categoryText="Rings"
          categoryImg="/images/Figma-image-test.jpg"
        />
      </li>
      <li className="odd:pb-[34px] even:pt-[34px] sm:odd:pb-[64px] sm:even:pt-[64px]">
        <CategoryItem
          categoryText="Rings"
          categoryImg="/images/Figma-image-test.jpg"
        />
      </li>
      <li className="odd:pb-[34px] even:pt-[34px] sm:odd:pb-[64px] sm:even:pt-[64px]">
        <CategoryItem
          categoryText="Rings"
          categoryImg="/images/Figma-image-test.jpg"
        />
      </li>
    </UlScrollableX>
  );
}

function CollectionItem({
  title,
  image,
  price,
  priceNoDiscount,
}: {
  title: string;
  image: string;
  price: string | number;
  priceNoDiscount?: string | number;
}) {
  return (
    <div className="flex flex-col space-y-gap-5">
      <div className="relative aspect-[313/330] group">
        <Image
          src={image}
          alt=""
          fill //hier fill -> display absolut
          className="object-[50%_50%] object-cover"
        />
        <div className="flex justify-center items-center absolute bottom-0 w-full py-gap-9 px-gap-13 bg-black/90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition ease-in-out duration-300">
          <p className="font-text-md-medium uppercase text-white">
            select option
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-gap-3">
        <p className="font-text-md-medium">{title}</p>
        <p className="flex space-x-gap-3 font-text-md-medium">
          <span>{price}$</span>
          {priceNoDiscount && (
            <span className="text-gray-400 line-through">
              {priceNoDiscount}$
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

function ShapeItem({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex flex-col items-center p-gap-9 space-y-gap-5 w-[136px]">
      <Image src={image} alt="" height={70} width={70} />
      <p className="font-text-md-medium">{title}</p>
    </div>
  );
}

function CTAImage({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="flex flex-col space-y-gap-9 ">
      <div className="relative aspect-[343/450] sm:aspect-[634/700]">
        <Image
          src={image}
          alt=""
          fill
          className="object-[50%_50%] object-cover"
        />
      </div>
      <div className="flex flex-col space-y-gap-13">
        <div>
          <p className="font-sm-regular font-notoSerif text-gray-950 mb-gap-5">
            {title}
          </p>
          <p className="font-text-md-medium text-gray-700">{subtitle}</p>
        </div>
        <GlareHover
          height=""
          width=""
          borderRadius="0"
          background=""
          className="w-fit"
        >
          <Button variant={"fill"} size={"xl"} className="w-fit">
            <p className="font-text-md-medium">Shop Now</p>
          </Button>
        </GlareHover>
      </div>
    </div>
  );
}

function Benefits({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-gap-9">{icon}</div>
      <p className="font-sm-regular font-notoSerif mb-gap-3 text-center text-white">
        {title}
      </p>
      <p className="font-text-md-medium text-gray-400 text-center">
        {subtitle}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* SHop by category section */}
      <section id="category">
        <HomePageContainer>
          <SectionHeaderContainer action={<ArrowLeftRight />}>
            Shop By Category
          </SectionHeaderContainer>
          <Categorys />
        </HomePageContainer>
      </section>

      {/* hier was falsach verstanden aus der figma file! Mache die items so groß, dass sie ab bestimmter breakpoint die ganze Breite einnehmen! 
      -> Kein feste Breite ab breakpoint! D.h ab einer breite soll es wachsen (bilder und spacing zwischen ihnen)! (muss wohl custom breakpoint rein machen) */}
      {/* latest collection Section */}
      <section id="lates collection">
        <HomePageContainer>
          <SectionHeaderContainer>Latest Collaection</SectionHeaderContainer>
          <UlScrollableX spacing="space-x-gap-9" className="justify-between">
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
          </UlScrollableX>
        </HomePageContainer>
      </section>

      {/* shop in shape section */}
      <section id="shop in shape">
        <HomePageContainer>
          <SectionHeaderContainer>Shop In Shape</SectionHeaderContainer>
          <UlScrollableX
            spacing="space-x-gap-5 xl:space-x-gap-15"
            className="justify-between"
          >
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
            <li>
              <ShapeItem title="Round" image="/images/earrings.png" />
            </li>
          </UlScrollableX>
        </HomePageContainer>
      </section>

      {/* next section */}
      <section id="next section">
        <HomePageContainer>
          <ul className="flex flex-col justify-center items-center gap-13 sm:flex-row">
            <li className="sm:pb-[120px] grow w-[max(343px,70%)] max-w-[634]">
              <CTAImage
                title="Timeless h"
                subtitle="dies"
                image="/images/ctaBild.jpg"
              ></CTAImage>
            </li>
            <li className="sm:pt-[120px] grow w-[max(343px,70%)] max-w-[634]">
              <CTAImage
                title="Timeless h"
                subtitle="dies"
                image="/images/ctaBild.jpg"
              ></CTAImage>
            </li>
          </ul>
        </HomePageContainer>
      </section>

      <section id="Gallery">
        <HomePageContainer>
          <SectionHeaderContainer>
            Most Luxurious Designer Diamond Jewellery
          </SectionHeaderContainer>
          <div className="relative aspect-[343/450] min-[650px]:aspect-[1300/700] w-full">
            <Image
              src={"/images/luxus.jpg"}
              alt=""
              fill //hier fill -> display absolut
              className="object-[50%_50%] object-cover"
            />
          </div>
        </HomePageContainer>
      </section>
      <section id="images" className="pb-[80px]">
        <HomePageContainer>
          <div className="flex flex-col justify-between items-center min-[650px]:flex-row">
            <div className="relative aspect-[650/700] w-full min-[650px]:w-1/2">
              <Image
                src={"/images/woman.jpg"}
                alt=""
                fill //hier fill -> display absolut
                className="object-[50%_50%] object-cover"
              />
            </div>
            <div className="w-full px-gap-9 py-gap-9 min-[650px]:w-1/2 min-[650px]:px-[10%] min-[650px]:py-[7%]">
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </div>
          </div>
        </HomePageContainer>
      </section>

      {/* mache das lieber in ne grid. Vom 600px bis 1200px soll es in eine 2x2 grid!*/}
      {/* auch die container vorher könntest du lieber in eine grid anordnen! */}
      <section id="leistung">
        <HomePageContainer className="bg-black">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <Benefits
              icon={<BoxIcon />}
              title="Free shipping"
              subtitle="you will love a great low prices"
            ></Benefits>
            <Benefits
              icon={<BoxIcon />}
              title="Free shipping"
              subtitle="you will love a great low prices"
            ></Benefits>
            <Benefits
              icon={<BoxIcon />}
              title="Free shipping"
              subtitle="you will love a great low prices"
            ></Benefits>
            <Benefits
              icon={<BoxIcon />}
              title="Free shipping"
              subtitle="you will love a great low prices"
            ></Benefits>
          </div>
        </HomePageContainer>
      </section>
    </>
  );
}
