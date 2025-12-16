"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, LoaderCircle } from "lucide-react";
import Wrapper from "./Wrapper";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
const Header = () => {
  const router=useRouter()
  const [open, setOpen] = useState(false);
  const {data: session, status}=useSession()
  const [loading, setLoading]=useState<boolean>(false)
  const handleSignIn=async()=>{
    setLoading(true)
    try{
   await  signIn('google')
   }
   catch(err){
    setLoading(false)
    }
  }

  useEffect(()=>{
    if(status==='authenticated') router.push('/dashboard/78454')
  },[status])

  return (
    <nav className="w-full font-jakarta bg-neutral-950 border-b sticky top-0 left-0 z-50 border-neutral-800 flex  backdrop-blur-md h-fit justify-center px-2 md:px-0">
      <Wrapper>
        <header className="py-4 flex justify-between items-center">
          <img
            src="https://assets.basehub.com/fa068a12/eh1OPrcw6Btwjs67edvOj/logo-white.svg"
            alt="Logo"
            width={121}
            height={12}
          />

          <div className="hidden md:flex gap-6 text-zinc-200">
            {["Features", "Pricing", "Blog", "Changelog"].map((item) => (
              <p
                key={item}
                className="hover:bg-neutral-800 cursor-pointer text-zinc-300 font-light py-1 px-3 rounded-full text-[0.9rem]"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <button onClick={handleSignIn} className="cursor-pointer bg-neutral-800 text-zinc-200 font-light h-8 flex items-center justify-center w-18 rounded-full border border-neutral-700 text-[0.9rem]">
             {loading? <div className="animate-spin ">
              <LoaderCircle className="size-5"/>
             </div> :'Log In'}
            </button>
            <button className="bg-purple-800 py-1 px-3 font-light text-zinc-200 rounded-full border border-neutral-800 text-[0.9rem]">
              Get started today
            </button>
          </div>

          <button
            className="md:hidden text-zinc-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {open && (
          <div className="absolute left-0 right-0 top-full backdrop-blur-3xl
           bg-neutral-950/60 border-b border-neutral-800 md:hidden mt-0">
            <div className="flex flex-col gap-4 text-center px-5 py-4">
              <div className="flex flex-col gap-3">
                {["Features", "Pricing", "Blog", "Changelog"].map((item) => (
                  <p
                    key={item}
                    className="hover:bg-neutral-800 cursor-pointer text-zinc-300 font-light py-2 rounded-full text-[0.95rem]"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {
                  status==='authenticated'?
                  <>
                  <p>{session?.user?.name}</p>
                  <button className="cursor-pointer bg-neutral-800 text-zinc-200 font-light py-2 rounded-full border border-neutral-700 text-[0.95rem]">
                  Log Out
                </button> </>:
                  <>
                <button onClick={handleSignIn}  className="cursor-pointer bg-neutral-800 text-zinc-200 font-light py-2 rounded-full border border-neutral-700 text-[0.95rem]">
                  Log In
                </button>
                <button type="submit" className="cursor-pointer bg-purple-800 py-2 font-light text-zinc-200 rounded-full border border-neutral-800 text-[0.95rem]">
                  Get started today
                </button>
                </>
                }
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

export default Header;