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
      className={cn("py-gap-13 sm:pb-[80px] layout-container-x", className)}
    >
      {children}
    </section>
  );
}

export { MainContainer };
