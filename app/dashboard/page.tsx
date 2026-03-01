import Sidebar from "@/components/dashboard/sidebar";
import SidebarMenu from "@/components/dashboard/sidebar-menu";
import { TooltipProvider } from "@/components/ui/tooltip";

const Dashboard = () => {
  return (
    <section className="h-screen  font-sans  flex w-screen overflow-hidden bg-white">
     <Sidebar/>
      <SidebarMenu />
    </section>
  );
};

export default Dashboard;
