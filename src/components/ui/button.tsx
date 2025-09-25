import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const default_size = "md";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        fill: "bg-gray-950 text-white disabled:bg-gray-200 disabled:text-gray-400",
        outline:
          "border border-gray-950 text-gray-950 disabled:border-gray-200 disabled:text-gray-300",
        ghost: "text-gray-950 disabled:text-gray-300",
      },
      size: {
        xs2: "gap-gap-3 py-gap-3 px-gap-5 font-text-xs-regular",
        xs: "gap-gap-3 py-gap-4 px-gap-5 font-text-xs-regular",
        sm: "gap-gap-3 py-gap-4 px-gap-7 font-text-sm-regular",
        md: "gap-gap-5 py-gap-6 px-gap-9 font-text-sm-regular",
        lg: "gap-gap-5 py-gap-7 px-gap-11 font-text-md-regular",
        xl: "gap-gap-6 py-gap-9 px-gap-13 font-text-md-regular",
        xl2: "gap-gap-7 py-[18px] px-gap-12 font-text-lg-regular",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: default_size,
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  if (!size) {
    size = default_size;
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="mb-[3px]">{children}</span>
    </Comp>
  );
}

function ButtonWithIconWrapper({
  children,
  spacing = "space-x-gap-5",
}: {
  children: React.ReactNode;
  spacing?: string;
}) {
  return <span className={`flex ${spacing} items-center`}>{children}</span>;
}

export { Button, buttonVariants, ButtonWithIconWrapper };
