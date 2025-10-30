"use client";

import { cn } from "@/lib/utils";
import {
  CheckoutAddressIcon,
  CheckoutPaymentIcon,
  CheckoutReviewIcon,
} from "@/components/svg-icons/ChekoutProsessIcons";
import { ReactNode } from "react";
import { FinalCheckoutFormValuesType } from "@/components/layoutComponents/checkOutProcessFormProviderLayoutSchemas";
import { Path, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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
      data-fill={isActive ? "data-[fill=true]" : "data-[fill=false]"}
    >
      <Button
        size={"md"}
        variant={"fill"}
        className={cn(
          "!px-gap-6",
          colorState,
          className,
          "disabled:opacity-100"
        )}
        {...props}
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

type NavigationInfoType = {
  href: string;
  fields?:
    | Path<FinalCheckoutFormValuesType>
    | Path<FinalCheckoutFormValuesType>[];
};

const navigationInfosArray: NavigationInfoType[] = [
  {
    href: "address",
  },
  {
    href: "payment",
    fields: "pickedAddress.id",
  },
  {
    href: "payment",
    fields: "pickedAddress.id",
  },
];

//mache hier first second third props (also wo die buttons hin sollen) rein!
export default function ProgressCheckoutNavigationLine({
  progressState,
}: {
  progressState: number;
}) {
  const iconsArray = [
    <CheckoutAddressIcon key={"checkoutAddressIcon"} />,
    <CheckoutPaymentIcon key={"checkoutPaymentIcon"} />,
    <CheckoutReviewIcon key={"checkoutReviewIcon"} />,
  ];
  const navigationTextArr = ["Address", "Payment Method", "Review"];

  const form = useFormContext<FinalCheckoutFormValuesType>();
  const router = useRouter();

  async function handleNavigate(
    href: NavigationInfoType["href"],
    fields: NavigationInfoType["fields"]
  ) {
    const ok = await form.trigger(fields);

    if (ok) {
      router.push(href);
    }
  }

  return (
    <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      {navigationInfosArray.map((navigationInfo, index) => (
        <div
          key={index} // später: navigationInfo.href
          className="first:justify-self-start justify-self-auto [&:nth-last-child(2)]:justify-self-end"
        >
          <ProgressCheckoutButton
            key={index}
            text={navigationTextArr[index]}
            isActive={progressState >= index}
            disabled={true} //muss dass über context handhaben! so kann ich alle component die es brauchen geben!
            onClick={() =>
              handleNavigate(navigationInfo.href, navigationInfo.fields)
            }
          >
            {iconsArray[index]}
          </ProgressCheckoutButton>
        </div>
      ))}

      <ProgressDashedLine activeLines={progressState} />
    </div>
  );
}
