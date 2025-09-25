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
import { ReactNode, useState } from "react";

export default function DropDownShell({
  children,
  title,
  categories,
}: {
  children: ReactNode;
  title: string;
  categories: readonly [string, ...string[]];
}) {
  const [sortValue, setSortValue] = useState<string>(categories[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)] rounded-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
        <DropdownMenuLabel className="font-text-md-regular">
          {title}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortValue} onValueChange={setSortValue}>
          {categories.map((category) => (
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
