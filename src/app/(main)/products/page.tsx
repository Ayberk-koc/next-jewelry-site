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
import {
  querySchema,
  minFilterPrice,
  maxFilterPrice,
  SORTBYOPTIONS,
  formatSortByCategory,
} from "@/features/products/utils/queryUtils";
//import Pagenation from "@/features/products/components/Pagination";
import { TESTITEMS } from "@/features/products/components/TestItems";
import ProductsListing from "@/features/products/components/ProductsListing";
import InfiniteScrollLoader from "@/features/products/components/InfiniteScroll";

function FilterBar({ sortBy }: { sortBy: (typeof SORTBYOPTIONS)[number] }) {
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
        <div className="w-[213px]">
          <SortByDropDown title="Sort By">
            <Button size={"lg"} variant={"outline"} className="group w-full">
              <ButtonWithIconWrapper>
                <span className="uppercase flex justify-between gap-x-[5px]">
                  <p>sort by</p> {formatSortByCategory(sortBy)}
                </span>
                <DownArrow />
              </ButtonWithIconWrapper>
            </Button>
          </SortByDropDown>
        </div>
      </div>
    </div>
  );
}

//btw: Gucke wie douglas die Produkte anbietet: https://www.douglas.de/de/c/parfum/herrenduefte/0102
// die haben nicht nur eine produktseite, sondern für eine Kategorie eine Seite. Das sieht professioneller aus!
// d.h deine Seite ist aktuell nur für eine Kategorie von Produkt! Das ist erstmal gut so. Du verkaufst im prinzip nur eine sache!
// zb stelle dir vor: Kategorie ist: Kerzen. Dann hast du sommerlicher Geruch, winterlicher Geruch etc.
// Oder Ohrringe. Dann hast du diese Form, und diese Form etc. Daran musst du ja noch diese Sache mit den Filter anpassen!!

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  //das hole später aus ner db!
  const itemsTest = TESTITEMS;

  const queryParams = await searchParams; //hier sollte ich streaming einstellen! Also mit Suspense! Das blockiert ja das ganze laden der Seite!
  const result = querySchema.safeParse(queryParams);

  const categories = result.data?.categories || [];
  const sizes = result.data?.sizes || [];
  const priceMin = result.data?.priceMin || minFilterPrice;
  const priceMax = result.data?.priceMax || maxFilterPrice;
  const sortBy = result.data?.sort || "newest";
  //const pageNr = result.data?.page || 1;

  const filteredItems = itemsTest.filter((elem) => {
    let shouldReturn = true;
    if (categories.length > 0 && !categories.includes(elem.category)) {
      shouldReturn = false;
    }
    if (sizes.length > 0 && !sizes.includes(elem.size)) {
      shouldReturn = false;
    }
    if (elem.price < Number(priceMin) || elem.price > Number(priceMax)) {
      shouldReturn = false;
    }
    return shouldReturn;
  });

  // //diese 10 heißt: Wie viele items lasse ich auf einer seite angezeigt. Das kann ich theoretisch auch mit state abfangen. Oder in den Query-params.
  // //das ist auch weg, weil ich ja infinite scroll einsetzten will!
  // const pageFilteredItems = filteredItems.filter(
  //   (elem, index) => index >= 10 * (pageNr - 1) && index < 10 * pageNr,
  // );

  //mache über die Query noch, dass gespeichert wird, wie viele grade bei viewing sind. Damit man wenn man zurück geht nicht wieder lange scrollen muss um dahin zu kommen, wo man war!

  const sortedItems = filteredItems.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      case "popular":
        return (b.soldLastWeek ?? 0) - (a.soldLastWeek ?? 0);
    }
  });

  return (
    <MainContainer className="flex flex-col items-center gap-y-gap-13 sm:gap-y-[48px]">
      <FilterBar sortBy={sortBy} />
      <div
        className="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-gap-9 sm:gap-y-gap-11"
        id="productsContainer"
      >
        <ProductsListing items={sortedItems.slice(0, 10)} />
      </div>
      <InfiniteScrollLoader />
      {/* <Pagenation />   // ist weg, da ich infinite-scroll einführen will!! Nehme als analoge Logik aber etwas aus der URL, das mir sagt, wie viele Elemente angezeigt werden sollen!*/}
    </MainContainer>
  );
}
