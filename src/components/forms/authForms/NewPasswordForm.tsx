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

const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(5, { error: "must be at least 5 characters long" })
      .max(20, { error: "not longer than 20 characters" }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    error: "Passwords must match!",
    path: ["repeatPassword"],
  });
type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;

export default function NewPasswordForm({
  onPasswordSet,
}: {
  onPasswordSet: () => void;
}) {
  const [send, setSend] = useState(false);

  const registerForm = useForm<NewPasswordFormValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: { password: "", repeatPassword: "" },
  });

  const { password, repeatPassword } = useWatch<NewPasswordFormValues>({
    control: registerForm.control,
  });

  const { errors } = useFormState<NewPasswordFormValues>({
    control: registerForm.control,
  });

  const passwordError = errors.password?.message;
  const repeatPasswordError = errors.repeatPassword?.message;

  async function handlePasswordChange(val: string) {
    registerForm.setValue("password", val);
    if (send) {
      await registerForm.trigger("password");
    }
  }

  async function handlerepeatPasswordChange(val: string) {
    registerForm.setValue("repeatPassword", val);
    if (send) {
      await registerForm.trigger("repeatPassword");
    }
  }

  async function handleSubmit() {
    const ok = await registerForm.trigger();
    setSend(true);

    if (ok) {
      onPasswordSet();
      const values = registerForm.getValues();
      console.log(values);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="mb-gap-5">
        <LabelInput
          label="Password"
          placeholder="New Password"
          className="mb-[18px]"
          errorMessage={passwordError}
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          type="password"
        />
        <LabelInput
          label="Re-enter new Password"
          placeholder="Repeat new Password"
          className="mb-[18px]"
          errorMessage={repeatPasswordError}
          value={repeatPassword}
          onChange={(e) => handlerepeatPasswordChange(e.target.value)}
          type="password"
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
