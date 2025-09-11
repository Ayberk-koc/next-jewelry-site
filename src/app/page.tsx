import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-gray-600 h-screen w-full flex flex-col items-center justify-center">
        <Header></Header>
        <Footer></Footer>
      </div>
    </>
  );
}
