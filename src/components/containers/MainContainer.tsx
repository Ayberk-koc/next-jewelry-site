import { ReactNode } from "react";

function MainContainer({ children }: { children: ReactNode }) {
  return (
    <section className="py-gap-13 px-gap-9 sm:px-[70px] sm:pb-[80px] flex flex-col items-center space-y-gap-13 sm:space-y-[48px] max-w-[1440px] mx-auto">
      {children}
    </section>
  );
}

export { MainContainer };
