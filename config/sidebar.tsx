import { VscPinned } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";
import { SlNotebook } from "react-icons/sl";
import { IoEarthOutline } from "react-icons/io5";
import { HiMiniInbox } from "react-icons/hi2";
import { RiAppsLine } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

export const projects = [
  {
    icon: <IoEarthOutline className="size-5 text-neutral-500" />,
    title: "Projects",
  },
];

export const sidebar = [
  {icon: RiAppsLine, title:'Dashboard'},
  { icon: HiMiniInbox , title: "Inbox" },
  {
    icon: VscPinned,
    title: "Pin",
  },
  {
    icon: IoDocumentTextOutline,
    title: "Docs",
  },

  {
    icon: RiSettingsLine,
    title: "Setting",
  },
];
