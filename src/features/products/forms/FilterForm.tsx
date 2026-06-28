"use client";

//mache das noch scrollbar!!

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComponentProps } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function FilterCategoryElement({
  label,
  amount,
  ...props
}: ComponentProps<"input"> & {
  label: string;
  amount?: number;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-gap-5 items-center">
      <input
        className="h-[16px] w-[16px] border-gray-200 text-indigo-200 focus:ring-indigo-200 cursor-pointer"
        {...props}
      />
      <p className="font-text-md-medium text-gray-950">{label}</p>
      {amount && (
        <p className="font-text-md-medium text-gray-500">({amount})</p>
      )}
    </div>
  );
}

const filterFormSchema = z.object({
  categories: z.array(z.string()),
  priceRange: z.tuple([z.number().int(), z.number().int()]),
  sizes: z.array(z.string()),
});
type FilterFormValuesType = z.infer<typeof filterFormSchema>;

//theoretisch könnte das direkt aus der db nehmen! Dann ist alles perfekt automatisiert!!!!!
const CATEGORIES = ["Rings", "Necklaces", "Bracelets", "Earrings"] as const;
const SIZES = ["4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
const minFilterPrice = 0;
const maxFilterPrice = 500;

type CategoryElement = {
  id: (typeof CATEGORIES)[number];
  label: (typeof CATEGORIES)[number];
  amount: number;
};
const categories: CategoryElement[] = [
  { id: "Rings", label: "Rings", amount: 120 },
  { id: "Necklaces", label: "Necklaces", amount: 100 },
  { id: "Bracelets", label: "Bracelets", amount: 124 },
  { id: "Earrings", label: "Earrings", amount: 123 },
];

type SizeElement = {
  id: (typeof SIZES)[number];
  label: (typeof SIZES)[number];
  amount: number;
};
const sizes: SizeElement[] = [
  { id: "4", label: "4", amount: 120 },
  { id: "5", label: "5", amount: 150 },
  { id: "6", label: "6", amount: 120 },
  { id: "7", label: "7", amount: 120 },
  { id: "8", label: "8", amount: 120 },
  { id: "9", label: "9", amount: 120 },
  { id: "10", label: "10", amount: 120 },
  { id: "11", label: "11", amount: 120 },
  { id: "12", label: "12", amount: 120 },
];

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

export default function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const result = querySchema.safeParse(params);

  const initCategories = result.data?.categories ?? [];
  const initSizes = result.data?.sizes ?? [];
  const maxPrice = Math.min(
    maxFilterPrice,
    result.data?.priceMax || maxFilterPrice
  );
  const minPrice = Math.max(
    minFilterPrice,
    result.data?.priceMin || minFilterPrice
  );

  const filterForm = useForm<FilterFormValuesType>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      categories: initCategories,
      priceRange: [minPrice, maxPrice],
      sizes: initSizes,
    },
  });

  const {
    categories: categoriesValue,
    priceRange: priceRangeValue,
    sizes: sizesValue,
  } = filterForm.watch();

  function handleCategoryValueChange(val: string) {
    let newVals: typeof categoriesValue;
    if (categoriesValue.includes(val)) {
      newVals = categoriesValue.filter((elem) => elem != val);
    } else {
      newVals = [...categoriesValue, val];
    }
    filterForm.setValue("categories", newVals);
  }

  function handleSizeValueChange(val: string) {
    let newVals: typeof sizesValue;
    if (sizesValue.includes(val)) {
      newVals = sizesValue.filter((elem) => elem != val);
    } else {
      newVals = [...sizesValue, val];
    }
    filterForm.setValue("sizes", newVals);
  }

  function handlePriceRandeValueChange([min, max]: number[]) {
    filterForm.setValue("priceRange", [min, max]);
  }

  function applyFilter() {
    if (categoriesValue.length > 0) {
      params.set("categories", categoriesValue.join(",")); //DAS NOCH TYPESAFE MACHEN!!!
    } else {
      params.delete("categories");
    }

    if (sizesValue.length > 0) {
      params.set("sizes", sizesValue.join(","));
    } else {
      params.delete("sizes");
    }

    params.set("priceMin", priceRangeValue[0].toString());
    params.set("priceMax", priceRangeValue[1].toString());

    router.replace(`?${params.toString()}`);
  }

  const defaultAccordionValues = [
    initCategories.length > 0 ? "Category" : "",
    initSizes.length > 0 ? "Size" : "",
    minPrice > minFilterPrice || maxPrice < maxFilterPrice ? "PriceRange" : "",
  ];

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <Accordion
            type="multiple"
            defaultValue={defaultAccordionValues} //hier kann ich die werte der AccordionItem's rein machen
            className="flex flex-col"
          >
            <AccordionItem
              value="Category"
              className="border-t bprder-gray-200"
            >
              <AccordionTrigger className="py-gap-9">
                <p className="font-text-xl-medium text-gray-950">Categories</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-gap-9">
                {/* EIN Field für die Gruppe */}
                {categories.map((elem) => (
                  <FilterCategoryElement
                    key={elem.id}
                    type="checkbox"
                    label={elem.label}
                    amount={elem.amount}
                    checked={categoriesValue?.includes(elem.label) ?? false}
                    onChange={() => handleCategoryValueChange(elem.label)}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="PriceRange" className="border-gray-200">
              <AccordionTrigger className="py-gap-9">
                <p className="font-text-xl-medium text-gray-950">
                  Filter By Price
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-y-gap-9">
                  <p className="font-text-md-medium text-gray-950">
                    Price: {priceRangeValue[0]}€ - {priceRangeValue[1]}€
                  </p>
                  <div className="px-1 cursor-pointer">
                    <Slider
                      defaultValue={[minFilterPrice, maxFilterPrice]}
                      max={maxFilterPrice}
                      min={minFilterPrice}
                      step={5}
                      value={[...priceRangeValue]}
                      onValueChange={([min, max]) =>
                        handlePriceRandeValueChange([min, max])
                      }
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Size" className="border-gray-200">
              <AccordionTrigger className="py-gap-9">
                <p className="font-text-xl-medium text-gray-950">Sizes</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-gap-9">
                {sizes.map((elem) => (
                  <FilterCategoryElement
                    key={elem.id}
                    type="checkbox"
                    label={elem.label}
                    amount={elem.amount}
                    checked={sizesValue?.includes(elem.label) ?? false}
                    onChange={() => handleSizeValueChange(elem.label)}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </div>

      <div className="flex gap-gap-9 mt-auto">
        <Button size={"lg"} variant={"outline"} className="flex-1">
          Reset
        </Button>
        <Button
          size={"lg"}
          variant={"fill"}
          className="flex-1"
          onClick={applyFilter}
        >
          Apply Filter
        </Button>
      </div>
    </>
  );
}
