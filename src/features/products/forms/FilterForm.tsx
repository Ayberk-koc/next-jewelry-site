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
import { ComponentProps, useEffect, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  querySchema,
  minFilterPrice,
  maxFilterPrice,
  CATEGORIES,
  SIZES,
} from "@/features/products/utils/queryUtils";

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
  { id: "13", label: "5", amount: 150 },
  { id: "14", label: "6", amount: 120 },
];

export default function FilterForm({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const params = new URLSearchParams(searchParams.toString());
  const result = querySchema.safeParse(Object.fromEntries(params));

  const initCategories = result.data?.categories ?? [];

  const initSizes = result.data?.sizes ?? [];

  const maxPrice = Math.min(
    maxFilterPrice,
    result.data?.priceMax || maxFilterPrice,
  );

  const minPrice = Math.max(
    minFilterPrice,
    result.data?.priceMin || minFilterPrice,
  );

  const filterForm = useForm<FilterFormValuesType>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      categories: [],
      priceRange: [minFilterPrice, maxFilterPrice],
      sizes: [],
    },
  });

  useEffect(() => {
    filterForm.setValue("categories", initCategories);
    filterForm.setValue("priceRange", [minPrice, maxPrice]);
    filterForm.setValue("sizes", initSizes);
  }, []);

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
      params.set("categories", categoriesValue.join(",")); //DAS NOCH TYPESAFE MACHEN!!! Auch bei diesem SortBY-Ding! Also das soll nur werte nehen dürfen, die in dem schema sind!
    } else {
      params.delete("categories");
    }

    if (sizesValue.length > 0) {
      params.set("sizes", sizesValue.join(","));
    } else {
      params.delete("sizes");
    }

    if (priceRangeValue[0] > minFilterPrice) {
      params.set("priceMin", priceRangeValue[0].toString());
    } else {
      params.delete("priceMin");
    }

    if (priceRangeValue[1] < maxFilterPrice) {
      params.set("priceMax", priceRangeValue[1].toString());
    } else {
      params.delete("priceMax");
    }

    router.replace(`?${params.toString()}`);

    startTransition(() => {
      handleClose();
    });
  }

  function resetFilter() {
    filterForm.reset();
  }

  const defaultAccordionValues = [
    initCategories.length > 0 ? "Category" : "",
    initSizes.length > 0 ? "Size" : "",
    minPrice > minFilterPrice || maxPrice < maxFilterPrice ? "PriceRange" : "",
  ];

  return (
    <div className="h-full flex flex-col gap-gap-9 justify-between">
      <ScrollArea className="overflow-hidden flex-1 min-h-0">
        <Accordion
          type="multiple"
          defaultValue={defaultAccordionValues} //hier kann ich die werte der AccordionItem's rein machen
          className="flex flex-col"
        >
          <AccordionItem value="Category" className="border-t border-gray-200">
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
                    // defaultValue={[minFilterPrice, maxFilterPrice]}
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

      <div className="flex gap-gap-9">
        <Button
          size={"lg"}
          variant={"outline"}
          className="flex-1"
          onClick={resetFilter}
        >
          Reset
        </Button>

        <Button
          size={"lg"}
          variant={"fill"}
          className="flex-1"
          onClick={applyFilter}
          disabled={isPending}
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
}
