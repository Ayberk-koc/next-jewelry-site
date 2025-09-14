"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function LoginRegisterSwitch() {
  const [authComponent, setAuthComponent] = useState<"login" | "register">(
    "login"
  );

  function handleSwitchAuthComponent() {
    setAuthComponent((prevState) =>
      prevState === "login" ? "register" : "login"
    );
  }

  return (
    <>
      {authComponent === "login" && (
        <LoginForm onChangeAuth={handleSwitchAuthComponent}></LoginForm>
      )}
      {authComponent === "register" && (
        <RegisterForm onChangeAuth={handleSwitchAuthComponent}></RegisterForm>
      )}
    </>
  );
}
