import ProgressCheckoutNavigationLine from "@/components/layoutComponents/ProgressCheckoutNavigationLine";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import { PickAddressForm } from "@/components/forms/PickAddressForm";
import ProceedButton from "@/components/forms/ProceedButton";

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
              fields={"pickedAddress"}
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
