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
  TotalFormValuesType,
} from "@/app/(checkoutstructure)/checkout/layout";

type ProceedButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    fields?: Path<TotalFormValuesType>;
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
  const totalForm = useFormLayoutContext();
  const router = useRouter();
  const { isTransitioning, startTransition } = useTransitionContext();

  async function handleProceed() {
    const ok = await totalForm.trigger(fields);

    console.log("Form values:", totalForm.getValues());
    //wenn fields undefined, dann  soll canNavigate true sein!
    const canNavigate = fields ? ok : true;

    if (canNavigate) {
      startTransition(() => {
        router.push(href);
      });
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
      disabled={isTransitioning}
      {...props}
    >
      {children}
    </Button>
  );
}
