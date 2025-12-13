"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ConfirmIcon } from "@/components/svg-icons/ChekoutProsessIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NewPasswordForm from "@/components/forms/authForms/NewPasswordForm";

export default function NewPasswordDialog() {
  const [passwordSet, setPasswordSet] = useState(false);

  function handleSetPassword() {
    setPasswordSet(true);
  }

  return (
    <Dialog open>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Nur für SR</DialogTitle>
        {!passwordSet && (
          <div className="p-gap-11">
            <div className="w-full flex items-start justify-between gap-x-gap-9 mb-gap-11">
              <div className="flex flex-col gap-y-gap-5">
                <p className="font-sm-regular font-notoSerif text-gray-950">
                  Forgot Password
                </p>
                <p className="font-text-sm-medium text-gray-700">
                  Enter your registered email address. we’ll send you a code to
                  reset your password.
                </p>
              </div>
            </div>
            <NewPasswordForm onPasswordSet={handleSetPassword} />
          </div>
        )}
        {passwordSet && (
          <div className="p-gap-11 flex flex-col gap-y-gap-11 items-center">
            <ConfirmIcon />
            <div className="flex flex-col items-center gap-y-gap-5">
              <p className="font-sm-regular text-gray-950 text-center font-notoSerif">
                Successfully Reset Password
              </p>
              <p className="font-text-sm-medium text-gray-700 text-center">
                You changed your password.
              </p>
            </div>
            <Link href={"/login"} className="w-full">
              <Button
                size={"xl"}
                variant={"fill"}
                className="uppercase w-full font-text-md-medium"
              >
                Back to Login
              </Button>
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
