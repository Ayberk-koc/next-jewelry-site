"use client";

//ACHTUNG WICHTIG!: IDEALERWEISE SOLLTEST DU EINE API ZUR AUTOCOMPLETE NUTZEN, DIE DIE ADDRESSEN FÜLLT! BESSERE EXPERIENCE UND VALIDIERUNGSSICHER!!!!
//DAS KOSTET ALLERDINGS GELD -> MACHE SPÄTER

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
import { addressFormSchema } from "./addressFormSchemas";

function BinaryChoiceInput({
  value,
  onValueChange,
}: {
  title?: string;
  value?: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-x-gap-5">
      <Button
        type="button"
        size={"sm"}
        variant={value ? "fill" : "ghost"}
        onClick={() => onValueChange(true)}
      >
        Default
      </Button>
      <Button
        type="button"
        size={"sm"}
        variant={!value ? "fill" : "ghost"}
        onClick={() => onValueChange(false)}
      >
        Other
      </Button>
    </div>
  );
}

export default function AddressForm() {
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNr: "",
      isDefault: true,
      street: "",
      houseNr: "",
      zip: "",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof addressFormSchema>) {
    // Do something with the form values.
    //hier auch das schließen der modal steuern am besten! Falls das aus einer modal heraus kommt!
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-gap-9">
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
            <FormItem className="">
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
          name="phoneNr"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel
                scale={"xl2"}
                className="font-text-sm-medium text-gray-500"
              >
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="your phone number"
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

        <div className="grid grid-cols-[1fr_90px] gap-gap-7">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Street
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Musterstraße"
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
            name="houseNr"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  Nr
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="10"
                    scale={"xl2"}
                    className="font-text-md-medium min-w-0"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-[2fr_5fr] gap-gap-7">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  PLZ
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="PLZ"
                    scale={"xl2"}
                    className="font-text-md-medium min-w-0"
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
            name="city"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel
                  scale={"xl2"}
                  className="font-text-sm-medium text-gray-500"
                >
                  City
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Deine Stadt"
                    scale={"xl2"}
                    className="font-text-md-medium min-w-0"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ################# */}
        <FormField
          control={form.control}
          name="isDefault"
          render={({ field }) => (
            <FormItem className="mb-gap-11">
              <FormLabel
                scale={"xl2"}
                className="font-text-sm-medium text-gray-950"
              >
                Set as Default
              </FormLabel>
              <FormControl>
                <BinaryChoiceInput
                  value={field.value}
                  onValueChange={field.onChange}
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
          Submit
        </Button>
      </form>
    </Form>
  );
}
