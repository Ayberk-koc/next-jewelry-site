"use client";

import { Path } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";
import { Button, buttonVariants } from "../ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTransitionContext } from "../contexts/TransitionContext";
import {
  useFormLayoutContext,
  PickAddressFormValues,
  PickPaymentFormValues,
} from "@/app/(checkoutstructure)/checkout/layout";

type ProceedButtonProps<T extends "pickAddressForm" | "pickPaymentForm"> =
  ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      href: string;
      formType: T;
      fields?: T extends "pickPaymentForm"
        ? Path<PickPaymentFormValues> | Path<PickPaymentFormValues>[]
        : Path<PickAddressFormValues> | Path<PickAddressFormValues>[];
    };

export default function ProceedButton<
  T extends "pickAddressForm" | "pickPaymentForm"
>({
  href,
  fields,
  variant,
  size,
  className,
  formType,
  children,
  ...props
}: ProceedButtonProps<T>) {
  const { pickAddressForm, pickPaymentMethodForm } = useFormLayoutContext();
  const router = useRouter();
  const { isTransitioning, startTransition } = useTransitionContext();

  async function handleProceed() {
    const formToUse =
      formType === "pickAddressForm" ? pickAddressForm : pickPaymentMethodForm;

    const ok = await formToUse.trigger(fields as never);
    console.log("Fields:", fields);
    console.log("Form values:", formToUse.getValues());
    //wenn fields undefined, dann  soll canNavigate true sein!
    const canNavigate = fields ? ok : true;

    if (canNavigate) {
      startTransition(() => {
        router.push(href);
      });
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={cn("", className)}
      onClick={handleProceed}
      disabled={isTransitioning}
      {...props}
    >
      {children}
    </Button>
  );
}
