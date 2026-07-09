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
import { ReactNode, useOptimistic, useState, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  querySchema,
  SORTBYOPTIONS,
  formatSortByCategory,
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
  const [open, setOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const params = new URLSearchParams(searchParams.toString());
  const result = querySchema.safeParse(Object.fromEntries(params));

  const sortingCategories = SORTBYOPTIONS;

  const sortValue = result.data?.sort || "newest";

  const [optimisticSortValue, setOptimisticSortValue] = useOptimistic(
    sortValue,
    (actualState, argument) => argument as typeof sortValue,
  );

  function applySort(val: string) {
    if (sortValue === val) {
      setOpen(false);
      return;
    }

    params.set("sort", val);

    router.replace(`?${params.toString()}`);

    startTransition(() => {
      setOptimisticSortValue(val);
      setOpen(false);
    });
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild disabled={isPending}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)] rounded-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
        <DropdownMenuLabel className="font-text-md-regular">
          {title}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={optimisticSortValue}
          onValueChange={applySort}
        >
          {sortingCategories.map((category) => (
            <DropdownMenuRadioItem
              className="font-text-md-regular cursor-pointer data-[highlighted]:font-text-md-bold"
              value={category}
              key={category}
              onSelect={(e) => e.preventDefault()}
              disabled={isPending}
            >
              {formatSortByCategory(category)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
