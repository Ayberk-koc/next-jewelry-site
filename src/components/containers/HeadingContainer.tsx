import { ReactNode } from "react";

function HeadingContainer({ children }: { children: ReactNode }) {
  //max-w-[1440px] mx-auto
  return (
    <section className="pt-gap-9 px-gap-9 xl:px-[70px] sm:pt-gap-15">
      {children}
    </section>
  );
}

export { HeadingContainer };
