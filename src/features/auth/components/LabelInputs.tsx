"use client";

import EyeIcon from "@/components/svg-icons/PasswordEyeInputIcon";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps, useState, useRef } from "react";

type LabelInputProps = ComponentProps<"input"> & {
  label: string;
  errorMessage?: string;
  className?: string;
};

function LabelPasswordInput({
  label,
  placeholder,
  className,
  errorMessage,
  ...props
}: LabelInputProps) {
  const [visible, setVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    if (!inputRef.current) return;

    const cursorPosition = inputRef.current.selectionStart;

    setVisible((prevState) => !prevState);

    setTimeout(() => {
      if (inputRef.current && cursorPosition !== null) {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between mb-gap-3">
        <p className="font-text-sm-medium text-gray-500">{label}</p>
        {errorMessage && (
          <p className="font-text-sm-medium text-error-500">{errorMessage}</p>
        )}
      </div>
      <div className="relative w-full">
        <Input
          className="w-full"
          scale={"xl2"}
          placeholder={placeholder}
          type={visible ? "text" : "password"}
          ref={inputRef}
          {...props}
        />
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <EyeIcon isActive={visible} />
        </button>
      </div>
    </div>
  );
}

function LabelInput({
  label,
  placeholder,
  className,
  errorMessage,
  ...props
}: LabelInputProps) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between mb-gap-3">
        <p className="font-text-sm-medium text-gray-500">{label}</p>
        {errorMessage && (
          <p className="font-text-sm-medium text-error-500">{errorMessage}</p>
        )}
      </div>
      <Input
        className="w-full"
        scale={"xl2"}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export { LabelInput, LabelPasswordInput };
