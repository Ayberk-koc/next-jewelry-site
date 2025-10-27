"use client";

import ProgressCheckout from "@/components/layoutComponents/ProgressCheckout";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import {
  PaymentFormProvider,
  PaymentForm,
} from "@/components/forms/PaymentForms";

//hiuer war payment form

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
            <PaymentFormProvider>
              <PaymentForm />
            </PaymentFormProvider>
          </div>
        </div>

        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice} action={"Continue"} />
        </div>
      </MainContainer>
    </>
  );
}
