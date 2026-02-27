import { BsInbox } from "react-icons/bs";
import { VscPinned } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";
import { TbSearch } from "react-icons/tb";
import { SlNotebook } from "react-icons/sl";
import { IoEarthOutline } from "react-icons/io5";

export const projects = [
  {
    icon: <IoEarthOutline className="size-5.5 text-neutral-500" />,
    title: "Projects",
  },
];

export const sidebar = [
  { icon: <BsInbox className="size-5.5 text-neutral-500" />, title: "Inbox" },
  {
    icon: <VscPinned className="size-5.5 text-neutral-500" />,
    title: "Pin",
  },
  {
    icon: <SlNotebook className="size-4.5 text-neutral-500" />,
    title: "Docs",
  },

  {
    icon: <VscSettings className="size-5.5 text-neutral-500" />,
    title: "Setting",
  },
];
