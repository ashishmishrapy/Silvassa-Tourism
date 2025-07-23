import Card from "./Card";

const MustVisit = ({ dark }) => {
  const spots = [
    {
      title: "Swami Narayan Temple",
      image: "/img/card/swamitemple.jpg",
    },
    {
      title: "Omkareshwar Temple",
      image: "/img/card/omtemple.jpg",
    },
    {
      title: "Nakshatra Garden",
      image: "/img/card/garden.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center p-2">
      <div className="lg:pl-30 md:pl-10">
        <div
          className={`flex items-end gap-5 py-20 ${
            dark ? "text-white" : "text-zinc-900"
          }`}
        >
          <h2 className="text-5xl md:text-7xl uppercase font-extrabold">
            Must Visit
          </h2>
          <button className="flex gap-1 justify-center cursor-pointer font-bold items-center">
            View More <span className="text-xl">➜</span>
          </button>
        </div>
        <div className="flex h-3/4 overflow-x-auto gap-7">
          {spots.map((card, index) => (
            <Card key={index} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MustVisit;
