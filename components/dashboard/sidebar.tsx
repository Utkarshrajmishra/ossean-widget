"use client"
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AddProjectDialog from "../onboarding/create-project";

const Sidebar = () => {
  const [openAddProject, setOpenAddProject]=useState(false)
  return (
    <section className="h-screen flex flex-col items-center gap-4 w-[50px] bg-transparent py-4 border-r border-neutral-400">
      <Image
        src="/black-logo.svg"
        alt="Logo"
        width={35}
        height={35}
        className="border border-neutral-400 rounded-md"
      />

      <div className="border-b border-neutral-400 w-full" />

      <div onClick={()=>setOpenAddProject(true)} className="p-2 bg-neutral-900 border border-neutral-500 rounded-md cursor-pointer hover:bg-neutral-800 transition">
        <Plus className="text-white w-4 h-4" />
      </div>
      <AddProjectDialog openAddProject={openAddProject} setOpenAddProject={setOpenAddProject}/>
    </section>
  );
};

export default Sidebar;