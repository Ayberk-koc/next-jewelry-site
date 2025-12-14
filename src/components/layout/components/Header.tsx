import { cn } from "@/lib/utils";
import {
  HeaderBagIcon,
  HeaderProfileIcon,
  HeaderHeartIcon,
  HeaderSearchIcon,
  LogoIcon,
  ExpandSheetIcon,
} from "@/components/svg-icons/HeaderIcons";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "bg-white/60 backdrop-blur-md backdrop-saturate-150",
        "grid grid-cols-[1fr_auto_1fr] items-center",
        "py-gap-11 w-full layout-container-x",
        className
      )}
      // id="header"
    >
      <div>
        <button className="xl:hidden w-[104px] cursor-pointer">
          <ExpandSheetIcon />
        </button>
        <ul className="hidden xl:flex items-center gap-gap-11">
          <li className="header-list-element">Rings</li>
          <li className="header-list-element">Bracelet</li>
          <li className="header-list-element">Nacklace</li>
          <li className="header-list-element">Earring</li>
          <li className="header-list-element">Shop</li>
        </ul>
      </div>
      <LogoIcon />
      <ul className="flex items-center justify-end gap-gap-9 xl:w-[395px] justify-self-end">
        <li className="header-list-element">
          <HeaderSearchIcon />
        </li>
        <li className="header-list-element">
          <HeaderHeartIcon />
        </li>
        <li className="header-list-element hidden xl:block">
          <HeaderProfileIcon />
        </li>
        <li className="header-list-element">
          <HeaderBagIcon />
        </li>
      </ul>
    </header>
  );
}
