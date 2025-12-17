import { ChevronDown, MoveDown } from "lucide-react";
import Image from "next/image";
import Profile from "../../public/profile.webp"
import { UserPopover } from "./user";
const Header = () => {
  return (
    <header className="h-[57px] items-center justify-between w-full border-b border-neutral-700 bg-neutral-950 flex  px-4">
      <p className="text-neutral-200 text-lg">Dashboard</p>
      <div className="flex items-center p-1 hover:text-white! text-neutral-400 cursor-pointer hover:bg-neutral-900/50 hover:border border-neutral-800 rounded-md">
    <UserPopover/>
      </div>
    </header>
  );
};

export default Header;
