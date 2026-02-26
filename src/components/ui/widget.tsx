import { useState } from "react";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";
import tailwindStyles from "../../index.css?inline";

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(0);

  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="widget fixed bottom-6 right-6">
        {" "}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className={`
           
            bg-neutral-900
            cursor-pointer 
            h-12 w-12 
            rounded-full 
            shadow-lg 
            hover:scale-105
            transition-transform
            duration-300
          
            ${open ? "rotate-180" : "rotate-360"}`}
              aria-label="Provide feedback"
            >
              {open ? (
                <CrossIcon size={20} className="size-6" />
              ) : (
                <Icon size={20} className="size-6" />
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-fit widget   widget rounded-xl border border-gray-200 shadow-md h-fit"
            align="end"
            sideOffset={8}
          >
            <style>{tailwindStyles}</style>
            {menu === 0 && (
              <section className="flex flex-col gap-3  justify-center">
                {Menu?.map((item) => (
                  <div
                    onClick={() => setMenu(item.id)}
                    className="flex items-start gap-3  rounded-lg  transition-colors cursor-pointer"
                  >
                    <div className="mt-0.5  text-neutral-400 size-6">
                      {item.icon}
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[0.83rem] leading-tight text-neutral-700 font-semibold">
                        {item.title}
                      </p>
                      <p className="text-xs text-neutral-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            )}
            {menu !== 0 && (
              <>
                <div className="">
                  <form className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-neutral-700   flex items-center gap-2 font-medium">
                        <div className="size-5 text-sm text-neutral-400">
                          {Menu[menu - 1].icon}
                        </div>
                        {Menu[menu - 1].title}
                      </p>
                      <div onClick={() => setMenu(0)}>
                        {" "}
                        <Cross className="size-5 cursor-pointer" size={4} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        className="h-9 bg-neutral-50 text-sm border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 placeholder:text-gray-400 transition-colors"
                      />
                      <Input
                        id="email"
                        required
                        placeholder="Your email"
                        className="h-9 text-sm bg-neutral-50 border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 placeholder:text-gray-400 transition-colors"
                      />
                      {menu !== 4 ? (
                        <div>
                          <Textarea
                            id="feedback"
                            required
                            rows={4}
                            placeholder={Menu[menu - 1].placeholder || ""}
                            className="
                    w-full min-h-[100px] 
                    resize-none
                    text-sm
                    border-gray-300
                    focus:border-zinc-900 
                    bg-neutral-50
                    focus:ring-1 
                    focus:ring-zinc-900
                    placeholder:text-gray-400
                    transition-colors
                  "
                            maxLength={500}
                          />
                          <div className="text-xs text-gray-500 mt-1 text-right">
                            Maximum 300 characters
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          {[...new Array(5)].map((item, index) => (
                            <Star className="size-5 cursor-pointer text-neutral-500" size={8} />
                          ))}
                         <p className="text-md font-semibold text-neutral-500"> Stars</p>
                        </div>
                      )}
                    </div>
                    {menu !== 4 && (
                      <Button
                        variant="outline"
                        className="
                h-9
                rounded-2xl 
                w-full 
                text-sm
              bg-neutral-50
                font-medium
                transition-colors
              "
                      >
                        <Share size={8} /> Attach a image
                      </Button>
                    )}

                    <Button
                      type="submit"
                      className="
                h-9
                text-sm
                bg-zinc-900/85 
                rounded-2xl 
                w-full 
               font-md
                transition-colors
                hover:bg-zinc-900
              "
                    >
                      Send 
                    </Button>
                  </form>

                  <p className="text-xs text-gray-700 mt-4 text-center">
                    Built with  <span className="font-semibold underline">FeedMeBack</span>
                  </p>
                </div>
              </>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

const Cross = ({ size, className }: { size: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const Icon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
  >
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M16 12h.01" />
  </svg>
);

const Mic = ({ size, className }: { size: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 6v8" />
    </svg>
  );
};

const Star = ({ size, className }: { size: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
};

const ReportBug = ({
  size,
  className,
}: {
  size: number;
  className: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
};

const Notebook = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9.5 8h5" />
      <path d="M9.5 12H16" />
      <path d="M9.5 16H14" />
    </svg>
  );
};

const CrossIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Share = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const Menu = [
  {
    title: "Give Feedback",
    desc: "Share your thoughts & insights.",
    icon: <Mic size={20} className=" " />,
    placeholder: "Leave us your feedback!",
    tag: "feedback",
    id: 1,
  },
  {
    title: "Reports a bug",
    desc: "Help us improve with your catches.",
    icon: <ReportBug size={20} className=" text-neutral-400" />,
    tag: "bug-report",
    placeholder: "Where is the bug that you are experiencing?",
    id: 2,
  },
  {
    title: "Feature Request",
    desc: "Share your heart with us publicly.",
    tag: "feature-request",
    icon: <Notebook size={20} className=" text-neutral-400" />,
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

export default FeedbackWidget;
