import { ReactNode } from "react";
import z from "zod";
import {
  SmallArrowIconDown,
  SmallArrowIconUp,
} from "@/components/svg-icons/SmallArrowIcons";

const CATEGORIES = ["Rings", "Necklaces", "Bracelets", "Earrings"] as const;
const SIZES = [
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
] as const;
const minFilterPrice = 0;
const maxFilterPrice = 500;
const SORTBYOPTIONS = ["price-asc", "price-desc", "popular", "newest"] as const;

function formatSortByCategory(category: (typeof SORTBYOPTIONS)[number]) {
  let formattedCategory: ReactNode = category;
  if (category == "price-asc") {
    formattedCategory = (
      <div className="flex justify-between">
        <span>{"price"}</span>
        <SmallArrowIconUp className="self-end w-5 relative "></SmallArrowIconUp>
      </div>
    );
  } else if (category == "price-desc") {
    formattedCategory = (
      <div className="flex justify-between items-center">
        <span>{"price"}</span>
        <SmallArrowIconDown className="self-end w-5 relative "></SmallArrowIconDown>
      </div>
    );
  }
  return formattedCategory;
}

const querySchema = z.object({
  categories: z
    .string()
    .optional()
    .transform((val) => {
      if (!val) return [];

      const valArr = val
        .split(",")
        .filter((elem) => (CATEGORIES as readonly string[]).includes(elem));
      return valArr;
    }),

  sizes: z
    .string()
    .optional()
    .transform((val) => {
      if (!val) return [];

      const valArr = val
        .split(",")
        .filter((elem) => (SIZES as readonly string[]).includes(elem));
      return valArr;
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

  sort: z.enum(SORTBYOPTIONS).optional().default("newest"),

  page: z.coerce
    .number()
    .default(1)
    .transform((v) => {
      if (v < 1) return 1;
      return v;
    }),
});

export {
  querySchema,
  CATEGORIES,
  SIZES,
  minFilterPrice,
  maxFilterPrice,
  SORTBYOPTIONS,
  formatSortByCategory,
};
