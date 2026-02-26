import Sidebar from "@/components/dashboard/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const Dashboard = () => {
  return (
    <section className="h-screen font-sans  flex w-screen overflow-hidden bg-neutral-50">
      <TooltipProvider>
        {" "}
        <Sidebar />
        <section className="p-8">
        <div className="w-[1400px] flex p-8 gap-4  h-full border border-neutral-300 rounded-lg bg-white">

        <div className="h-full w-[700px] bg-neutral-50 rounded-lg border border-neutral-300">
            <div className="border-b h-9 px-2 flex items-center border-neutral-300 ">
                <p className="text-neutral-600 font-[550] ">Inbox</p>
            </div>
        </div>
                <div className="h-full w-[700px] bg-neutral-50 rounded-lg border border-neutral-300"></div>


        </div>
        
        </section>
      </TooltipProvider>
    </section>
  );
};

export default Dashboard;
