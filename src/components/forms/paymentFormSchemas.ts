import { z } from "zod";

const paymentFormSchema = z.discriminatedUnion("method", [
  z.object({
    method: z.literal("paypal"),
    // PayPal braucht hier keine weiteren Felder
  }),
  z.object({
    method: z.literal("creditCard"),
    cardNumber: z
      .string()
      .min(12, { message: "not valid" })
      .max(16, { message: "too long" }),
    cardHolderName: z.string().min(3, { message: "not valid" }),
    cardExpiry: z.string().refine((val) => /^(0[1-9]|1[0-2])\/\d\d$/.test(val)),
    cardCvc: z.string().min(3).max(4),
  }),
  z.object({
    method: z.literal("sepa"),
    iban: z
      .string()
      .regex(/^([A-Z]{2}\d{2}[A-Z0-9]{1,30})$/i, "Ungültige IBAN"),
  }),
]);

type PaymentFormValuesType = z.infer<typeof paymentFormSchema>;

export { paymentFormSchema };
export type { PaymentFormValuesType };
