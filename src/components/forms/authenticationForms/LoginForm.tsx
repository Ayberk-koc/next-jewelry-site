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
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberUser: z.boolean(),
});

//Mache noch eine register page! Am besten einfach nur eine modal!

export default function LoginForm({
  onChangeAuth,
}: {
  onChangeAuth: () => void;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberUser: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // function onRegister(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //   //hier logik für registrierung
  // }

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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    scale={"xl2"}
                    className="font-text-md-medium"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  We'll use this email for account notifications.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    scale={"xl2"}
                    className="font-text-md-medium"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  Password must be at least 6 characters long.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rememberUser"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-1">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    ref={field.ref}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                  />
                </FormControl>
                <div className="flex justify-between w-full">
                  <FormLabel className="font-text-md-medium text-gray-950 relative bottom-1 cursor-pointer">
                    Remember me
                  </FormLabel>
                  <button
                    type="button"
                    className="relative bottom-1 cursor-pointer font-text-md-medium text-gray-950"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* <FormDescription>
                    You agree to our Terms of Service and Privacy Policy.
                  </FormDescription> */}
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={"xl"}
            className="w-full uppercase font-text-md-medium"
          >
            Login
          </Button>
          <Button
            type="button"
            size={"xl"}
            className="w-full uppercase font-text-md-medium"
            variant={"outline"}
            onClick={onChangeAuth}
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}
