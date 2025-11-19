import { HardDriveDownload, Inbox, MessageSquareHeart } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const sidebarOptions = [
    { title: "Installation", link: "", logo:<HardDriveDownload className="size-[19px]"/> },
    { title: "Inbox", link: "" , logo:<Inbox className="size-[19px]"/>},
    { title: "Feedback", link: "",logo: <MessageSquareHeart className="size-[19px]"/> },
    { title: "Customize", link: "" , logo: <MessageSquareHeart className="size-[19px]"/>},
    { title: "Customization", link: "", logo: <MessageSquareHeart className="size-[19px]"/> },
  ];

  return (
    <aside className="w-[200px] h-screen border-r border-neutral-700 bg-neutral-950 flex flex-col">
            <div className="border-b border-neutral-700 flex justify-center py-4">
        <Image
          src="https://assets.basehub.com/fa068a12/eh1OPrcw6Btwjs67edvOj/logo-white.svg"
          alt="Logo"
          height={100}
          width={100}
        />
      </div>

      <ul className="space-y-6 p-4">
        {sidebarOptions.map((option) => (
          <li key={option.title}>
            <a
              href={option.link}
              className="hover:bg-neutral-800 flex items-center gap-2 cursor-pointer text-zinc-300 font-light py-2 rounded-md text-[0.98rem] px-2"
            >
                {option.logo}
              {option.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
