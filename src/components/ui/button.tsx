import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const userIconsDict = {
  xs2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <ellipse
        cx="6.99935"
        cy="10.2084"
        rx="4.08333"
        ry="2.04167"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle
        cx="6.99935"
        cy="4.08333"
        r="2.33333"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <ellipse
        cx="8.00065"
        cy="11.6666"
        rx="4.66667"
        ry="2.33333"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle
        cx="8.00065"
        cy="4.66667"
        r="2.66667"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <ellipse
        cx="9"
        cy="13.125"
        rx="5.25"
        ry="2.625"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="5.25"
        r="3"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  ),
  md: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <ellipse
        cx="9.99935"
        cy="14.5834"
        rx="5.83333"
        ry="2.91667"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <ellipse
        cx="9.99935"
        cy="5.83333"
        rx="3.33333"
        ry="3.33333"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <ellipse
        cx="12"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xl: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <ellipse
        cx="12"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xl2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <ellipse
        cx="12"
        cy="18"
        rx="7"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7.5"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const tailIconsDict = {
  xs2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5.83398 9.91669L8.16732 7.00002L5.83398 4.08335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.66602 11.3333L9.33268 7.99998L6.66602 4.66665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M7.5 12.75L10.5 9L7.5 5.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  md: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.33398 14.1667L11.6673 10L8.33398 5.83335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 17L14 12L10 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xl: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 17L14 12L10 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  xl2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M10 17.5L14 12.5L10 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

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
        lg: "gap-gap-5 py-gap-7 px-gap-10 font-text-md-regular",
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
  iconOnly = false,
  showLeadingIcon = false,
  showTailingIcon = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconOnly?: boolean;
    showLeadingIcon?: boolean;
    showTailingIcon?: boolean;
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
      {(showLeadingIcon || iconOnly) && userIconsDict[size]}
      {!iconOnly && <span className="mb-[3px]">{children}</span>}
      {showTailingIcon && tailIconsDict[size]}
    </Comp>
  );
}

export { Button, buttonVariants };
