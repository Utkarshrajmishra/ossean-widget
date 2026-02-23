import { MessageCircleWarning } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Star } from "lucide-react";
import { NotebookText } from "lucide-react";
const Menu = [
  {
    title: "Give Feedback",
    desc: "Share your thoughts & insights.",
    icon: <Megaphone size={20} className=" " />,
    placeholder: "Leave us your feedback!",
    tag: "feedback",
    id: 1,
  },
  {
    title: "Reports a bug",
    desc: "Help us improve with your catches.",
    icon: <MessageCircleWarning size={20} className=" text-neutral-400" />,
    tag: "bug-report",
    placeholder: "Where is the bug that you are experiencing?",
    id: 2,
  },
  {
    title: "Feature Request",
    desc: "Share your heart with us publicly.",
    tag: "feature-request",
    icon: <NotebookText size={20} className=" text-neutral-400" />,
    placeholder: "What feature are you looking for?",
    id: 3,
  },
  {
    title: "Rate your experience",
    tag: "rating",
    desc: "Rate your quality level if interaction.",
    icon: <Star size={20} className=" text-neutral-400" />,
    id: 4,
  },
];
