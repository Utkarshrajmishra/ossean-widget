import { Megaphone } from "lucide-react";
const dashboard = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  {id:5},
 
];

const Home = () => {
  return (
    <section className="flex font-sans justify-center p-4 w-full">
      <section className="flex gap-4 max-w-7xl w-full  p-4">
        {dashboard.map((item) => (
          <div
            key={item.id}
            className="h-40 p-4 flex-1 border border-neutral-800 bg-neutral-950/20 flex items-center justify-center rounded-md"
          >
          <div className="w-full  ">
          <div className="flex justify-between items-center w">
            <p className="text-neutral-300 ">Total Responses</p>
            <div className="bg-neutral-800 p-2 w-fit h-fit rounded-md border border-neutral-700">
              <Megaphone className="size-4 text-neutral-300"/>
            </div>
          </div>
          <div className="mt-4">
          <p className="text-5xl font-[550] text-neutral-300">00</p>
          <p className="text-xs mt-2 text-neutral-300"> 5% increment from last week.</p>
          </div>
          </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;