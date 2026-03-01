import { Plus } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <section className="h-screen flex flex-col items-center gap-4 w-[50px] bg-neutral-100 py-4 border-r border-neutral-300">
      <Image
        src="https://cdn.prod.website-files.com/684d582f1c52bdf38cbb5c8d/6853cb664f26aa121f574c6e_qatchup-logo.svg"
        alt="Logo"
        width={28}
        height={28}
      />

      <div className="border-b border-neutral-300 w-full" />

      <div className="p-2 bg-neutral-900 rounded-md cursor-pointer hover:bg-neutral-800 transition">
        <Plus className="text-white w-4 h-4" />
      </div>
    </section>
  );
};

export default Sidebar;