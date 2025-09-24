"use client";

import { useState, useRef, useEffect } from "react";

export default function HeaderShell({
  children,
  overlay = true,
}: {
  children: React.ReactNode;
  overlay?: boolean;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [isAbsolute, setIsAbsolute] = useState(true); //wenn du willst, dass der header nicht über dem content liegt, mache hier einfach relative statt absolute!!!

  const latestScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    // Messen der Header-Höhe beim ersten Rendern und bei Größenänderungen
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === headerRef.current) {
          const height = entry.contentRect.height;
          setHeaderHeight(height);
        }
      }
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
      // Initiale Höhe setzen
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > latestScrollY.current) {
            if (currentScrollY > headerHeight) {
              setShowHeader(false);
            } else {
              setIsAbsolute(true);
            }
          }
          // Nach oben scrollen = Header zeigen
          else if (currentScrollY < latestScrollY.current) {
            setShowHeader(true);
            if (currentScrollY > headerHeight) {
              setIsAbsolute(false);
            }
          }

          latestScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    }

    latestScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  //"absolute" : "fixed"  wenn es overlay haben soll & "relative" : "sticky top-0" wenn es im doc flow bleiben soll.
  const overlayModeClass = overlay
    ? ["absolute", "fixed"]
    : ["relative", "sticky top-0"];

  const headerClass = `z-10 transition 1.3s ease-in-out w-full ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  } ${isAbsolute ? overlayModeClass[0] : overlayModeClass[1]} `;

  //die children dürfen nicht sowas wie "fixed oder absolut oder relative" etc haben!!!
  return (
    <div id="header" ref={headerRef} className={headerClass}>
      {children}
    </div>
  );
}
