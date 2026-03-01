const dashboard = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

const Home = () => {
  return (
    <section className="flex justify-center p-4 w-full">
      <section className="flex gap-4 max-w-7xl w-full  p-4">
        {dashboard.map((item) => (
          <div
            key={item.id}
            className="h-40 flex-1 border border-neutral-300 bg-neutral-100 flex items-center justify-center rounded-md"
          >
            Card {item.id}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;