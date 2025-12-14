import ProgressCheckoutNavigationLine from "@/features/checkout/components/ProgressCheckoutNavigationLine";
import PaymentSummary from "@/features/checkout/components/PaymentSummary";
import { HeadingContainer } from "@/components/layout/containers/HeadingContainer";
import { MainContainer } from "@/components/layout/containers/MainContainer";
import PickAddressForm from "@/features/checkout/forms/PickAddressForm";
import ProceedButton from "@/features/checkout/components/ProceedButton";

export default function AddressPage() {
  const totalPrice = 9000;

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">Address</p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">
          <div className="mb-gap-13">
            <ProgressCheckoutNavigationLine progressState={0} />
          </div>

          <div className="w-full">
            <PickAddressForm />
          </div>
        </div>

        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice}>
            <ProceedButton
              href={"payment"}
              fields={"pickAddressForm"}
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
