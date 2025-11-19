import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { DataTable } from "@/components/dashboard/table";
import { DownloadIcon } from "lucide-react";

const Page = () => {
  return (
    <section className="  font-jakarta bg w-full flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <section className="p-4 bg-gradient-to-br h-full from-[#080808] via-[#0e0b11] via-[#0e0b13] to-[#120f19]">
          <div className="flex gap-4">
            <div className="h-full flex-1 border rounded-lg border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950  p-4">
              <div className="flex justify-between">
                <div >
              <p className="text-neutral-300 text-[0.98rem] font-[570]">
                Last 7 days
              </p>
              <p className="text-[0.9rem]  text-neutral-400 mt-1 ">
                Feedback Summary
              </p>
              </div>
              <button className="cursor-pointer flex gap-1 items-center hover:bg-neutral-800 bg-transparent text-zinc-400 font-light py-0.5 h-fit px-3 rounded-md border border-neutral-700 text-[0.87rem]">
             <DownloadIcon className="size-[14px]
             "/>  Export 
              </button>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="h-full border border-neutral-800 rounded-xl w-full bg-neutral-950 p-4">
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800"></div>
                  <p className="mt-2 text-xl font-semibold text-neutral-200">
                    +120
                  </p>
                  <p className="mt-2 text-neutral-400 text-[0.8rem]">
                    Total Feedbacks
                  </p>
                  <p className="mt-1  text-[0.7rem] text-green-300">
                    +2% from last 7 days
                  </p>
                </div>
                <div className="h-full  rounded-xl border border-neutral-800 w-full bg-neutral-950 p-4">
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800"></div>
                  <p className="mt-2 text-xl font-semibold text-neutral-200">
                    +120
                  </p>
                  <p className="mt-2 text-neutral-400 text-[0.8rem]">
                    Total Feedbacks
                  </p>
                  <p className="mt-1  text-[0.7rem] text-green-300">
                    +2% from last 7 days
                  </p>
                </div>

                <div className="h-full  p-4 border rounded-xl w-full border-neutral-800  bg-neutral-950">
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800"></div>
                  <p className="mt-2 text-xl font-semibold text-neutral-200">
                    +120
                  </p>
                  <p className="mt-2 text-neutral-400 text-[0.8rem]">
                    Total Feedbacks
                  </p>
                  <p className="mt-1  text-[0.7rem] text-green-300">
                    +2% from last 7 days
                  </p>
                </div>
                <div className="h-full p-4 border rounded-xl w-full border-neutral-800  bg-neutral-950">
                  <div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800"></div>
                  <p className="mt-2 text-lg font-semibold text-neutral-200">
                    +120
                  </p>
                  <p className="mt-1 text-neutral-400 text-[0.8rem]">
                    Total Feedbacks
                  </p>
                  <p className="mt-1  text-[0.7rem] text-red-300">
                    -2% from last 7 days
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full flex-1 border rounded-lg border-neutral-800  bg-gradient-to-br from-neutral-900 to-neutral-950"></div>
          </div>

          <div className="pt-[24px]">
          <DataTable/>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Page;
