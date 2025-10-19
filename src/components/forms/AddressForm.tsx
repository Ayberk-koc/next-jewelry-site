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

// //für nummer validieren
const normalizeNumber = (raw: string) =>
  raw.replace(/[^\d+]/g, "").replace(/^00/, "+");

// Wandelt DE-Nummern nach E.164 (+49…) und validiert
const toE164DE = (raw: string): string | null => {
  let norm = normalizeNumber(raw);

  // nationale Schreibweise: 0XXXXXXXX -> +49XXXXXXXX (ohne führende 0)
  if (/^0\d+$/.test(norm)) {
    norm = "+49" + norm.slice(1);
  }

  // finaler Check: +49 gefolgt von 4–13 Ziffern (E.164 max 15 insgesamt)
  return /^\+49\d{4,13}$/.test(norm) ? norm : null;
};

// boolescher Convenience-Checker
const isE164DE = (s: string) => toE164DE(s) !== null;
//für nummer validieren
//###############################################################################
//für addresse validieren

/** RegEx-Bausteine */
const umlauts = "ÄÖÜäöüß";
const word = `A-Za-z${umlauts}`;

const collapseSpaces = (s: string) => s.replace(/\s+/g, " ").trim();

const StreetSchema = z
  .string()
  .transform(collapseSpaces)
  .pipe(
    z
      .string()
      .min(3, "Straßenname zu kurz")
      .regex(
        /^[\p{L}\p{M}][\p{L}\p{M}\p{N} .'-]{1,}$/u,
        "Nur Straßenname, ohne Hausnummer"
      )
  );

const HouseNumberSchema = z
  .string()
  .transform(collapseSpaces)
  .pipe(
    z
      .string()
      .min(1, "Hausnummer fehlt")
      .regex(
        /^[1-9]\d{0,3}[A-Za-z]?(?:\s?[/-]\s?[1-9]\d{0,3}[A-Za-z]?)?$/,
        "Ungültige Hausnummer"
      )
  );
//#####################################################################################

const postalCodeRe = /^(?!00000)\d{5}$/;
const GermanPostalCodeSchema = z
  .string()
  .trim()
  .regex(postalCodeRe, "PLZ nicht valide");

const cityRe = new RegExp(`^(?:St\\.?\\s)?[${word}][${word}\\s.'-]{1,}$`);
const GermanCitySchema = z
  .string()
  .trim()
  .min(2, "Ort erforderlich")
  .refine((v) => cityRe.test(v), "Ungültiger Ortsname");

//für addresse validieren
const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Enter at least 3 characters" })
    .max(30, { message: "Too long" }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  phoneNr: z //###################################################### für ecommerce villeicht raus machen!
    .string()
    .trim()
    .transform((v) => (v === "" ? undefined : v))
    .optional()
    .refine((v) => v === undefined || isE164DE(v), {
      message: "Keine gültige deutsche Nummer",
    }),
  defaultAddress: z.boolean().optional(),
  // address:
  street: StreetSchema,
  houseNr: HouseNumberSchema,
  zip: GermanPostalCodeSchema,
  city: GermanCitySchema,
});

export default function AddressForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNr: "",
      defaultAddress: true,
      street: "",
      houseNr: "",
      zip: "",
      city: "",
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
          name="defaultAddress"
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
