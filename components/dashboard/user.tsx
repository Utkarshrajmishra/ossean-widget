"use client"
import { Button } from "../ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {ChevronDown, LogOut, Mail, User} from "lucide-react"

export function UserPopover() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') router.push('/')
    }, [status])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="flex items-center gap-2 bg-neutral-950">
                    {
                        session?.user?.image &&
                        <Image src={session?.user?.image} width={35} height={50} alt="Profile" className="rounded-full" />}
                              <ChevronDown className=" size-5"/>


                </Button>
            </PopoverTrigger>
            <PopoverContent className=" text-sm font-jakarta text-neutral-300 bg-neutral-950 border-1 border-neutral-700 p-0">
                <div className="">
                    {session?.user &&
                    <>
                    <div className="font-bold p-2 w-full border-b border-neutral-600">
                        <p>My Account</p>
                    </div>
                        <div className="grid gap-2 space-y-1 ">
                            <div className="flex items-center gap-2 p-2 pb-1">
                                <User className="size-4"/>
                                <p>{session?.user?.name}</p>
                            </div>
                            <div className="flex items-center pb-2 px-2 gap-2 border-b border-neutral-600">
                               <Mail className="size-4"/>
                                <p>{session?.user?.email}</p>
                            </div>
                            <div className="flex cursor-pointer hover:text-white items-center px-2 pb-2 gap-4">
                                <LogOut className="size-4" onClick={()=>signOut()}/> 
                                <p>Logout</p>
                            </div>
                        </div>
                        </>
                    }
                </div>
            </PopoverContent>
        </Popover>
    )
}
