"use client";

import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm, useWatch, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { LabelInput } from "../components/LabelInputs";

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
