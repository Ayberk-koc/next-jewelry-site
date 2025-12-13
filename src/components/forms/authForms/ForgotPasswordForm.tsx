"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm, useWatch, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, useState } from "react";

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
  email: z.email({ error: "Please provide valid email address" }),
});
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function ForgotPasswordForm({
  onEmailSend,
}: {
  onEmailSend: () => void;
}) {
  const [send, setSend] = useState(false);

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "" },
  });

  const { email } = useWatch<RegisterFormValues>({
    control: registerForm.control,
  });

  const { errors } = useFormState<RegisterFormValues>({
    control: registerForm.control,
  });

  const emailError = errors.email?.message;

  async function handleEmailChange(val: string) {
    registerForm.setValue("email", val);
    if (send) {
      await registerForm.trigger("email");
    }
  }

  async function handleSubmit() {
    const ok = await registerForm.trigger();
    setSend(true);

    if (ok) {
      onEmailSend();
      const values = registerForm.getValues();
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
      </div>
      <div className="flex flex-col gap-y-gap-9 w-full">
        <Button
          size={"xl"}
          className="font-text-md-medium uppercase"
          onClick={handleSubmit}
        >
          Send Link
        </Button>
      </div>
    </div>
  );
}
