"use client";

import { cn } from "@/lib/utils";
import {
  CheckoutAddressIcon,
  CheckoutPaymentIcon,
  CheckoutReviewIcon,
} from "@/components/svg-icons/ChekoutProsessIcons";
import { ReactNode } from "react";
import { Path } from "react-hook-form";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useTransitionContext } from "../contexts/TransitionContext";
import {
  useFormLayoutContext,
  TotalFormValuesType,
} from "@/app/(checkoutstructure)/checkout/layout";

function ProgressCheckoutButton({
  text,
  children,
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  text: string;
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}) {
  const colorState = isActive
    ? "text-white bg-gray-950"
    : "text-gray-950 bg-gray-200";
  return (
    <div
      className="justify-self-start flex flex-col items-center gap-gap-5 group"
      data-fill={isActive ? "true" : "false"}
    >
      <Button
        size={"md"}
        variant={"fill"}
        className={cn("!px-gap-6", colorState, className, "")}
        {...props}
      >
        {children}
      </Button>
      <p className="font-text-md-medium text-gray-950">{text}</p>
    </div>
  );
}

function ProgressDashedLine({ activeLines }: { activeLines: number }) {
  const { isTransitioning } = useTransitionContext();

  return (
    <div className="absolute inset-x-[25px] top-[18px] -z-10 flex">
      <div
        className={cn(
          "flex-1 border border-dashed",
          activeLines >= 1 && !isTransitioning
            ? "border-gray-950"
            : "border-gray-200"
        )}
      ></div>
      <div
        className={cn(
          "flex-1 border border-dashed",
          activeLines >= 2 && !isTransitioning
            ? "border-gray-950"
            : "border-gray-200"
        )}
      ></div>
    </div>
  );
}
//################################
type NavigationInfoType = {
  href: string;
  fields?: Path<TotalFormValuesType> | Path<TotalFormValuesType>[];
};

type NavigationInfoTypeArr = NavigationInfoType[];

const navigationInfos: NavigationInfoTypeArr = [
  {
    href: "address",
    fields: "pickAddressForm",
  },
  { href: "payment", fields: "pickAddressForm" },
  { href: "reviews", fields: ["pickAddressForm", "pickPaymentMethodSchema"] },
];

const iconsArray = [
  <CheckoutAddressIcon key={"checkoutAddressIcon"} />,
  <CheckoutPaymentIcon key={"checkoutPaymentIcon"} />,
  <CheckoutReviewIcon key={"checkoutReviewIcon"} />,
];
const navigationTextArr = ["Address", "Payment Method", "Review"];
const navigationPath = ["address", "payment", "review"];

export default function ProgressCheckoutNavigationLine({
  progressState,
}: {
  progressState: number;
}) {
  const totalForm = useFormLayoutContext();
  const router = useRouter();
  const { isTransitioning, startTransition } = useTransitionContext();
  const pathname = usePathname();

  async function handleNavigate(
    href: NavigationInfoType["href"],
    fields: NavigationInfoType["fields"]
  ) {
    const ok = await totalForm.trigger(fields);
    const canNavigate = fields ? ok : true;

    //mache irgendwie eine navigationsList! Also erst zu dem einen navigieren! Muss einen adneren datentyp für navigationsInfo wählen!
    if (canNavigate) {
      startTransition(() => {
        router.push(href);
      });
    }
  }

  return (
    <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      {navigationInfos.map((navigationInfo, index) => (
        <div
          key={index} // später: navigationInfo.href  (das nur für test)
          className="first:justify-self-start justify-self-auto [&:nth-last-child(2)]:justify-self-end"
        >
          <ProgressCheckoutButton
            key={index}
            text={navigationTextArr[index]}
            isActive={progressState >= index}
            disabled={isTransitioning}
            data-pending={isTransitioning.toString()}
            onClick={() => {
              if (pathname.includes(navigationPath[index])) return;
              handleNavigate(navigationInfo.href, navigationInfo.fields);
            }}
          >
            {iconsArray[index]}
          </ProgressCheckoutButton>
        </div>
      ))}

      <ProgressDashedLine activeLines={progressState} />
    </div>
  );
}
