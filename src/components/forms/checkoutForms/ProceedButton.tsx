"use client";

import { Path } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { Button, buttonVariants } from "../../ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  useCheckoutFormContext,
  CheckoutFormValuesType,
} from "@/components/contexts/CheckoutFormContext";

type ProceedButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    fields?: Path<CheckoutFormValuesType>;
  };

export default function ProceedButton({
  href,
  fields,
  variant,
  size,
  className,
  children,
  ...props
}: ProceedButtonProps) {
  const totalForm = useCheckoutFormContext();
  const router = useRouter();

  async function handleProceed() {
    const ok = await totalForm.trigger(fields);

    console.log("Form values:", totalForm.getValues());
    //wenn fields undefined, dann  soll canNavigate true sein!
    const canNavigate = fields ? ok : true;

    if (canNavigate) {
      router.push(href);
    }
  }

  const value = totalForm.getValues();
  console.log(value);

  return (
    <Button
      size={size}
      variant={variant}
      className={cn("", className)}
      onClick={handleProceed}
      {...props}
    >
      {children}
    </Button>
  );
}
