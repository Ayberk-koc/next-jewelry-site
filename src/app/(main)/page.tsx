import { ArrowLeftRight } from "@/components/svg-icons/ArrowIcons";
import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/animatedComponents/GlareHover";
import { BoxIcon } from "@/components/svg-icons/BenefitIcons";
import { RewievStar } from "@/components/svg-icons/ReviewStars";
import Header from "@/components/Header";
import HeaderShell from "@/components/smallComponents/HeaderShell";
import ProductItem from "@/components/ProductItem";

function HomePageContainer({
  children,
  className,
  spacing,
}: {
  children: ReactNode;
  spacing?: string;
  className?: string;
}) {
  const spacingClass = spacing
    ? spacing
    : "px-gap-9 py-gap-13 sm:px-[70px] sm:py-[80px]";

  return <div className={`${className} ${spacingClass}`}>{children}</div>;
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

function BenefitsSection() {
  return (
    <div className="grid grid-cols-1 gap-gap-13 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4 justify-center items-center">
      <div className="w-fit justify-self-center min-[600px]:justify-self-end min-[1000px]:justify-self-center min-[600px]:mr-7 min-[1000px]:mr-0">
        <Benefits
          icon={<BoxIcon />}
          title="Free shipping"
          subtitle="you will love a great low prices"
        ></Benefits>
      </div>
      <div className="w-fit justify-self-center min-[600px]:justify-self-start min-[1000px]:justify-self-center  min-[600px]:ml-7 min-[1000px]:ml-0">
        <Benefits
          icon={<BoxIcon />}
          title="Free shipping"
          subtitle="you will love a great low prices"
        ></Benefits>
      </div>
      <div className="w-fit justify-self-center min-[600px]:justify-self-end min-[1000px]:justify-self-center min-[600px]:mr-7 min-[1000px]:mr-0">
        <Benefits
          icon={<BoxIcon />}
          title="Free shipping"
          subtitle="you will love a great low prices"
        ></Benefits>
      </div>
      <div className="w-fit justify-self-center min-[600px]:justify-self-start min-[1000px]:justify-self-center min-[600px]:ml-7 min-[1000px]:ml-0">
        <Benefits
          icon={<BoxIcon />}
          title="Free shipping"
          subtitle="you will love a great low prices"
        ></Benefits>
      </div>
    </div>
  );
}

//die utility fkt gehört eigentlich nicht hier hin -> aber erstmal nur prototyp!
const toFive = (n) => {
  const k = Math.max(1, Math.min(5, Math.floor(n))); // das macht dass k zwischen 0 und 5 ist zwangsweise!
  return Array(5)
    .fill(0)
    .map((_, i) => (i < k ? 1 : 0));
};
//
function Testimonial({
  rating,
  title,
  subtitle,
  name,
  picture,
}: {
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  name?: string;
  picture?: string;
}) {
  const reviewArr = toFive(rating);
  const profilePicture = picture ? picture : "/images/ProfilePicDefault.svg";

  return (
    <div className="p-gap-11 border border-gray-200">
      <div className="flex space-x-1 items-center mb-gap-11">
        {reviewArr.map((review, index) => (
          <RewievStar variant={review ? "fill" : "outline"} key={index} />
        ))}
      </div>
      <div className="flex flex-col space-y-gap-9">
        <p className="font-sm-regular text-gray-950 font-notoSerif">{title}</p>
        <p className="font-text-md-medium text-gray-700">{subtitle}</p>
        <div className="flex space-x-gap-7 items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src={profilePicture}
              alt=""
              fill
              className="object-cover"
            ></Image>
          </div>
          <p className="font-text-lg-medium font-notoSerif text-gray-950">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  //hier aus db die testimonials nehmen. Oder einfach etwas faken!
  return (
    <>
      <div className="flex flex-col space-y-gap-13 w-full">
        <SectionHeaderContainer>Testimonials</SectionHeaderContainer>
        <div className="flex flex-col space-y-gap-9">
          <Testimonial
            rating={2}
            title="“Truly Amazing with Diamond Ring”"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            picture="/images/ProfilePicTest.svg"
            name="Cameron Williuamson"
          />
          <Testimonial
            rating={2}
            title="“Truly Amazing with Diamond Ring”"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            picture="/images/ProfilePicTest.svg"
            name="Cameron Williuamson"
          />
        </div>
        <ArrowLeftRight />
      </div>
    </>
  );
}

function TestimonialImage() {
  return (
    <div className="relative aspect-[343/450] w-full sm:aspect-[634/700] min-[700px]:aspect-[340/250]">
      <Image
        src={"/images/TestimonialImg.jpg"}
        alt=""
        fill //hier fill -> display absolut
        className="object-[50%_50%] object-cover"
      />
      <div className="bg-white absolute bottom-gap-9 left-gap-9 right-gap-9">
        <Testimonial
          rating={2}
          title="“It’s Unbelievable, I Really Like it”"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          picture="/images/ProfilePicTest.svg"
          name="Cameron Williuamson"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeaderShell>
        <Header />
      </HeaderShell>
      {/*Her4o section  */}
      <section id="hero">
        <div className="relative aspect-[375/725] sm:aspect-[1440/1024] min-[600px]:aspect-[375/300] w-full flex justify-center items-center">
          <Image
            src={"/images/Hero.png"}
            alt=""
            fill //hier fill -> display absolut
            className="object-[0%_50%] min-[600px]:object-[50%_50%] object-cover -z-10"
          />
          <div className="flex flex-col items-center p-7">
            <p className="uppercase text-gray-100 font-text-lg-medium text-center mb-gap-5">
              EXPRESS YOUR UNIQUE STYLE
            </p>
            <p className="font-2xl-regular font-notoSerif text-center text-white mb-[48px]">
              Discover Timeless Elegance
            </p>
            <GlareHover
              height=""
              width=""
              borderRadius="0"
              background=""
              className="w-fit"
            >
              <Button variant={"fill"} size={"xl"}>
                SHOP NOW
              </Button>
            </GlareHover>
          </div>
        </div>
      </section>

      {/* SHop by category section */}
      <section id="category">
        <HomePageContainer>
          <SectionHeaderContainer action={<ArrowLeftRight />}>
            Shop By Category
          </SectionHeaderContainer>
          <Categorys />
        </HomePageContainer>
      </section>

      {/* latest collection Section */}
      <section id="lates collection">
        <HomePageContainer>
          <SectionHeaderContainer>Latest Collaection</SectionHeaderContainer>
          <UlScrollableX spacing="space-x-gap-9" className="justify-between">
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <ProductItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <ProductItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <ProductItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </li>
            <li className="flex-1 min-w-[313px] max-w-[360px]">
              <ProductItem
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
              <ProductItem
                title="Rose gold diamon earrings"
                image="/images/earrings.png"
                price={300}
                priceNoDiscount={400}
              />
            </div>
          </div>
        </HomePageContainer>
      </section>

      {/* Benefits section */}
      <section id="leistung">
        <HomePageContainer
          className="bg-black"
          spacing="py-[64px] px-gap-9 sm:py-[80px] sm:px-[70px]"
        >
          <BenefitsSection />
        </HomePageContainer>
      </section>

      {/* testimonaial section */}
      {/* den teil in onenote machen: Hier gut gemacht, wie shrinkt und steigt. Auch mit den custom comp zeigen! */}
      <section id="testimonial">
        <HomePageContainer spacing="pt-[64px] px-gap-9 py-gap-13 sm:pt-[160px] sm:pb-[80px] sm:px-[70px]">
          <div className="flex flex-col gap-gap-13 items-center sm:flex-row justify-between">
            <div className="w-full sm:w-1/2 flex-1">
              <Testimonials />
            </div>
            <div className="w-full sm:w-1/2 sm:max-w-[700px]">
              <TestimonialImage />
            </div>
          </div>
        </HomePageContainer>
      </section>

      {/* get inspired section */}
      <section id="get insppred">
        <HomePageContainer>
          <SectionHeaderContainer>Get Inspired</SectionHeaderContainer>
          <UlScrollableX spacing="space-x-gap-9" className="justify-between">
            <li className="flex-1 min-w-[313px]">
              <div className="relative aspect-[1/1]">
                <Image
                  src={"/images/inpired-bild.jpg"}
                  alt=""
                  fill
                  className="object-[50%_50%] object-cover"
                />
              </div>
            </li>
            <li className="flex-1 min-w-[313px]">
              <div className="relative aspect-[1/1]">
                <Image
                  src={"/images/inpired-bild.jpg"}
                  alt=""
                  fill
                  className="object-[50%_50%] object-cover"
                />
              </div>
            </li>
            <li className="flex-1 min-w-[313px]">
              <div className="relative aspect-[1/1]">
                <Image
                  src={"/images/inpired-bild.jpg"}
                  alt=""
                  fill
                  className="object-[50%_50%] object-cover"
                />
              </div>
            </li>
            <li className="flex-1 min-w-[313px]">
              <div className="relative aspect-[1/1]">
                <Image
                  src={"/images/inpired-bild.jpg"}
                  alt=""
                  fill
                  className="object-[50%_50%] object-cover"
                />
              </div>
            </li>
          </UlScrollableX>
        </HomePageContainer>
      </section>
    </>
  );
}
