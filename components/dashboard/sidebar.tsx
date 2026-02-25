import Image from "next/image"
import { sidebar } from "@/config/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

const Sidebar=()=>{
    return(
        <section className="h-screen border-r  py-6 border-neutral-300 bg-neutral-50 w-[80px] flex flex-col justify-between items-center ">
            <section className="flex flex-col gap-5">
            <Image src="/black-logo.svg" alt="Logo" height={40} width={40}/>
           <section className=" flex flex-col gap-5">
            {
                sidebar?.map((item, index)=>(
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                    <div className="h-10 w-10   flex items-center justify-center border rounded-md border-1.5 border-neutral-400">
                       {item.icon}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-500/90">
                        <p>{item.title}</p>
                    </TooltipContent>
                    </Tooltip>
                ))
            }
            </section>
            </section>
            <section className="gap-4 flex flex-col">
             
                <div className="h-10 w-10 rounded-full bg-neutral-900"></div>
            </section>
        </section>
    )
}

export default Sidebar