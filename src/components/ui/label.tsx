"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva("text-dark-500 data-[disabled=true]:text-gray-500", {
  variants: {
    scale: {
      xs: "font-text-xs-regular",
      sm: "font-text-sm-regular",
      md: "font-text-sm-regular",
      lg: "font-text-sm-regular",
      xl2: "font-text-md-regular",
    },
  },
  defaultVariants: {
    scale: "md",
  },
});

function Label({
  className,
  scale,
  disabled = false,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & { disabled?: boolean }) {
  const labelRef = React.useRef<HTMLLabelElement>(null);

  React.useEffect(() => {
    const elem = labelRef.current;
    if (elem) {
      elem.setAttribute("data-disabled", disabled ? "true" : "false");
    }
  }, [disabled]);

  return (
    <LabelPrimitive.Root
      ref={labelRef}
      data-slot="label"
      className={cn(labelVariants({ className, scale }))}
      {...props}
    />
  );
}

export { Label };
