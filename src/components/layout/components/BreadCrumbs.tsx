"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

function hide(s: string) {
  return s.startsWith("(") || ["en", "de"].includes(s) || /^\d+$/.test(s);
}

function toLabel(seg: string) {
  const s = decodeURIComponent(seg).replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Breadcrumbs() {
  const path = usePathname();

  const pathArr = path.split("/").filter(Boolean);
  const segments = pathArr.filter((seg) => !hide(seg));

  let accumulator = "";
  const crumbs = segments.map((seg) => {
    accumulator += "/" + seg;
    return { href: accumulator, label: toLabel(seg) };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="font-text-sm-medium text-gray-950 uppercase"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {crumbs.map((link, i) => {
          const last = i === crumbs.length - 1;
          return (
            <Fragment key={link.label}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {last ? (
                  <BreadcrumbPage className="font-text-sm-medium text-gray-950 uppercase">
                    {link.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={link.href}
                      className="font-text-sm-medium text-gray-950 uppercase"
                    >
                      {link.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
