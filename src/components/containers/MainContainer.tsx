import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MainContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  //max-w-[1440px] mx-auto
  return (
    <section
      className={cn(
        "py-gap-13 px-gap-9 xl:px-[70px] sm:pb-[80px] flex flex-col items-center gap-y-gap-13 sm:gap-y-[48px]",
        className
      )}
    >
      {children}
    </section>
  );
}

export { MainContainer };
