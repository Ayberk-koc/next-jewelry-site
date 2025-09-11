import CurrencyDropDown from "./smallComponents/CurrencyDropDown";

export default function Header() {
  return (
    <>
      <header
        className="flex justify-between items-center py-gap-11 w-full px-gap-9 sm:px-sidePadding"
        id="header"
      >
        <button className="xl:hidden w-[104px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 8H12M7 12H17M12 16H17"
              stroke="#06100D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="hidden xl:flex items-center gap-gap-11">
          <li className="header-list-element">Rings</li>
          <li className="header-list-element">Bracelet</li>
          <li className="header-list-element">Nacklace</li>
          <li className="header-list-element">Earring</li>
          <li className="header-list-element">Shop</li>
        </ul>
        {/* das logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="hidden sm:inline"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.341 10.4531H53.0567L64 21.3822L32.0074 53.3331L0 21.3675L11.341 10.4531ZM12.2389 12.676L3.17712 21.3969L32.0074 50.1895L60.8523 21.3822L52.1347 12.676H12.2389Z"
            fill="#0C0A09"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.8949 29.9032V12.676H33.1207V29.9032H30.8949ZM11.0035 21.6124L12.5773 20.0406L32.0078 39.4457L51.4382 20.0406L53.0121 21.6124L32.0078 42.5893L11.0035 21.6124Z"
            fill="#0C0A09"
          />
        </svg>
        {/* logo ende */}
        <ul className="flex items-center justify-end gap-gap-9 xl:w-[395px]">
          <div className="hidden xl:block">
            <CurrencyDropDown></CurrencyDropDown>
          </div>

          <li className="header-list-element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
                stroke="#0C0A09"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="header-list-element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.765 4.70229L12 5.52422L11.235 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.315 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
                stroke="#0C0A09"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="header-list-element hidden xl:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#0C0A09"
                strokeLinejoin="round"
              />
              <path
                d="M17 17C15.5186 15.7256 13.8139 15 12 15C10.1861 15 8.48139 15.7256 7 17"
                stroke="#0C0A09"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="3"
                cy="3"
                r="3"
                transform="matrix(1 0 0 -1 9 12)"
                stroke="#0C0A09"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="header-list-element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                stroke="#0C0A09"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6116 3H8.3886C6.43325 3 4.76449 4.41365 4.44303 6.3424L2.77636 16.3424C2.37001 18.7805 4.25018 21 6.72194 21H17.2783C19.75 21 21.6302 18.7805 21.2238 16.3424L19.5572 6.3424C19.2357 4.41365 17.5669 3 15.6116 3Z"
                stroke="#0C0A09"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      </header>
    </>
  );
}
