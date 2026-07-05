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
import {
  querySchema,
  minFilterPrice,
  maxFilterPrice,
} from "@/features/products/utils/queryUtils";

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

//das mache später. Wenn ich das ganze js mache! Das ist zum sortieren! Mache dass man mit searchparams sortiert!
// const sortByCategories = ["Popularity", "Price"] as const;
// type SortValue = (typeof sortByCategories)[number];
function FilterBar({ sortBy }: { sortBy: string }) {
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
        <SortByDropDown title="Sort By">
          <Button size={"lg"} variant={"outline"} className="group">
            <ButtonWithIconWrapper>
              <span className="uppercase">sort by {sortBy}</span>
              <DownArrow />
            </ButtonWithIconWrapper>
          </Button>
        </SortByDropDown>
      </div>
    </div>
  );
}

function ProductsListing({ items }: { items: Item[] }) {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-gap-9 sm:gap-y-gap-11 ">
      {/* Items werden automatisch angeordnet */}
      {items.map((elem) => (
        <ProductItem
          key={elem.id}
          title={elem.title}
          image={elem.image}
          price={elem.price}
          priceNoDiscount={elem.priceNoDiscount}
        />
      ))}
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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  //das muss ich aus der db nehmen später
  const itemsTest: Item[] = [
    {
      id: 1,
      title: "Ring",
      price: 340,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Rings",
      size: "5",
      soldLastWeek: 10,
    },
    {
      id: 2,
      title: "Necklaces",
      price: 50,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Necklaces",
      size: "3",
      soldLastWeek: 14,
    },
    {
      id: 3,
      title: "Bracelets",
      price: 3,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "6",
      soldLastWeek: 17,
    },
    {
      id: 4,
      title: "Earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "8",
    },
    {
      id: 5,
      title: "Earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "5",
    },
    {
      id: 6,
      title: "Bracelets",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "2",
    },
    {
      id: 7,
      title: "Rings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Rings",
      size: "5",
    },
    {
      id: 8,
      title: "Bracelets",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "4",
    },
    {
      id: 9,
      title: "Bracelets",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "5",
    },
    {
      id: 10,
      title: "Earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "3",
    },
  ];

  const queryParams = await searchParams; //hier sollte ich streaming einstellen! Also mit Suspense! Das blockiert ja das ganze laden der Seite!
  const result = querySchema.safeParse(queryParams);

  const categories = result.data?.categories || [];
  const sizes = result.data?.sizes || [];
  const priceMin = result.data?.priceMin || minFilterPrice;
  const priceMax = result.data?.priceMax || maxFilterPrice;
  const sortBy = result.data?.sort || "newest";

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
      <ProductsListing items={sortedItems} />
      <Pagenation />
    </MainContainer>
  );
}
