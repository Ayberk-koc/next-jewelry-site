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
  username: z.string().min(3, { message: "Enter at least 3 characters" }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  termsAndConditions: z.boolean().refine((val) => val === true, {
    message: "You must agree to terms and conditions",
  }),
});

export default function RegisterForm({
  onChangeAuth,
}: {
  onChangeAuth: () => void;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  //das brauche ich doch nicht. Mache, dass der button auf die login-form wechselt! -> mit state!
  //   function onRegister(values: z.infer<typeof formSchema>) {
  //     console.log(values);
  //     //hier logik für registrierung
  //   }
  //das ist was ich ins jsx rein gemacht hätte.
  //   <Button
  //     size={"xl"}
  //     className="w-full uppercase font-text-md-medium"
  //     variant={"outline"}
  //     onClick={form.handleSubmit(onRegister)}
  //   >
  //     Register
  //   </Button>;

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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Username"
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
            name="termsAndConditions"
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

                <FormLabel className="font-text-md-medium text-gray-950 relative bottom-1 cursor-pointer">
                  Agree to Terms & Conditions
                </FormLabel>

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
            Register
          </Button>
          <Button
            type="button"
            size={"xl"}
            variant={"outline"}
            className="w-full uppercase font-text-md-medium"
            onClick={onChangeAuth}
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
