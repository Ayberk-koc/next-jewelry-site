import FooterCopywrite from "./FooterCopyright";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocials from "./FooterSocials";
import FooterTerms from "./FooterTerms";

export default function Footer() {
  return (
    <footer className="bg-gray-950 flex flex-col items-center w-full">
      <div className="py-gap-13 px-gap-9 flex flex-col items-center gap-gap-13 w-full sm:px-sidePadding sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(auto,2fr)_minmax(0,1fr)]">
        <div className="flex flex-col items-center gap-gap-5 sm:justify-self-start">
          <p className="font-text-lg-medium uppercase text-white">Contact us</p>
          <p className="font-text-md-medium uppercase text-white">
            015783795780
          </p>
        </div>
        <FooterNewsletter></FooterNewsletter>
        <FooterSocials></FooterSocials>
      </div>
      <FooterTerms></FooterTerms>
      <FooterCopywrite></FooterCopywrite>
    </footer>
  );
}
