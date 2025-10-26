"use client";

import ProgressCheckout from "@/components/layoutComponents/ProgressCheckout";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionCustomTriggerWrapper,
} from "@/components/ui/accordion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioButtonIcon } from "@/components/svg-icons/PaymentIcons";
import { Input } from "@/components/ui/input";

function normalizeExpiry(input: string) {
  let val = input.replace(/\D/g, "").slice(0, 4);
  if (val.length >= 3) val = val.slice(0, 2) + "/" + val.slice(2);
  return val;
}

const paymentSchema = z.discriminatedUnion("method", [
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
export type PaymentForm = z.infer<typeof paymentSchema>;

function PaymentForm() {
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: { method: "paypal" },
  });

  const method = form.watch("method");

  return (
    <Form {...form}>
      <form>
        <Accordion
          type="single"
          value={method}
          onValueChange={(v) =>
            form.setValue("method", (v as PaymentForm["method"]) ?? "paypal")
          }
        >
          <AccordionItem value="paypal" className="group border-0">
            <AccordionCustomTriggerWrapper className="mb-gap-9 p-0">
              <div className="flex items-center gap-x-gap-5 justify-start">
                <RadioButtonIcon className="relative top-[3px]" />
                <p className="font-text-lg-medium text-gray-950">PayPal</p>
              </div>
            </AccordionCustomTriggerWrapper>
            <AccordionContent className="mb-gap-11 p-0">
              <div className="flex">test</div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="creditCard" className="group">
            <AccordionCustomTriggerWrapper className="mb-gap-9 p-0">
              <div className="flex items-center gap-x-gap-5 justify-start">
                <RadioButtonIcon className="relative top-[3px]" />
                <p className="font-text-lg-medium text-gray-950">
                  Credit/Debit Card
                </p>
              </div>
            </AccordionCustomTriggerWrapper>
            <AccordionContent className="mb-gap-11 p-0">
              <div className="flex flex-col gap-y-gap-9">
                <div className="flex gap-x-gap-9">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex-1">
                          <FormLabel
                            scale={"xl2"}
                            className="font-text-sm-medium text-gray-500"
                          >
                            Card Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Card Number"
                              scale={"xl2"}
                              className="font-text-md-medium"
                              value={field.value ?? ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  {/* das nächstes feld */}
                  <FormField
                    control={form.control}
                    name="cardHolderName"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex-1">
                          <FormLabel
                            scale={"xl2"}
                            className="font-text-sm-medium text-gray-500"
                          >
                            Card holder name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Card holder name"
                              scale={"xl2"}
                              className="font-text-md-medium"
                              value={field.value ?? ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                {/* 2.te reihe! */}
                <div className="flex gap-x-gap-9">
                  <FormField
                    control={form.control}
                    name="cardExpiry"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex-1">
                          <FormLabel
                            scale={"xl2"}
                            className="font-text-sm-medium text-gray-500"
                          >
                            Card Expiry
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="mm/yy"
                              scale={"xl2"}
                              maxLength={5}
                              className="font-text-md-medium"
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(normalizeExpiry(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  {/* das nächstes feld */}
                  <FormField
                    control={form.control}
                    name="cardCvc"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex-1">
                          <FormLabel
                            scale={"xl2"}
                            className="font-text-sm-medium text-gray-500"
                          >
                            CVC
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="CVC"
                              scale={"xl2"}
                              className="font-text-md-medium"
                              value={field.value ?? ""}
                              onChange={field.onChange}
                              maxLength={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  );
}
//  REFACTORE DAS CHECKOUOTLAYOUT! DIE SIDEBAR BRAUCHT JA AUCH ACCESS ZU DER FORM UM CONTINUE ZU DRÜCKEN ODER UM RABATT EINZUSTELLEN!!!
//  MACHE DASS DIESER RABATT KNOPF EINE GESONDERTE FORM IST!! DIESE SOLL ZU JEDER ZEIT ABGESCHICKT WERDEN KÖNNEN!
//  DER ANDERE BUTTON SOLL ABER DIE AKTUELLE FORM ABSCHICKEN. DAS <FORM> AUS SHADCN IST EIN PROVIDER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default function Payment() {
  const totalPrice = 9000;

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">Payment</p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">
          <div className="mb-gap-13">
            <ProgressCheckout progressState={1}></ProgressCheckout>
          </div>
          {/* hier drunter das in eine custom component. Kann das genaue layout mit wrapper kontrollieren! */}
          <div className="w-full">
            <PaymentForm></PaymentForm>
          </div>
        </div>

        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice} action={"Continue"} />
        </div>
      </MainContainer>
    </>
  );
}
