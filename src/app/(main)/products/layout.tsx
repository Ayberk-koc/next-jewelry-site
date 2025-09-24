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
        <Header />
      </HeaderShell>
      <Breadcrumbs />
      {children}
    </>
  );
}
