import { MessageCircleWarning } from "lucide-react";
import { Megaphone } from "lucide-react";
import { Star } from "lucide-react";
import { NotebookText } from "lucide-react";
import { title } from "process";
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

export const features = [
  {
    image:
      "https://images.unsplash.com/photo-1607287465964-f2169bc4fc60?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Users Are Your North Star",
    desc: "They’ll tell you what’s working, what’s not, and what they hope you’ll create next. Every piece of feedback is a map to your product’s best version.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1639959019385-7ed4c7f421a8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mistakes Are Part of the Journey",
    desc: "Bugs happen, but what matters is how quickly you fix them. Your users will stick with you if they feel heard and valued.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605999782615-3e0ab8638e6a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Big Ideas Don’t Come from the Boardroom",
    desc: "Some of your most game-changing features will come straight from your users. Give them a voice, and they’ll help you innovate.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526465092398-1780ced1252d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Success Feels Better When You Share It️",
    desc: "When you nail the experience — when your users are happy — that’s when your ratings soar, your community grows, and your vision becomes a reality.",
  },
];
