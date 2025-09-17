import Footer from "@/components/footer/Footer";

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
