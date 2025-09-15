"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from "react";

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
        stroke="#06100D"
        strokeWidth="1.5"
      />
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke="#06100D"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ClosedEyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 4L20 20M14 14.2361C13.4692 14.7111 12.7684 15 12 15C10.3431 15 9 13.6569 9 12C9 11.2316 9.28885 10.5308 9.76389 10M19.6078 15.6077C20.1791 15.1103 20.6902 14.6099 21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C11.1086 5 10.2422 5.15256 9.4127 5.41264M6.5 6.80338C5.04144 7.73444 3.79764 8.87678 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C13.8681 19 15.6267 18.3299 17.1648 17.4044"
        stroke="#06100D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

//die states sind keine extra variants! States musst du mit data-* styles handhaben.
//die variants sind für varianten! D.h dinge die sich in dem lifetime der component nicht ändern!
//d.h statische dinge so to say! ALso wie Parameter!
const inputVariants = cva(
  "flex w-full items-center border outline-none font-text-xs-regular border-gray-200 bg-white text-dark-500 focus:border-primary-500 disabled:text-gray-500 disabled:bg-none data-[isInvalid=true]:border-error-500",
  {
    variants: {
      scale: {
        xs: "px-gap-7 py-gap-4 gap-gap-5 font-text-xs-regular",
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

function PasswordInput({
  className,
  scale, //beim typisieren muss ich aufpassen, hier keine propnamen zu nehmen, die es im default "input"-elem schon gibt!
  isError = false,
  ...props
}: React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & { isError?: boolean }) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [showNewPwd, setShowNewPwd] = useState(false);

  function handleToggleShowPW() {
    setShowNewPwd((prevState) => !prevState);
  }

  React.useEffect(() => {
    const element = inputRef.current;
    if (element) {
      element.setAttribute("data-isInvalid", isError ? "true" : "false");
    }
  }, [isError]);

  return (
    <>
      <div className="relative">
        <input
          type={showNewPwd ? "text" : "password"}
          ref={inputRef}
          data-slot="input"
          className={cn(inputVariants({ className, scale }))}
          {...props}
        />
        <button
          className="absolute right-3 top-3.5 z-10"
          type="button"
          onClick={handleToggleShowPW}
        >
          {showNewPwd ? <EyeIcon></EyeIcon> : <ClosedEyeIcon></ClosedEyeIcon>}
        </button>
      </div>
    </>
  );
}

export { PasswordInput };
