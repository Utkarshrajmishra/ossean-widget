import { Megaphone } from "lucide-react";
const dashboard = [
  { id: 1,
    text: "Total Responses"
   },
  { id: 2,
    text:"Total Feedback"
   },
  { id: 3,
    text:"Total Bug Reports"
   },
  { id: 4,
    text:"Total Feature Request"
   },
  {id:5, text:"Total Rating"},
 
];

const Home = () => {
  return (
    <section className="flex font-sans justify-center w-full">
      <section className="flex gap-4 max-w-7xl w-full ">
        {dashboard.map((item) => (
          <div
            key={item.id}
            className="h-38 p-4 flex-1 border border-neutral-300 bg-zinc-50 flex items-center justify-between rounded-md"
          >
          <div className="w-full  ">
          <div className="flex justify-between items-center w">
            <p className="text-neutral-500 ">{item.text}</p>
           
          </div>
          <div className="mt-4">
          <p className="text-5xl font-[550] text-neutral-700">00</p>
          <p className="text-xs mt-2 text-neutral-500"> <span className="font-[550] text-neutral-700">0%</span>  increment from last week.</p>
          </div>
          </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;