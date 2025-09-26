import ProductItem from "@/components/ProductItem";
import DropDownShell from "@/components/smallComponents/DropDownShell";
import { DownArrow } from "@/components/svg-icons/ArrowIcons";
import {
  FilterIcon,
  FilterIconAlt,
  GridIcon,
} from "@/components/svg-icons/FilterIcons";
import { Button, ButtonWithIconWrapper } from "@/components/ui/button";
import { ReactNode } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseSheetIcon } from "@/components/svg-icons/CloseIcons";

function MainContainer({ children }: { children: ReactNode }) {
  return (
    <section className="py-gap-13 px-gap-9 sm:px-[70px] sm:pb-[80px] flex flex-col items-center space-y-gap-13 sm:space-y-[48px] max-w-[1440px] mx-auto">
      {children}
    </section>
  );
}

// function FilterSideSheet({ children }: { children: ReactNode }) {
//   return (
//     <SheetShell>
//       <SheetShell.Trigger>{children}</SheetShell.Trigger>
//       <SheetShell.Content title="Filter">
//         <p>Hier content von modal</p>
//       </SheetShell.Content>
//     </SheetShell>
//   );
// }

// <SheetClose>
//   <CloseSheetIcon />
// </SheetClose>

function FilterSideSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Filter</SheetTitle>
        </SheetHeader>
        <div className="p-gap-9 sm:p-gap-11 flex flex-col space-y-gap-11">
          <div className="pb-gap-11 flex justify-between items-center space-x-gap-3 border-b border-gray-200">
            <p className="font-sm-regular font-notoSerif text-gray-950 ">
              Filter
            </p>
            <SheetClose>
              <CloseSheetIcon />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

//das mache später. Wenn ich das ganze js mache! Das ist zum sortieren! Mache dass man mit searchparams sortiert!
// const sortByCategories = ["Popularity", "Price"] as const;
// type SortValue = (typeof sortByCategories)[number];

function FilterBar() {
  return (
    <div className="w-full flex flex-col items-start gap-gap-9 justify-between min-[710px]:flex-row min-[710px]:items-center">
      <div className="flex items-center space-x-gap-9">
        <GridIcon></GridIcon>
        <FilterIcon></FilterIcon>
        <p className="font-text-md-medium text-gray-950">
          Showing 1–10 of 60 results
        </p>
      </div>
      <div className="flex flex-col min-[710px]:flex-row gap-gap-9">
        <FilterSideSheet>
          <Button size={"lg"} variant={"fill"} className="w-fit">
            <ButtonWithIconWrapper>
              <FilterIconAlt />
              <span>FILTER</span>
            </ButtonWithIconWrapper>
          </Button>
        </FilterSideSheet>

        {/* Hier ist state drinne! Parent muss ja reagieren auf #+nderung, damit es richtig sortieren kann! */}
        <DropDownShell title="Sort By" categories={["Popularity", "Price"]}>
          <Button size={"lg"} variant={"outline"} className="group">
            <ButtonWithIconWrapper>
              <span>SORT BY POPULARITY</span>
              <DownArrow />
            </ButtonWithIconWrapper>
          </Button>
        </DropDownShell>
      </div>
    </div>
  );
}

function ProductsListing() {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-gap-9 gap-x-gap-9 sm:gap-y-gap-11 ">
      {/* Items werden automatisch angeordnet */}
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
      <ProductItem
        title="Rose gold diamon earrings"
        image="/images/earrings.png"
        price={300}
        priceNoDiscount={400}
      />
    </div>
  );
}

function Pagenation() {
  return (
    <div className="flex gap-gap-13 items-center flex-wrap max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
      <Button variant={"outline"} size={"xl"} className="font-text-md-medium">
        PREV
      </Button>
      <div className="flex items-center gap-gap-9 max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
        <Button
          variant={"fill"}
          size={"xl"}
          className="font-text-md-medium w-[59px]"
        >
          01
        </Button>
        <Button
          variant={"outline"}
          size={"xl"}
          className="font-text-md-medium w-[59px]"
        >
          02
        </Button>
        <Button
          variant={"outline"}
          size={"xl"}
          className="font-text-md-medium w-[59px]"
        >
          03
        </Button>
      </div>
      <Button
        variant={"fill"}
        size={"xl"}
        className="font-text-md-medium border"
      >
        NEXT
      </Button>
    </div>
  );
}

export default function Products() {
  return (
    <>
      <MainContainer>
        <FilterBar />
        <ProductsListing />
        <Pagenation />
      </MainContainer>
    </>
  );
}
