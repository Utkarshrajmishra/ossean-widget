import Sidebar from "@/components/dashboard/sidebar";
import SidebarMenu from "@/components/dashboard/sidebar-menu";

const Dashboard = () => {
  return (
    <section className="bg-neutral-900 min-h-screen w-full flex ">
       <Sidebar/> 
       <SidebarMenu/>
    </section>
  );
};

export default Dashboard;