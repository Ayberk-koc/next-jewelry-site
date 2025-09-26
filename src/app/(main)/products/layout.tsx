import Header from "@/components/Header";
import Breadcrumbs from "@/components/smallComponents/BreadCrumbs";
import HeaderShell from "@/components/smallComponents/HeaderShell";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderShell overlay={false}>
        <Header className="border-b border-gray-200" />
      </HeaderShell>
      <div className="pt-gap-9 px-gap-9 sm:pt-gap-13 sm:px-[70px] max-w-[1440px] mx-auto">
        <Breadcrumbs />
      </div>
      {children}
    </>
  );
}
