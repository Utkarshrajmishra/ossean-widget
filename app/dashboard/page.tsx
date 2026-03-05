import { PercentagePieChart } from "@/components/chart/percentage-chart";
import { ChartBarInteractive } from "@/components/chart/total-repsonse";
import Home from "@/components/dashboard/dashboard";
import Sidebar from "@/components/dashboard/sidebar";
import SidebarMenu from "@/components/dashboard/sidebar-menu";

const Dashboard = () => {
  return (
    <section className="bg-white h-screen overflow-hidden w-full flex ">
     <Sidebar/>
    <SidebarMenu/>
    <div className="w-full h-screen overflow-y-scroll max-w-7xl p-8">
      <Home/>
      <ChartBarInteractive/>
      <div >
        <PercentagePieChart/>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;