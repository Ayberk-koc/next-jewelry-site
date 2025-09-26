import { ReactNode } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseSheetIcon } from "@/components/svg-icons/CloseIcons";

function SheetShell({ children }: { children: ReactNode }) {
  return <Sheet>{children}</Sheet>;
}

SheetShell.Trigger = function Trigger({ children }: { children: ReactNode }) {
  return <SheetTrigger asChild>{children}</SheetTrigger>;
};

SheetShell.Content = function Content({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <SheetContent className="p-gap-11">
      <SheetHeader>
        <SheetTitle className="flex justify-between items-center">
          <p className="font-sm-regular font-notoSerif text-gray-950">
            {title}
          </p>
          <SheetClose>
            <CloseSheetIcon />
          </SheetClose>
        </SheetTitle>
      </SheetHeader>
      {children}
    </SheetContent>
  );
};

//muss nur "SheetShell" exportieren, da die anderen functions ja properties von "SheetShell" sind!
export { SheetShell };

// DAS HIER IST JA DIE STRUKTUR DIE ICH HIN KRIEGEN MUSS!! BTW: SO MACHT ES SHADCN AUCH!!
// <Sheet>
//   <SheetTrigger asChild>
//     <Button size={"lg"} variant={"fill"} className="w-fit">
//       <ButtonWithIconWrapper>
//         <FilterIconAlt />
//         <span>FILTER</span>
//       </ButtonWithIconWrapper>
//     </Button>
//   </SheetTrigger>
//   <SheetContent className="p-gap-11">
//     <SheetHeader>
//       <SheetTitle className="flex justify-between items-center">
//         <p className="font-sm-regular font-notoSerif text-gray-950">
//           {title}
//         </p>
//         <SheetClose>
//           <CloseSheetIcon />
//         </SheetClose>
//       </SheetTitle>
//     </SheetHeader>
//     {children}
//   </SheetContent>
// </Sheet>
