import Header from "@/components/Header";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header className="absolute z-10"></Header>
        {children}
      </body>
    </html>
  );
}
