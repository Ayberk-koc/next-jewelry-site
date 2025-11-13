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
  CheckoutFormValuesType,
  useCheckoutFormContext,
} from "@/components/contexts/CheckoutFormContext";

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

const iconsArray = [
  <CheckoutAddressIcon key={"checkoutAddressIcon"} />,
  <CheckoutPaymentIcon key={"checkoutPaymentIcon"} />,
  <CheckoutReviewIcon key={"checkoutReviewIcon"} />,
];
const navigationTextArr = ["Address", "Payment Method", "Review"];
const navigationPath = ["address", "payment", "review"] as const; //das könnte ich auch ins layout schreiben!
type NavigationPathValuesType = (typeof navigationPath)[number];

type NavigationInfoType = {
  href: NavigationPathValuesType;
  fields?: Path<CheckoutFormValuesType>;
};
type totalNavigationInfos = NavigationInfoType[][];

function getCurrentStepInCheckout(pathName: string) {
  const currentStepInCheckout = navigationPath.find((elem) =>
    pathName.endsWith(elem)
  );
  return currentStepInCheckout ?? "address";
}

function getNavigationInfoBasedOnPathName(pathName: string) {
  const currentStep = getCurrentStepInCheckout(pathName);

  let navigationTotal: totalNavigationInfos;
  if (currentStep === "address") {
    navigationTotal = [
      [{ href: "address" }],
      [{ href: "payment", fields: "pickAddressForm" }],
      [
        { href: "payment", fields: "pickAddressForm" },
        { href: "review", fields: "pickPaymentMethodSchema" },
      ],
    ];
  } else if (currentStep === "payment") {
    navigationTotal = [
      [{ href: "address" }],
      [{ href: "payment" }],
      [{ href: "review", fields: "pickPaymentMethodSchema" }],
    ];
  } else {
    navigationTotal = [
      [{ href: "address" }],
      [{ href: "payment" }],
      [{ href: "review" }],
    ];
  }
  return navigationTotal;
}

export default function ProgressCheckoutNavigationLine({
  progressState,
}: {
  progressState: number;
}) {
  const totalForm = useCheckoutFormContext();
  const router = useRouter();
  const { isTransitioning, startTransition } = useTransitionContext();
  const pathname = usePathname();

  async function handleNavigate(
    href: NavigationInfoType["href"],
    fields: NavigationInfoType["fields"]
  ) {
    let ok = true;
    if (fields) {
      ok = await totalForm.trigger(fields);
    }

    const canNavigate = fields ? ok : true;

    if (canNavigate) {
      startTransition(() => {
        router.push(href);
        totalForm.clearErrors(fields);
      });
    }

    return canNavigate;
  }

  async function handleMultiNavigation(navInfos: NavigationInfoType[]) {
    for (const navInfo of navInfos) {
      const success = await handleNavigate(navInfo.href, navInfo.fields);

      if (!success) {
        break;
      }
    }
  }

  const navigationTotalInfos = getNavigationInfoBasedOnPathName(pathname);

  return (
    <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      {navigationTotalInfos.map((navigationInfo, index) => (
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
              handleMultiNavigation(navigationInfo);
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
