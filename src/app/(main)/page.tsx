import { ArrowLeftRight } from "@/components/svg-icons/ArrowIcons";
import { ReactNode } from "react";
import Image from "next/image";

function HomePageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="px-gap-9 py-gap-13 sm:px-[70px] sm:py-[80px]">
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
      className={`flex overflow-x-auto scroll-smooth ${spacing} ${className} max-w-max mx-auto`}
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
    <div className="flex flex-col space-y-gap-5 w-fit">
      <div className="relative h-[370px] w-[313px] group">
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
          <UlScrollableX spacing="space-x-gap-9">
            <li>
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li>
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li>
              <CollectionItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li>
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
          <UlScrollableX spacing="space-x-gap-5 xl:space-x-gap-15">
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
    </>
  );
}
