"use client"
import { sidebar } from "@/config/sidebar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
const SidebarMenu = () => {
  const [menu, setMenu]=useState(0)
  return (
    <section className="w-[220px] justify-between  gap-4 flex flex-col py-3 font-sans border-r border-neutral-400">
      <div className="flex flex-col px-3 gap-3">
        <div>
          <p className="text-xs text-neutral-600">Projects</p>
          <div className=" bg-zinc-200 flex justify-between items-center p-2 mt-2 rounded-sm border border-gray-400">
            <p className="text-sm text-neutral-700">Peerlist</p>
            <ChevronDown className="text-neutral-700 size-3" />
          </div>
        </div>
        <div>
          <p className="text-xs text-neutral-600">Menu</p>
          <div className="flex flex-col gap-3 mt-2">
            {sidebar?.map((item, index) => (
              <div className={cn(" hover:bg-neutral-100 hover:text-neutral-700 rounded-sm items-center p-2 flex gap-2", menu===index? 'text-neutral-700 bg-zinc-200 border hover:bg-gray-200 border-neutral-400':'text-neutral-500 ')}>
                <item.icon className="size-4.5 " />
                <p className="text-sm ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-18 gap-3 w-full flex items-center justify-center border-t border-neutral-400">
        <div className="h-12 w-12 bg-neutral-950 rounded-full"></div>
        <div className="text-sm text-neutral-700">
         
          <p>Utkarsh Raj Mishra</p>
          <p className="text-neutral-500">Admin</p>
        </div>
      </div>
    </section>
  );
};

export default SidebarMenu;
