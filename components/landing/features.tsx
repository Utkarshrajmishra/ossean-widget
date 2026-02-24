"use client"

import { features } from "@/config/widget";
import Wrapper from "../common/wrapper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Features = () => {
  const [index, setIndex]=useState(0)

 useEffect(() => {
    if (!features?.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2000); 

    return () => clearInterval(id); 
  }, []);

  if (!features?.length) return null;

  return (
    <section className="flex justify-center my-34 py-6">
      <Wrapper className="flex gap-4 font-host justify-between">
        <div className={cn('flex flex-col gap-4',(index%2===0 && 'flex-row-reverse'))}>
          <p className="text-4xl font-fasthand text-neutral-400">Hear it out</p>
          <p className="text-4xl font-[550]">Why Collect Insights?</p>
          {
            features?.map((item, idx)=>(
              <div>
              <p className={cn('text-3xl  font-san', idx===index?'text-neutral-800':'text-neutral-500')}>{item.title}</p>
             <p>
             {features[index].desc}
            </p>
            </div>
            ))
          }
        </div>
        {/* <div className="relative">
          <Image
            src={features[index].image}
            alt="Background"
            width={400}
            height={500}
            className="rounded-xl  h-auto bg-cover relative"
          />
          <div className="absolute border border-neutral-800  text-2xl tracking-tight font-host top-[20%] text-neutral-200 rounded-lg left-[10%] bg-white text-neutral-800 w-[80%] p-4 top-0">
           
          </div>
        </div> */}
      </Wrapper>
    </section>
  );
};

export default Features;
