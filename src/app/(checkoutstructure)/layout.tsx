import Footer from "@/components/layoutComponents/Footer";
import Header from "@/components/layoutComponents/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className="border-b border-gray-200" />
      {children}
      <Footer></Footer>
    </>
  );
}
