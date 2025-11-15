import {
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  MastercardIcon,
  DiscoverIcon,
  PayPalIcon,
  KlarnaIcon,
  VisaIcon,
  AmexIcon,
  LogoIconWhite,
} from "@/components/svg-icons/FooterIcons";
import NewsLetterForm from "@/components/forms/NewsLetterForm";

function FooterCopywrite() {
  return (
    <div className="flex flex-col space-y-gap-9 py-gap-9 px-gap-9 border-t border-gray-800 w-full">
      <p className="font-text-md-medium text-white text-center">
        Copyright © 2024 gemjewel, All Rights Reserved.
      </p>
      <ul className="flex gap-gap-5 justify-center">
        <li className="cursor-pointer">
          <KlarnaIcon />
        </li>
        <li className="cursor-pointer">
          <VisaIcon />
        </li>
        <li className="cursor-pointer">
          <PayPalIcon />
        </li>
        <li className="cursor-pointer">
          <AmexIcon />
        </li>
        <li className="cursor-pointer">
          <DiscoverIcon />
        </li>
        <li className="cursor-pointer">
          <MastercardIcon />
        </li>
      </ul>
    </div>
  );
}

function FooterSocials() {
  return (
    <div className="flex flex-col gap-gap-5 sm:justify-self-end">
      <p className="text-center font-text-lg-medium text-white">
        SOCIAL NETWORKS
      </p>
      <ul className="flex gap-[24px] justify-center">
        <li className="cursor-pointer">
          <FacebookIcon />
        </li>
        <li className="cursor-pointer">
          <InstagramIcon />
        </li>
        <li className="cursor-pointer">
          <TwitterIcon />
        </li>
        <li className="cursor-pointer">
          <YoutubeIcon />
        </li>
      </ul>
    </div>
  );
}

function FooterTerms() {
  return (
    <div className="px-gap-9 py-gap-5 flex flex-col space-y-gap-9 items-center w-full sm:flex-row sm:justify-between sm:px-sidePadding sm:space-y-0">
      <div className="flex flex-col space-y-gap-9 items-center sm:flex-row sm:space-y-0 sm:space-x-gap-11">
        <ul className="flex space-x-gap-11 justify-center">
          <li>
            <button className="text-white cursor-pointer uppercase font-text-md-medium">
              Rings
            </button>
          </li>
          <li>
            <button className="text-white cursor-pointer uppercase font-text-md-medium">
              Bracelets
            </button>
          </li>
          <li>
            <button className="text-white cursor-pointer uppercase font-text-md-medium">
              About Us
            </button>
          </li>
        </ul>
        <ul className="flex space-x-gap-11 justify-center">
          <li>
            <button className="text-white cursor-pointer uppercase font-text-md-medium">
              Shipping
            </button>
          </li>
          <li>
            <button className="text-white cursor-pointer uppercase font-text-md-medium">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <LogoIconWhite />
      </div>
      <div className="flex items-center justify-center gap-gap-11">
        <button className="text-white text-center font-text-md-medium uppercase cursor-pointer">
          TERMS & CONDITIONS
        </button>
        <button className="text-white text-center font-text-md-medium uppercase cursor-pointer">
          PRIVACY POLICY
        </button>
      </div>
    </div>
  );
}

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
        <NewsLetterForm />
        <FooterSocials />
      </div>
      <FooterTerms />
      <FooterCopywrite />
    </footer>
  );
}
