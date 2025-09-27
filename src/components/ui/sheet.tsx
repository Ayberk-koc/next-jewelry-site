"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  mobileSide = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  mobileSide?: "top" | "right" | "bottom" | "left";
}) {
  const desktopSide = (() => {
    switch (side) {
      case "right":
        return "min-[700px]:inset-y-0 min-[700px]:right-0 min-[700px]:h-full min-[700px]:border-l min-[700px]:data-[state=open]:slide-in-from-right min-[700px]:data-[state=closed]:slide-out-to-right";
      case "left":
        return "min-[700px]:inset-y-0 min-[700px]:left-0 min-[700px]:h-full min-[700px]:border-r min-[700px]:data-[state=open]:slide-in-from-left min-[700px]:data-[state=closed]:slide-out-to-left";
      case "top":
        return "min-[700px]:inset-x-0 min-[700px]:top-0 md:h-auto min-[700px]:border-b min-[700px]:data-[state=open]:slide-in-from-top min-[700px]:data-[state=closed]:slide-out-to-top";
      case "bottom":
        return "min-[700px]:inset-x-0 min-[700px]:bottom-0 min-[700px]:h-auto min-[700px]:border-t min-[700px]:data-[state=open]:slide-in-from-bottom min-[700px]:data-[state=closed]:slide-out-to-bottom";
    }
  })();

  // Mobile-Seite (< md) – überschreibt die Desktop-Variante
  const mobileSideClasses = (() => {
    switch (mobileSide) {
      case "right":
        return "max-[700px]:inset-y-0 max-[700px]:right-0 max-[700px]:h-full max-[700px]:border-l max-[700px]:data-[state=open]:slide-in-from-right max-[700px]:data-[state=closed]:slide-out-to-right";
      case "left":
        return "max-[700px]:inset-y-0 max-[700px]:left-0 max-[700px]:h-full max-[700px]:border-r max-[700px]:data-[state=open]:slide-in-from-left max-[700px]:data-[state=closed]:slide-out-to-left";
      case "top":
        return "max-[700px]:inset-x-0 max-[700px]:top-0 max-[700px]:h-auto max-[700px]:border-b max-[700px]:data-[state=open]:slide-in-from-top max-[700px]:data-[state=closed]:slide-out-to-top";
      case "bottom":
      default:
        return "max-[700px]:inset-x-0 max-[700px]:bottom-0 max-[700px]:h-[80%] max-[700px]:border-t max-[700px]:data-[state=open]:slide-in-from-bottom max-[700px]:data-[state=closed]:slide-out-to-bottom";
    }
  })();

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          desktopSide,
          mobileSideClasses,
          "min-[700px]:max-w-none w-[500px] max-[700px]:w-full",
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
