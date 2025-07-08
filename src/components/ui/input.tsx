"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

//die states sind keine extra variants! States musst du mit data-* styles handhaben.
//die variants sind für varianten! D.h dinge die sich in dem lifetime der component nicht ändern!
//d.h statische dinge so to say!
const inputVariants = cva(
  "flex items-center border outline-none font-text-xs-regular border-gray-200 bg-white text-dark-500 focus:border-primary-500 disabled:text-gray-500 disabled:bg-none data-[isInvalid=true]:border-error-500",
  {
    variants: {
      scale: {
        xs: "gap-gap-5 px-gap-7 py-gap-4 font-text-xs-regular",
        sm: "px-gap-7 py-gap-4 gap-gap-5 font-text-sm-regular",
        md: "px-gap-9 py-gap-5 gap-gap-5 font-text-sm-regular",
        lg: "px-gap-9 py-gap-6 gap-gap-5 font-text-sm-regular",
        xl2: "px-gap-9 py-gap-7 gap-gap-5 font-text-md-regular",
      },
    },
    defaultVariants: {
      scale: "md",
    },
  }
);

function Input({
  className,
  scale, //beim typisieren muss ich aufpassen, hier keine propnamen zu nehmen, die is im default "input" schon gibt!
  type,
  isError = false,
  ...props
}: React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & { isError?: boolean }) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const element = inputRef.current;
    if (element) {
      element.setAttribute("data-isInvalid", isError ? "true" : "false");
    }
  }, [isError]);

  return (
    <input
      type={type}
      ref={inputRef}
      data-slot="input"
      className={cn(inputVariants({ className, scale }))}
      {...props}
    />
  );
}

export { Input };
