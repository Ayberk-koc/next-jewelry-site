import Header from "@/components/layoutComponents/Header";
import Breadcrumbs from "@/components/layoutComponents/BreadCrumbs";
//import HeaderShell from "@/components/smallComponents/HeaderShell";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HeaderShell overlay={false}>
        <Header className="border-b border-gray-200" />
      </HeaderShell> */}
      <Header className="border-b border-gray-200" />
      <div className="pt-gap-9 px-gap-9 sm:pt-gap-13 xl:px-[70px]">
        <Breadcrumbs />
      </div>
      {children}
    </>
  );
}
