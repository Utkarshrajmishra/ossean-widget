import Sidebar from "@/components/dashboard/sidebar";
import SidebarMenu from "@/components/dashboard/sidebar-menu";
import Home from "@/components/dashboard/dashboard";
const Dashboard = () => {
  return (
    <section className="h-screen  font-sans  flex w-screen overflow-hidden bg-white">
     <Sidebar/>
      <SidebarMenu />
      <div className="w-full">
      <Home/>
      </div>
    </section>
  );
};

export default Dashboard;
