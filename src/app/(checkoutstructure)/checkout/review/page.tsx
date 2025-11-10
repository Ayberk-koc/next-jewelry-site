import ProgressCheckoutNavigationLine from "@/components/layoutComponents/ProgressCheckoutNavigationLine";
import PaymentSummary from "@/components/layoutComponents/PaymentSummary";
import { HeadingContainer } from "@/components/containers/HeadingContainer";
import { MainContainer } from "@/components/containers/MainContainer";
import { Button } from "@/components/ui/button";
import OrderReviewForm from "@/components/forms/checkoutForms/OrderReviews";

export default function ReviewPage() {
  const totalPrice = 9000;

  return (
    <>
      <HeadingContainer>
        <p className="font-notoSerif font-sm-regular text-gray-950">
          Review Order
        </p>
      </HeadingContainer>
      <MainContainer className="flex flex-col gap-gap-13 min-[1000px]:flex-row min-[1000px]:gap-[64px] items-start">
        <div className="w-full">
          <div className="mb-gap-13">
            <ProgressCheckoutNavigationLine progressState={2} />
          </div>

          <div className="w-full flex-col gap-y-gap-9">
            <OrderReviewForm />
          </div>
        </div>

        <div className="w-full min-[1000px]:w-[360px] sticky top-gap-11">
          <PaymentSummary totalPrice={totalPrice}>
            {/* hier brauche ich ein bestätigen button, der das dialog "bestätigen dialog" ruft! Auch noch disabled bei transition machen! */}
            <Button size={"xl"} variant={"fill"} className="uppercase">
              Place Order
            </Button>
          </PaymentSummary>
        </div>
      </MainContainer>
    </>
  );
}
