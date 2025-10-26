import { z } from "zod";

//HIER FORM SCHEMA FÜR ADDRESSEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
const addressFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Enter at least 3 characters" })
    .max(30, { message: "Too long" }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  phoneNr: z
    .string()
    .trim()
    .transform((v) => (v === "" ? undefined : v))
    .optional()
    .refine((v) => v === undefined || isE164DE(v), {
      message: "Keine gültige deutsche Nummer",
    }),
  isDefault: z.boolean().optional(),
  // address:
  street: StreetSchema,
  houseNr: HouseNumberSchema,
  zip: GermanPostalCodeSchema,
  city: GermanCitySchema,
});
//HIER FORM SCHEMA FÜR ADDRESSEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export { addressFormSchema };
