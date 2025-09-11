export default function FooterTerms() {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.841 11.3828H53.5567L64.5 22.3119L32.5074 54.2628L0.5 22.2972L11.841 11.3828ZM12.7389 13.6057L3.67712 22.3266L32.5074 51.1192L61.3523 22.3119L52.6347 13.6057H12.7389Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.3949 30.8329V13.6057H33.6207V30.8329H31.3949ZM11.5035 22.5421L13.0773 20.9703L32.5078 40.3754L51.9382 20.9703L53.5121 22.5421L32.5078 43.519L11.5035 22.5421Z"
            fill="white"
          />
        </svg>
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
