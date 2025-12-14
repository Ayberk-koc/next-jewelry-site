import { ReactNode } from "react";

function HeadingContainer({ children }: { children: ReactNode }) {
  //max-w-[1440px] mx-auto
  return (
    <section className="pt-gap-9 sm:pt-gap-15 layout-container-x">
      {children}
    </section>
  );
}

export { HeadingContainer };
