"use client"

import { sidebar } from "@/config/sidebar"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const SidebarMenu = () => {
  const [menu, setMenu] = useState(0)

  return (
    <section className="h-screen w-[210px] flex flex-col gap-3 px-3 py-4 bg-white border-r border-neutral-300 font-sans">
      
      <p className="font-fasthand text-2xl text-neutral-700">Catchup Dashboard</p>
      
      <div>
        <p className="text-xs text-neutral-600">Project</p>
        <div className="mt-1 py-2 px-2 flex justify-between items-center bg-neutral-50 border border-neutral-300 rounded-md cursor-pointer">
          <p className="text-sm text-neutral-700">Buttonflux</p>
          <ChevronDown className="text-neutral-700 w-4 h-4" />
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <p className="text-xs text-neutral-600">Menu</p>

        <div className="flex flex-col gap-1 mt-1">
          {sidebar?.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setMenu(idx)}
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer hover:bg-neutral-50 transition-colors",
                idx === menu && "border border-neutral-300 bg-neutral-50"
              )}
            >
              <item.icon className="text-neutral-700 w-4 h-4" />
              <p className="text-sm text-neutral-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default SidebarMenu