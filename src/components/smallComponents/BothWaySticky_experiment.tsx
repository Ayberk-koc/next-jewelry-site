"use client";
//Die component ist noch nicht fertig!
//Erst vorläufig!!
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function BothWayStickyShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const lastYScroll = useRef<number>(0);
  const [stickyDir, setStickyDir] = useState<"top" | "bottom">("top");

  useEffect(() => {
    lastYScroll.current = window.scrollY;

    function checkScrollDir() {
      const currentYScroll = window.scrollY;

      if (currentYScroll < lastYScroll.current) {
        setStickyDir("bottom");
      } else {
        setStickyDir("top");
      }

      lastYScroll.current = window.scrollY;
    }

    window.addEventListener("scroll", checkScrollDir);

    return () => {
      window.removeEventListener("scroll", checkScrollDir);
    };
  });

  return (
    <div
      className={cn(
        "sticky",
        className,
        stickyDir === "top" ? "top-0" : "bottom-0"
      )}
    >
      {children}
    </div>
  );
}
