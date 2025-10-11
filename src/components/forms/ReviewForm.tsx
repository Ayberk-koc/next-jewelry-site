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
import { cn } from "@/lib/utils";
import { Ref, useState } from "react";
import { RewievStar } from "@/components/svg-icons/ReviewStars";

function StarsReviewInput({
  value,
  changeValue,
  className,
}: {
  value: number;
  changeValue: (num: number) => void;
  className?: string;
}) {
  const [starsHovered, setStarsHovered] = useState(0);

  return (
    <div className={cn("flex space-x-1 items-center", className)}>
      <ul className="flex items-center" role="radiogroup">
        {Array.from({ length: 5 }).map((_, index) => (
          <li
            role="radio"
            aria-checked={value === index + 1}
            className="p-gap-3 cursor-pointer"
            key={index}
            onClick={() => changeValue(index + 1)}
            onMouseEnter={() => setStarsHovered(index + 1)}
            onMouseLeave={() => setStarsHovered(0)}
          >
            <RewievStar
              fill={value > index || starsHovered > index}
              className="text-gray-950"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewTextArea({
  maxCount = 350,
  className,
  errorText,
  ref,
  value,
  onChange,
  ...props
}: {
  maxCount?: number;
  className?: string;
  errorText?: string;
  value: string;
  onChange: (text: string) => void;
  ref: Ref<HTMLTextAreaElement>;
}) {
  const isDiasbled = value.length > maxCount;

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Enter your Review"
        className={cn(
          "font-text-md-medium placeholder:font-text-md-regular text-gray-950 placeholder:text-gray-500",
          "p-gap-9 border border-gray-200",
          "resize-none",
          "h-[150px] pb-gap-3 focus:border-success-500 focus:outline-none"
        )}
        {...props}
      />
      <p className="w-full flex justify-between items-center">
        <span className={cn(errorText && "text-error-600")}>{errorText}</span>
        <span
          className={cn(
            "font-text-sm-regular text-gray-500",
            isDiasbled && "text-error-700"
          )}
        >
          {value.length}/{maxCount}
        </span>
      </p>
    </div>
  );
}

const formSchema = z.object({
  stars: z.number().min(1, { message: "Needs to be at least 1 star" }),
  name: z.string().min(3, { message: "Enter at least 3 characters" }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  reviewText: z
    .string()
    .trim()
    .min(10, { message: "Please enter at least 10 characters" })
    .max(350, { message: "only 200 characters per review please" }),
});

export default function ReviewForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stars: 0,
      name: "",
      email: "",
      reviewText: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    //hier auch das schließen der modal steuern am besten! Falls das aus einer modal heraus kommt!
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-gap-9">
        {/* hier die sterne review. Komplett custom Input-Methode! */}
        <FormField
          control={form.control}
          name="stars"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <StarsReviewInput //hier habe kein ref benutzt! -> nicht immer nötig!
                  value={field.value}
                  changeValue={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* hier die sterne review */}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                scale={"xl2"}
                className="font-text-sm-medium text-gray-500"
              >
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Username"
                  scale={"xl2"}
                  className="font-text-md-medium"
                  {...field} //hier automatisch das value und onChange drinne!
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-gap-9">
              <FormLabel
                scale={"xl2"}
                className="font-text-sm-medium text-gray-500"
              >
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  scale={"xl2"}
                  className="font-text-md-medium"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reviewText"
          render={({ field }) => (
            <FormItem className="mb-gap-11">
              <FormControl>
                <ReviewTextArea
                  ref={field.ref} //eigentlich nicht nötig. Error handling wird anhand des field.value `s gemacht!
                  value={field.value}
                  onChange={field.onChange}
                  errorText={form.formState.errors.reviewText?.message}
                />
              </FormControl>
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
  );
}
