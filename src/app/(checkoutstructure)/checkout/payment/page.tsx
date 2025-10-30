"use client";

import ProgressCheckout from "@/components/layoutComponents/ProgressCheckoutNavigationLine";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import ProceedButton from "@/components/forms/ProceedButton";
import {
  PaymentFormProvider,
  PaymentForm,
} from "@/components/forms/PaymentForms";

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
            <ProgressCheckout progressState={1} />
          </div>
          {/* hier drunter das in eine custom component. Kann das genaue layout mit wrapper kontrollieren! */}
          <div className="w-full">
            <PaymentFormProvider>
              <PaymentForm />
            </PaymentFormProvider>
          </div>
        </div>

        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice}>
            <ProceedButton
              href={"payment"}
              fields={"pickedAddress.id"}
              size={"xl"}
              variant={"fill"}
              className="uppercase"
            >
              Weiter
            </ProceedButton>
          </PaymentSummary>
        </div>
      </MainContainer>
    </>
  );
}
