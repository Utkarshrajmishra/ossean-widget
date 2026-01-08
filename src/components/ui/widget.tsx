import { useState } from "react";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";
import tailwindStyles from "../../index.css?inline";
const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted");
    setOpen(false);
  };

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
          
            ${open ? "rotate-180" : "rotate-268"}`}
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
            className="w-96 widget p-0 widget rounded-xl border border-gray-200 shadow-xl h-fit"
            align="end"
            sideOffset={8}
          >
            <style>{tailwindStyles}</style>

            {/* Header */}
            <div className="bg-zinc-900/90 rounded-t-xl w-full p-4 h-fit">
              <p className="text-zinc-50 text-lg font-medium">
                Your feedback matters to us!
              </p>
              <p className="text-sm text-zinc-400">
                Help us improve by sharing your experience.
              </p>
            </div>

            {/* Content */}
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="h-10 text-sm bg-neutral-50 border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 placeholder:text-gray-400 transition-colors"
                  />
                  <Input
                    id="email"
                    placeholder="Your email"
                    className="h-10 text-sm bg-neutral-50 border-gray-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 placeholder:text-gray-400 transition-colors"
                  />
                  <div>
                    <Textarea
                      id="feedback"
                      rows={4}
                      placeholder="Leave us your comment"
                      className="
                    w-full min-h-[100px] 
                    text-sm
                    resize-none
                    border-gray-300
                    focus:border-zinc-900 
                    bg-neutral-50
                    focus:ring-1 
                    focus:ring-zinc-900
                    placeholder:text-gray-400
                    transition-colors
                  "
                      maxLength={250}
                    />
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      Maximum 250 characters
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="
                h-10 
                text-sm
                rounded-2xl 
                w-full 
              bg-neutral-50
                font-medium
                transition-colors
              "
                >
                  <Share size={10} /> Attach a file
                </Button>

                <Button
                  type="submit"
                  className="
                h-10 
                bg-zinc-900/85 
                rounded-2xl 
                text-sm
                w-full 
                font-medium
                transition-colors
                hover:bg-zinc-900
              "
                >
                  Send Feedback
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Built with <span className="underline cursor-pointer text-gray-700">FeedMeBack</span>
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

// Feedback icon (paper plane)
const Icon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
    <path d="M6 12h16" />
  </svg>
);

// Cross icon
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

// Link icon for attach button
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

export default FeedbackWidget;
