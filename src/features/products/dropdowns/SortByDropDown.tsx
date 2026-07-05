"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  querySchema,
  SORTBYOPTIONS,
} from "@/features/products/utils/queryUtils";

export default function SortByDropDown({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const result = querySchema.safeParse(Object.fromEntries(params));

  const sortingCategories = SORTBYOPTIONS;

  const sortValue = result.data?.sort || "newest";

  function applySort(val: string) {
    params.set("sort", val);

    router.replace(`?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)] rounded-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
        <DropdownMenuLabel className="font-text-md-regular">
          {title}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortValue} onValueChange={applySort}>
          {sortingCategories.map((category) => (
            <DropdownMenuRadioItem
              className="font-text-md-regular cursor-pointer data-[highlighted]:font-text-md-bold"
              value={category}
              key={category}
            >
              {category}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
