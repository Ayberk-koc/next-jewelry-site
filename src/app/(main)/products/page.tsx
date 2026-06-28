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
import z from "zod";

type Item = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceNoDiscount: number;
  category: string;
  size: string;
};

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

//theoretisch könnte das direkt aus der db nehmen! Dann ist alles perfekt automatisiert!!!!!
const CATEGORIES = ["Rings", "Necklaces", "Bracelets", "Earrings"] as const;
const SIZES = ["4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
const minFilterPrice = 0;
const maxFilterPrice = 500;

const querySchema = z.object({
  categories: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (!val) return [];
      if (Array.isArray(val)) {
        return val.filter((elem) =>
          (CATEGORIES as readonly string[]).includes(elem)
        );
      } else {
        val
          .split(",")
          .filter((elem) => (CATEGORIES as readonly string[]).includes(elem));
      }
    }),

  sizes: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((val) => {
      if (!val) return [];
      if (Array.isArray(val)) {
        return val.filter((elem) =>
          (SIZES as readonly string[]).includes(elem)
        );
      } else {
        val
          .split(",")
          .filter((elem) => (SIZES as readonly string[]).includes(elem));
      }
    }),

  priceMin: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((v) => {
      const value = Array.isArray(v) ? v[0] : v;
      const n = Number(value);
      return Number.isNaN(n) ? undefined : Math.max(n, minFilterPrice);
    }),

  priceMax: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((v) => {
      const value = Array.isArray(v) ? v[0] : v;
      const n = Number(value);
      return Number.isNaN(n) ? undefined : Math.min(n, maxFilterPrice);
    }),
});
//type QuerySchemaValuesType = z.infer<typeof querySchema>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  //das muss ich aus der db nehmen später
  const itemsTest: Item[] = [
    {
      id: 1,
      title: "Rose gold diamon earrings",
      price: 340,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Rings",
      size: "5",
    },
    {
      id: 2,
      title: "Rose gold diamon earrings",
      price: 50,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Necklaces",
      size: "3",
    },
    {
      id: 3,
      title: "Rose gold diamon earrings",
      price: 3,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "6",
    },
    {
      id: 4,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "8",
    },
    {
      id: 5,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "5",
    },
    {
      id: 6,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "2",
    },
    {
      id: 7,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Rings",
      size: "5",
    },
    {
      id: 8,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "4",
    },
    {
      id: 9,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Bracelets",
      size: "5",
    },
    {
      id: 10,
      title: "Rose gold diamon earrings",
      price: 300,
      priceNoDiscount: 340,
      image: "/images/earrings.png",
      category: "Earrings",
      size: "3",
    },
  ];

  const queryParams = await searchParams;
  const result = querySchema.safeParse(queryParams);

  const categories = result.data?.categories || [];
  const sizes = result.data?.sizes || [];
  const priceMin = result.data?.priceMin || minFilterPrice;
  const priceMax = result.data?.priceMax || maxFilterPrice;

  const filteredItems = itemsTest.filter((elem) => {
    let shouldReturn = true;
    if (categories?.includes(elem.category)) {
      shouldReturn = false;
    }
    if (sizes?.includes(elem.size)) {
      shouldReturn = false;
    }
    if (elem.price < Number(priceMin) || elem.price > Number(priceMax)) {
      shouldReturn = false;
    }
    return shouldReturn;
  });

  return (
    <MainContainer className="flex flex-col items-center gap-y-gap-13 sm:gap-y-[48px]">
      <FilterBar />
      <ProductsListing items={filteredItems} />
      <Pagenation />
    </MainContainer>
  );
}
