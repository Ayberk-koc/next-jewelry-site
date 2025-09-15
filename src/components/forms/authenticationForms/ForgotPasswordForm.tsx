"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
});

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //so kann ich automatisch errors handhaben! Mache auch noch loading-state irgendwie!
    // form.setError("email", { message: "Falsche Login-Daten" });
    console.log(values);
  }

  //in den "x" button noch machen, dass ich damit zurück auf login page komme!
  //mit "send link" knopf mache, dass ich auf bestätigungs-modal komme. Eine wo steht, dass email
  //verschickt wurde!
  return (
    <div className="p-gap-9 sm:p-gap-11">
      <div className="flex space-y-gap-9 mb-gap-11 items-start">
        <div className="flex flex-col space-y-gap-5 ">
          <p className="font-sm-regular text-gray-950 font-notoSerif text-center">
            Forgot Password
          </p>
          <p className="font-text-sm-medium text-gray-700 text-center">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </p>
        </div>
        <button className="cursor-pointer" onClick={() => {}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
              stroke="#0C0A09"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

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
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size={"xl"}
            className="w-full uppercase font-text-md-medium"
          >
            Send Link
          </Button>
        </form>
      </Form>
    </div>
  );
}
