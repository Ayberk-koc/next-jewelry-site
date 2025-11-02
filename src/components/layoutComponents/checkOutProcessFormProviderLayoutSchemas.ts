import { z } from "zod";

const pickAddressFormSchema = z.object({
  id: z.string("Bitte eine addresse wählen"),
});

const pickPaymentMethodSchema = z.object({
  method: z.union([z.literal("paypal"), z.literal("Kreditkarte")], {
    message: "Bitte eine zahlungsmethode auswählen",
  }),
});

//hier packe ich weiter schemata rein! Auch das mit der bezahlung! Doch vielleicht brauche ich das nicht? Das macht stripe ja schon selbst! Finde das noch raus!
const FinalCheckoutSchema = z.object({
  pickedAddress: pickAddressFormSchema,
  pickPaymentMethod: pickPaymentMethodSchema,
});
type FinalCheckoutFormValuesType = z.infer<typeof FinalCheckoutSchema>;

export { FinalCheckoutSchema };
export type { FinalCheckoutFormValuesType };
