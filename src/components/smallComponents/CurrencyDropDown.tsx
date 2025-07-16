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
import { useState } from "react";

export default function CurrencyDropDown() {
  const [currency, setCurrency] = useState("EUR");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center header-list-element gap-gap-3">
          <span className="font-text-md-medium text-gray-950">EUR €</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 10L12 14L17 10"
              stroke="#0C0A09"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        <DropdownMenuLabel className="font-text-md-regular">
          Select Currency
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currency} onValueChange={setCurrency}>
          <DropdownMenuRadioItem className="font-text-md-regular" value="EUR">
            EUR
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="font-text-md-regular" value="USD">
            USD
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
