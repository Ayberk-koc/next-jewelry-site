import Footer from "@/components/layoutComponents/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
  );
}
