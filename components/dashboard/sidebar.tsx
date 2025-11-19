import Image from "next/image";
import { 
  HardDriveDownload,
  Inbox,
  MessageSquareHeart,
  Settings,
  Wrench,
  FolderCog,
  Bell,
  HelpCircle,
  User,
  Mail,
  LogOut,
  Settings2
} from "lucide-react";
const Sidebar = () => {
 const sidebarOptions = [
  { title: "Installation", link: "", logo: <HardDriveDownload className="size-[19px]" /> },
  { title: "Inbox", link: "", logo: <Inbox className="size-[19px]" /> },
  { title: "Feedback", link: "", logo: <MessageSquareHeart className="size-[19px]" /> },
  { title: "Customize", link: "", logo: <Wrench className="size-[19px]" /> },
  { title: "Customization", link: "", logo: <Settings className="size-[19px]" /> },
  { title: "Projects", link: "", logo: <FolderCog className="size-[19px]" /> },
  { title: "Notifications", link: "", logo: <Bell className="size-[19px]" /> },
  { title: "Help", link: "", logo: <HelpCircle className="size-[19px]" /> },
  { title: "Email", link: "", logo: <Mail className="size-[19px]" /> }
];
  return (
    <aside className="w-[200px] h-screen justify-between  border-r border-neutral-700 bg-neutral-950 flex flex-col">
          <div>            <div className="border-b border-neutral-700 flex justify-center py-4">
        <Image
          src="https://assets.basehub.com/fa068a12/eh1OPrcw6Btwjs67edvOj/logo-white.svg"
          alt="Logo"
          height={100}
          width={100}
        />
      </div>

      <ul className="space-y-4 p-4">
        {sidebarOptions.map((option) => (
          <li key={option.title}>
            <a
              href={option.link}
              className="hover:bg-neutral-900 hover:text-neutral-300 transition-colors hover hover:border-1 border-0 border-neutral-800 flex items-center gap-2 cursor-pointer text-zinc-500 font-light py-2 rounded-md text-[0.98rem] px-3"
            >
                {option.logo}
              {option.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
        <div className="border-t border-neutral-700 p-4 flex flex-col gap-3">
                    <p className="hover:bg-neutral-900 hover:text-neutral-300 transition-colors hover hover:border-1 border-0 border-neutral-800 flex items-center gap-2 cursor-pointer text-zinc-500 font-light py-2 rounded-md text-[0.98rem] px-3">
                     <User className="size-[19px]"/>
                      Profile</p>

                    <p className="hover:bg-neutral-900 hover:text-neutral-300 transition-colors hover hover:border-1 border-0 border-neutral-800 flex items-center gap-2 cursor-pointer text-zinc-500 font-light py-2 rounded-md text-[0.98rem] px-3">
                      <Settings2 className="size-[19px]"/>
                      Setting</p>

          <p className="hover:bg-neutral-900 hover:text-neutral-300 transition-colors hover hover:border-1 border-0 border-neutral-800 flex items-center gap-2 cursor-pointer text-zinc-500 font-light py-2 rounded-md text-[0.98rem] px-3">
            <LogOut className="size-[19px]"/>
            Logout</p>
        </div>
    </aside>
  );
};

export default Sidebar;
