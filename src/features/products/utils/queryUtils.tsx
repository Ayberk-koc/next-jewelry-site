import z from "zod";

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
});

export {
  querySchema,
  CATEGORIES,
  SIZES,
  minFilterPrice,
  maxFilterPrice,
  SORTBYOPTIONS,
};
