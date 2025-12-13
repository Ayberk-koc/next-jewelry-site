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

const registerSchema = z.object({
  name: z.string().min(5, { error: "Please provide a name" }),
  email: z.email({ error: "Please provide valid email address" }),
  password: z
    .string()
    .min(5, { error: "must be at least 5 characters long" })
    .max(20, { error: "not longer than 20 characters" }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    error: "Please agree the terms and conditions",
  }),
});
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [send, setSend] = useState(false);

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", agreeTerms: false },
  });

  const { name, email, password, agreeTerms } = useWatch<RegisterFormValues>({
    control: registerForm.control,
  });

  const { errors } = useFormState<RegisterFormValues>({
    control: registerForm.control,
  });

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const agreeTermsError = errors.agreeTerms?.message;

  async function handleNameChange(val: string) {
    registerForm.setValue("name", val);
    if (send) {
      await registerForm.trigger("name");
    }
  }

  async function handleEmailChange(val: string) {
    registerForm.setValue("email", val);
    if (send) {
      await registerForm.trigger("email");
    }
  }

  async function handlePasswordChange(val: string) {
    registerForm.setValue("password", val);
    if (send) {
      await registerForm.trigger("password");
    }
  }

  async function handleCheckmarkChange(val: boolean) {
    registerForm.setValue("agreeTerms", val);
    if (send) {
      await registerForm.trigger("agreeTerms");
    }
  }

  async function handleSubmit() {
    const ok = await registerForm.trigger();
    setSend(true);

    if (ok) {
      const values = registerForm.getValues();
      console.log(values);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="mb-gap-5">
        <LabelInput
          label="Name"
          placeholder="Firstname Lastname"
          className="mb-[18px]"
          errorMessage={nameError}
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
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
            checked={agreeTerms}
            onChange={(e) => handleCheckmarkChange(e.target.checked)}
          />
          <p
            className={cn(
              "font-text-md-medium",
              agreeTermsError ? "text-error-500" : "text-gray-950"
            )}
          >
            I Agree The Terms & Conditions
          </p>
        </div>
        {/* <button className="font-text-md-medium text-gray-950">
          Forgot Password?
        </button> */}
      </div>
      <div className="flex flex-col gap-y-gap-9 w-full">
        <Button
          size={"xl"}
          className="font-text-md-medium uppercase"
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Link href={"/login"}>
          <Button
            size={"xl"}
            variant={"outline"}
            className="font-text-md-medium uppercase w-full"
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
