import Home from "@/components/dashboard/dashboard";
import Sidebar from "@/components/dashboard/sidebar";
import SidebarMenu from "@/components/dashboard/sidebar-menu";

const Dashboard = () => {
  return (
    <section className="bg-white min-h-screen w-full flex ">
     <Sidebar/>
    <SidebarMenu/>
    <div className="w-full">
      <Home/>
    </div>
    </section>
  );
};

export default Dashboard;