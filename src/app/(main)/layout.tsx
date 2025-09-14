import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header className="absolute z-10"></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
