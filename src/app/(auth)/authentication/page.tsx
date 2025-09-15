import ForgotPasswordForm from "@/components/forms/authenticationForms/ForgotPasswordForm";
import LoginRegisterSwitch from "@/components/forms/authenticationForms/LoginRegisterSwitch";
import NewPasswordForm from "@/components/forms/authenticationForms/NewPasswordForm";
import PasswordUpdateSuccessForm from "@/components/forms/authenticationForms/PasswordUpdateSuccessForm";
import ReserPasswordConfirmForm from "@/components/forms/authenticationForms/ResetPasswordConfirmForm";
import Image from "next/image";

//bubbling errors! Muss fixen, dass ich wieder klicken kann!
export default function LoginPage() {
  return (
    <section className="bg-gray-300 relative">
      <Image
        src={"/images/Test_img.png"}
        alt=""
        fill //hier fill -> display absolut
        className="object-[50%_50%] object-cover" //gute tailwind-classes für day layout!
      ></Image>
      {/* sobald screen breiter als login-form -> mache items-center! Deswegen 501px! */}
      <div className="min-h-screen flex justify-center items-end min-[501px]:items-center">
        <div className="w-[500px] bg-white z-10">
          {/* <ForgotPasswordForm></ForgotPasswordForm> */}
          <LoginRegisterSwitch></LoginRegisterSwitch>
          {/* <NewPasswordForm></NewPasswordForm> */}
        </div>
      </div>
    </section>
  );
}
