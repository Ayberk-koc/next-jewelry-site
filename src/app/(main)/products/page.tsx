"use client";
//mache das noch zur server component.

import ProductItem from "@/features/products/components/ProductItem";
import { DownArrow } from "@/components/svg-icons/ArrowIcons";
import {
  FilterIcon,
  FilterIconAlt,
  GridIcon,
} from "@/components/svg-icons/FilterIcons";
import { Button, ButtonWithIconWrapper } from "@/components/ui/button";
import { MainContainer } from "@/components/layout/containers/MainContainer";
import FilterSheet from "@/features/products/dialogs/FilterSheet";
import SortByDropDown from "@/features/products/dropdowns/SortByDropDown";

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
        <FilterSheet>
          <Button size={"lg"} variant={"fill"} className="w-fit">
            <ButtonWithIconWrapper>
              <FilterIconAlt />
              <span>FILTER</span>
            </ButtonWithIconWrapper>
          </Button>
        </FilterSheet>

        {/* Hier ist state drinne! Parent muss ja reagieren auf #+nderung, damit es richtig sortieren kann! */}
        <SortByDropDown title="Sort By" categories={["Popularity", "Price"]}>
          <Button size={"lg"} variant={"outline"} className="group">
            <ButtonWithIconWrapper>
              <span>SORT BY POPULARITY</span>
              <DownArrow />
            </ButtonWithIconWrapper>
          </Button>
        </SortByDropDown>
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
  //das auch über eine route erledigen. Also wenn page 2, soll das über search-params laufen damit keine client component
  //haben muss!
  return (
    <div className="flex gap-gap-13 items-center flex-wrap max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
      <Button
        variant={"outline"}
        size={"xl"}
        className="font-text-md-medium max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
      >
        PREV
      </Button>
      <div className="flex items-center gap-gap-9 max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
        <Button
          variant={"fill"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
        >
          01
        </Button>
        <Button
          variant={"outline"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
        >
          02
        </Button>
        <Button
          variant={"outline"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
        >
          03
        </Button>
      </div>
      <Button
        variant={"fill"}
        size={"xl"}
        className="font-text-md-medium border max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
      >
        NEXT
      </Button>
    </div>
  );
}

export default function Products() {
  return (
    <MainContainer className="flex flex-col items-center gap-y-gap-13 sm:gap-y-[48px]">
      <FilterBar />
      <ProductsListing />
      <Pagenation />
    </MainContainer>
  );
}
