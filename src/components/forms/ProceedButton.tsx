"use client";

import { Path, useFormContext } from "react-hook-form";
import { FinalCheckoutFormValuesType } from "@/components/layoutComponents/checkOutProcessFormProviderLayoutSchemas";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { Button, buttonVariants } from "../ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export default function ProceedButton({
  href,
  fields,
  variant,
  size,
  className,
  children,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    fields?:
      | Path<FinalCheckoutFormValuesType>
      | Path<FinalCheckoutFormValuesType>[];
  }) {
  const form = useFormContext<FinalCheckoutFormValuesType>();
  const router = useRouter();

  async function handleProceed() {
    const ok = await form.trigger(fields);

    if (ok) {
      router.push(href);
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={cn("", className)}
      onClick={handleProceed}
      disabled={true} //muss dass über context handhaben! so kann ich alle component die es brauchen geben!
      {...props}
    >
      {children}
    </Button>
  );
}
