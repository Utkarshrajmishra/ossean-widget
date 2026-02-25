import Sidebar from "@/components/dashboard/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const Dashboard = () => {
  return (
    <section className="h-screen  flex w-screen overflow-hidden bg-neutral-50">
      <TooltipProvider>
        {" "}
        <Sidebar />
        <section className="p-8">
        <div className="w-[1400px] h-full border border-neutral-300 rounded-lg bg-white"></div>
        
        </section>
      </TooltipProvider>
    </section>
  );
};

export default Dashboard;
