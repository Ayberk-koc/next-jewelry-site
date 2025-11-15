function CheckoutAddressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      // className="-mb-[3px]"
    >
      <path
        d="M18 14.9722V8.45845C18 7.44931 17.5503 6.49358 16.7751 5.85527L12.6084 2.42429C11.3814 1.41391 9.61859 1.41391 8.39155 2.42429L4.22488 5.85527C3.4497 6.49359 3 7.44931 3 8.45845V14.9722C3 16.8284 4.49238 18.3332 6.33333 18.3332H14.6667C16.5076 18.3332 18 16.8284 18 14.9722Z"
        strokeLinejoin="round"
        className="stroke-current"
      />
      <path
        d="M8.8335 15H12.1668"
        strokeLinecap="round"
        className="stroke-current"
      />
    </svg>
  );
}

function CheckoutPaymentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      // className="-mb-[3px]"
    >
      <path
        d="M2.1665 5.83333C2.1665 3.99238 3.65889 2.5 5.49984 2.5H15.4998C17.3408 2.5 18.8332 3.99238 18.8332 5.83333V14.1667C18.8332 16.0076 17.3408 17.5 15.4998 17.5H5.49984C3.65889 17.5 2.1665 16.0076 2.1665 14.1667V5.83333Z"
        strokeLinejoin="round"
        className="stroke-current"
      />
      <path
        d="M2.1665 5.8335H18.8332V9.16683H2.1665V5.8335Z"
        strokeLinejoin="round"
        className="stroke-current"
      />
      <path
        d="M7.16667 14.1665H5.5"
        strokeLinecap="round"
        className="stroke-current"
      />
    </svg>
  );
}

function CheckoutReviewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      // className="-mb-[3px]"
    >
      <path
        d="M7.16667 8.33317H13.8333M7.16667 11.6665H13.8333M7.16667 14.9998H10.5M7.16667 3.33317C7.16667 4.25365 7.91286 4.99984 8.83333 4.99984H12.1667C13.0871 4.99984 13.8333 4.25365 13.8333 3.33317M7.16667 3.33317C7.16667 2.4127 7.91286 1.6665 8.83333 1.6665H12.1667C13.0871 1.6665 13.8333 2.4127 13.8333 3.33317M7.16667 3.33317H6.33333C4.49238 3.33317 3 4.82555 3 6.6665V14.9998C3 16.8408 4.49238 18.3332 6.33333 18.3332H14.6667C16.5076 18.3332 18 16.8408 18 14.9998V6.6665C18 4.82555 16.5076 3.33317 14.6667 3.33317H13.8333"
        strokeLinecap="round"
        className="stroke-current"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 6V18M18 12L6 12"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConfirmIcon() {
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="54" cy="54" r="54" fill="#F5F5F4" />
      <circle cx="54" cy="54" r="43" fill="#E7E5E4" />
      <circle cx="54" cy="54" r="32" fill="#0C0A09" />
      <path
        d="M50 54L52.5347 56.2812C52.9662 56.6696 53.6366 56.6101 53.993 56.1519L58 51M54 64C59.5228 64 64 59.5228 64 54C64 48.4772 59.5228 44 54 44C48.4772 44 44 48.4772 44 54C44 59.5228 48.4772 64 54 64Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export {
  CheckoutAddressIcon,
  CheckoutPaymentIcon,
  CheckoutReviewIcon,
  PlusIcon,
  ConfirmIcon,
};
