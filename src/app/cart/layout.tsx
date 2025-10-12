import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";

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
