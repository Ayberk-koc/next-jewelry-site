"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm, useFormState, useWatch } from "react-hook-form";
import z from "zod";

const newsLetterSchemaForm = z.object({
  email: z.email({ error: "Bitte valide email addresse eingeben!" }),
});
type NewsLetterFormType = z.infer<typeof newsLetterSchemaForm>;

export default function NewsLetterForm() {
  const [formMessage, setFormMessage] = useState<string>();
  const currentErrorTimeoutRef = useRef<NodeJS.Timeout>(null);

  const form = useForm<NewsLetterFormType>({
    resolver: zodResolver(newsLetterSchemaForm),
    defaultValues: { email: "" },
  });
  const { errors } = useFormState<NewsLetterFormType>({
    control: form.control,
  });

  const inputValues = useWatch<NewsLetterFormType>({ control: form.control });

  function handleChangeInput(val: string) {
    console.log("on change angekommen");
    form.setValue("email", val);
  }

  async function submitForm() {
    console.log("angekommen");
    const ok = await form.trigger("email");

    if (ok) {
      form.setValue("email", "");
      //hier muss die logik implementieren! Auch error message zeigen, wenn email bereits drinne ist!
      setFormMessage("Your email was put inside our newsletter");
      setTimeout(() => {
        setFormMessage(undefined);
      }, 3000);
    } else {
      if (currentErrorTimeoutRef.current) {
        clearTimeout(currentErrorTimeoutRef.current);
      }
      currentErrorTimeoutRef.current = setTimeout(() => {
        form.clearErrors();
      }, 3000);
    }
  }

  const errorMessage = errors.email?.message;
  const messageToDisplay = errorMessage ?? formMessage;

  return (
    <div className="flex flex-col items-center px-gap-13 py-gap-11 border-y border-gray-800 sm:border-y-0 sm:border-x">
      <h1 className="font-md-regular text-white font-notoSerif mb-gap-5 text-center">
        Lets Get In Touch!
      </h1>
      <p className="font-text-md-medium text-gray-400 leading-[24px] text-center mb-gap-13">
        Whats inside? Exclusive sales, new arrivals & much more.
      </p>
      <div className="relative">
        <div className="flex items-center">
          <input
            placeholder="Email Address"
            type="text"
            className="self-stretch focus:outline-none placeholder:font-text-md-medium text-white/50 border border-gray-600 pl-3"
            value={inputValues.email}
            onChange={(e) => handleChangeInput(e.target.value)}
          ></input>
          <button
            className="py-gap-7 px-gap-11 bg-white text-gray-950 font-text-sm-medium cursor-pointer"
            onClick={submitForm}
          >
            SIGN UP
          </button>
        </div>
        {messageToDisplay && (
          <p
            className={cn(
              errorMessage ? "text-error-500" : "text-gray-200",
              "absolute"
            )}
          >
            {messageToDisplay}
          </p>
        )}
      </div>
    </div>
  );
}
