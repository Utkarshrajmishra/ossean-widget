import { ChevronDown, MoveDown } from "lucide-react";
import Image from "next/image";
import Profile from "../../public/profile.webp"
const Header = () => {
  return (
    <header className="h-[57px] items-center justify-between w-full border-b border-neutral-700 bg-neutral-950 flex  px-4">
      <p className="text-neutral-200 text-lg">Dashboard</p>
      <div className="flex items-center p-1 hover:text-white! text-neutral-400 cursor-pointer hover:bg-neutral-900/50 hover:border border-neutral-800 rounded-md">
      {/* <div className="h-8 w-8 bg-neutral-900 rounded-full"> */}
        <Image src={Profile} width={40} height={50} alt="Profile" className="rounded-full"/>
      {/* </div> */}
      <ChevronDown className=" size-5"/>
      </div>
    </header>
  );
};

export default Header;
