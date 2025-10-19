import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckoutAddressIcon,
  CheckoutPaymentIcon,
  CheckoutReviewIcon,
} from "@/components/svg-icons/ChekoutProsessIcons";
import { ReactNode } from "react";

function ProgressCheckoutIconTextFields({
  text,
  children,
  isActive = false,
}: {
  text: string;
  children: ReactNode;
  isActive?: boolean;
}) {
  const colorState = isActive
    ? "text-white bg-gray-950"
    : "text-gray-950 bg-gray-200";
  return (
    <div
      className="justify-self-start flex flex-col items-center gap-gap-5 group "
      data-fill={isActive ? "data-[fill=true]" : "data-[fill=false]"}
    >
      <Button
        size={"md"}
        variant={"fill"}
        className={cn("!px-gap-6", colorState)}
      >
        {children}
      </Button>
      <p className="font-text-md-medium text-gray-950">{text}</p>
    </div>
  );
}

function ProgressDashedLine({ activeLines }: { activeLines: number }) {
  return (
    <div className="absolute inset-x-[25px] top-[18px] -z-10 flex">
      <div
        className={cn(
          "flex-1 border border-dashed",
          activeLines >= 1 ? "border-gray-950" : "border-gray-200"
        )}
      ></div>
      <div
        className={cn(
          "flex-1 border border-dashed",
          activeLines >= 2 ? "border-gray-950" : "border-gray-200"
        )}
      ></div>
    </div>
  );
}

export default function ProgressCheckout() {
  //das muss noch mit state nehmen- Erstmal nur für Simmulation
  const progressState = 0;

  return (
    <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <div className="justify-self-start">
        <ProgressCheckoutIconTextFields
          text="Address"
          isActive={progressState >= 0}
        >
          <CheckoutAddressIcon />
        </ProgressCheckoutIconTextFields>
      </div>
      <div>
        <ProgressCheckoutIconTextFields
          text="Payment Method"
          isActive={progressState >= 1}
        >
          <CheckoutPaymentIcon />
        </ProgressCheckoutIconTextFields>
      </div>
      <div className="justify-self-end">
        <ProgressCheckoutIconTextFields
          text="Review"
          isActive={progressState >= 2}
        >
          <CheckoutReviewIcon />
        </ProgressCheckoutIconTextFields>
      </div>
      <ProgressDashedLine activeLines={progressState} />
    </div>
  );
}
