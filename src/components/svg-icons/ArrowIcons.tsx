function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
    >
      <path
        d="M7.66667 14.6667L1 8.00008M1 8.00008L7.66667 1.33342M1 8.00008L59.5 8.00008"
        stroke="#A8A29E"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
    >
      <path
        d="M52.3333 14.6667L59 8.00008M59 8.00008L52.3333 1.33342M59 8.00008L0.5 8.00008"
        stroke="#0C0A09"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowLeftRight() {
  return (
    <span className="flex justify-between items-center space-x-[24px] w-fit">
      <ArrowLeft />
      <ArrowRight />
    </span>
  );
}

function DownArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="group-data-[state=open]:rotate-180 transition duration-200"
    >
      <path
        d="M7 10L12 14L17 10"
        stroke="#0C0A09"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowLeft, ArrowRight, ArrowLeftRight, DownArrow };
