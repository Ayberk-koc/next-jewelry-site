"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm, useWatch, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, useState } from "react";
import Link from "next/link";

type LabelInputProps = ComponentProps<"input"> & {
  label: string;
  errorMessage?: string;
  className?: string;
};

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

const loginSchema = z.object({
  email: z.email({ error: "Please provide valid email address" }),
  password: z
    .string()
    .min(5, { error: "must be at least 5 characters long" })
    .max(20, { error: "not longer than 20 characters" }),
  remember: z.boolean().optional(),
});
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [send, setSend] = useState(false);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const { email, password, remember } = useWatch<LoginFormValues>({
    control: loginForm.control,
  });

  const { errors } = useFormState<LoginFormValues>({
    control: loginForm.control,
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  async function handleEmailChange(val: string) {
    loginForm.setValue("email", val);
    if (send) {
      await loginForm.trigger("email");
    }
  }

  async function handlePasswordChange(val: string) {
    loginForm.setValue("password", val);
    if (send) {
      await loginForm.trigger("password");
    }
  }

  function handleCheckmarkChange(val: boolean) {
    loginForm.setValue("remember", val);
  }

  async function handleSubmit() {
    const ok = await loginForm.trigger();
    setSend(true);

    if (ok) {
      const values = loginForm.getValues();
      console.log(values);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="mb-gap-5">
        <LabelInput
          label="Email Address"
          placeholder="Your Email Address"
          className="mb-[18px]"
          errorMessage={emailError}
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <LabelInput
          label="Password"
          placeholder="Your Password"
          type="password"
          errorMessage={passwordError}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-gap-11">
        <div className="flex gap-x-gap-5 items-center">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={remember}
            onChange={(e) => handleCheckmarkChange(e.target.checked)}
          />
          <p className="font-text-md-medium text-gray-950">Remember me</p>
        </div>
        <Link href={"/resetPassword"}>
          <button className="font-text-md-medium text-gray-950 cursor-pointer">
            Forgot Password?
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-y-gap-9 w-full">
        <Button
          size={"xl"}
          className="font-text-md-medium uppercase"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Link href={"/register"}>
          <Button
            size={"xl"}
            variant={"outline"}
            className="font-text-md-medium uppercase w-full"
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
