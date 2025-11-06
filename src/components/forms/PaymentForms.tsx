"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionCustomTriggerWrapper,
} from "@/components/ui/accordion";
import { RadioButtonIcon } from "@/components/svg-icons/PaymentIcons";
import { Input } from "@/components/ui/input";
import {
  useFormLayoutContext,
  TotalFormValuesType,
} from "@/app/(checkoutstructure)/checkout/layout";
import { useFormState } from "react-hook-form";

export default function PaymentForm() {
  const totalForm = useFormLayoutContext();
  const { errors } = useFormState({ control: totalForm.control });

  const methodValue = totalForm.watch("pickPaymentMethodSchema.paymentMethod");

  const formError = errors.pickPaymentMethodSchema?.message;

  async function handlePickPaymentMethod(
    paymentValue: TotalFormValuesType["pickPaymentMethodSchema"]["paymentMethod"]
  ) {
    totalForm.setValue("pickPaymentMethodSchema.paymentMethod", paymentValue);
    await totalForm.trigger("pickPaymentMethodSchema");

    const values = totalForm.getValues("pickPaymentMethodSchema.paymentMethod");
    console.log(values);
  }

  return (
    <form>
      {formError && <p className="text-error-500 mb-gap-3">{formError}</p>}
      <Accordion
        type="single"
        value={methodValue}
        onValueChange={(val) => {
          handlePickPaymentMethod(val);
        }}
      >
        <AccordionItem value="Paypal" className="group border-0">
          <AccordionCustomTriggerWrapper className="mb-gap-9 p-0">
            <div className="flex items-center gap-x-gap-5 justify-start">
              <RadioButtonIcon className="relative top-[3px]" />
              <p className="font-text-lg-medium text-gray-950">PayPal</p>
            </div>
          </AccordionCustomTriggerWrapper>
        </AccordionItem>

        <AccordionItem value="Kreditkarte" className="group">
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
                <div className="flex-1">
                  <p className="text-gray-500 font-text-sm-medium mb-gap-3">
                    Card Number
                  </p>
                  <Input
                    placeholder="Your Card Number"
                    scale={"xl2"}
                    className="font-text-md-medium w-full"
                  />
                </div>

                {/* das nächstes feld */}
                <div className="flex-1">
                  <p className="text-gray-500 font-text-sm-medium mb-gap-3">
                    Card Holder Name
                  </p>
                  <Input
                    placeholder="Card holder name"
                    scale={"xl2"}
                    className="font-text-md-medium w-full"
                  />
                </div>
              </div>
              {/* 2.te reihe! */}
              <div className="flex gap-x-gap-9">
                <div className="flex-1">
                  <p className="text-gray-500 font-text-sm-medium mb-gap-3">
                    Expiry
                  </p>
                  <Input
                    placeholder="mm/yy"
                    scale={"xl2"}
                    maxLength={5}
                    className="font-text-md-medium w-full"
                  />
                </div>

                {/* das nächstes feld */}
                <div className="flex-1">
                  <p className="text-gray-500 font-text-sm-medium mb-gap-3">
                    CVC
                  </p>
                  <Input
                    type="password"
                    placeholder="CVC"
                    scale={"xl2"}
                    className="font-text-md-medium w-full"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  );
}

export { PaymentForm };
