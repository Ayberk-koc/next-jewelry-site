import Header from "@/components/layout/components/Header";
import HeaderShell from "@/components/layout/containers/HeaderShell";
import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderShell>
        <Header />
      </HeaderShell>
      <section className="bg-gray-300 relative">
        <Image
          src={"/images/Test_img.png"}
          alt=""
          fill //hier fill -> display absolut
          className="object-[50%_50%] object-cover" //gute tailwind-classes für day layout!
        ></Image>
        {/* sobald screen breiter als login-form -> mache items-center! Deswegen 501px! */}
        <div className="min-h-screen flex justify-center items-end min-[501px]:items-center">
          <div className="w-[500px] bg-white z-10">{children}</div>
        </div>
      </section>
    </>
  );
}
