"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "../../ui/passwordInput";

export const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." })
      .trim(),
    reEnterNewPassword: z.string().trim(),
  })
  .refine((data) => data.newPassword === data.reEnterNewPassword, {
    message: "Passwörter müssen übereinstimmen.",
    path: ["reEnterNewPassword"], // Fehler beim zweiten Feld anzeigen
  });

export default function NewPasswordForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      reEnterNewPassword: "",
    },
    // mode: "onBlur",
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-gap-9 sm:p-gap-11">
      <p className="font-sm-regular text-gray-950 mb-gap-5 font-notoSerif text-center">
        Welcome
      </p>
      <p className="font-text-sm-medium text-gray-700 mb-gap-11 text-center">
        Please login here
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-gap-9">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  New Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter your password"
                    scale={"xl2"}
                    className="font-text-md-medium"
                    {...field}
                  ></PasswordInput>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reEnterNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Re-Enter New Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Re-Enter your password"
                    scale={"xl2"}
                    className="font-text-md-medium"
                    {...field}
                  ></PasswordInput>
                </FormControl>
                {/* <FormDescription>
                  Password must be at least 6 characters long.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={"xl"}
            className="w-full uppercase font-text-md-medium"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
