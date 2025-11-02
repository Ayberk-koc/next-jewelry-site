"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionCustomTriggerWrapper,
} from "@/components/ui/accordion";
import { useFormContext } from "react-hook-form";
import { RadioButtonIcon } from "@/components/svg-icons/PaymentIcons";
import { Input } from "@/components/ui/input";

import { FinalCheckoutFormValuesType } from "../layoutComponents/checkOutProcessFormProviderLayoutSchemas";

function PaymentForm() {
  const form = useFormContext<FinalCheckoutFormValuesType>();

  //das ist einfach der eines fields. NOTE: ICH MUSS KEINE FORMFIELD COMPONENT DAFÜR NUTZEN!!! DIE FIELDS KOMMEN AUS DEM SCHEMA!!
  const methodValue = form.watch("pickPaymentMethod.method");

  async function handlePickPaymentMethod(
    paymentValue: FinalCheckoutFormValuesType["pickPaymentMethod"]["method"]
  ) {
    form.setValue("pickPaymentMethod.method", paymentValue);
    await form.trigger("pickPaymentMethod");

    const values = form.getValues("pickPaymentMethod.method");
    console.log(values);
  }

  const formError = form.formState.errors.pickPaymentMethod?.method?.message;
  console.log(formError);

  return (
    <form>
      {formError && <p className="text-error-500 mb-gap-2">{formError}</p>}
      <Accordion
        type="single"
        value={methodValue}
        onValueChange={(val) =>
          handlePickPaymentMethod(
            val as FinalCheckoutFormValuesType["pickPaymentMethod"]["method"]
          )
        }
      >
        <AccordionItem value="paypal" className="group border-0">
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

//das brauche ich nicht mehr
// function PaymentFormProvider({ children }: { children: ReactNode }) {
//   const form = useForm<z.infer<typeof paymentFormSchema>>({
//     resolver: zodResolver(paymentFormSchema),
//     defaultValues: { method: "paypal" },
//   });

//   return <Form {...form}>{children}</Form>;
// }

export { PaymentForm };
