"use client";

import { Button } from "@/components/ui/button";

export default function ReserPasswordConfirmForm() {
  //in den "x" button noch machen, dass ich damit zurück auf login page komme!
  //mit "send link" knopf mache, dass ich auf bestätigungs-modal komme. Eine wo steht, dass email
  //verschickt wurde!
  return (
    <div className="p-gap-9 sm:p-gap-11 flex flex-col space-y-gap-11 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="12" fill="#0C0A09" />
          <path
            d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col space-y-gap-5 items-center">
        <p className="font-sm-regular text-gray-950 font-notoSerif text-center">
          Email send
        </p>
        <p className="font-text-sm-medium text-gray-700 text-center">
          We send you a email to change your password.
        </p>
      </div>

      <Button
        type="button"
        size={"xl"}
        className="w-full uppercase font-text-md-medium"
      >
        Back to login
      </Button>
    </div>
  );
}
