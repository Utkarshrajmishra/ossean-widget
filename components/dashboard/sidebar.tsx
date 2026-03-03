import { Plus } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <section className="h-screen flex flex-col items-center gap-4 w-[50px] bg-neutral-900 py-4 border-r border-neutral-700">
      <Image
        src="/black-logo.svg"
        alt="Logo"
        width={35}
        height={35}
        className="border border-neutral-700 rounded-md"
      />

      <div className="border-b border-neutral-700 w-full" />

      <div className="p-2 bg-neutral-800 border border-neutral-700 rounded-md cursor-pointer hover:bg-neutral-800 transition">
        <Plus className="text-white w-4 h-4" />
      </div>
    </section>
  );
};

export default Sidebar;