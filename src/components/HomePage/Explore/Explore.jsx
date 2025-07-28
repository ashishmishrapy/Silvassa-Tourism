import { useState } from "react";
import { motion } from "motion/react";

const Explore = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  let blogData = [
  {
    title: "Top 10 Must-Visit Places in Silvassa for First-Time Travelers",
    url: "#",
  },
  {
    title: "Explore Tribal Culture and Heritage in Silvassa",
    url: "#",
  },
  {
    title: "Best Nature Trails and Eco Parks Around Silvassa",
    url: "#",
  },
  {
    title: "Family Weekend Guide: Things to Do in Silvassa",
    url: "#",
  },
  {
    title: "Local Food You Must Try When Visiting Silvassa",
    url: "#",
  },
  {
    title: "Discover the Peaceful Temples of Silvassa",
    url: "#",
  },
];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div className={`min-h-screen w-full p-2 `}>
      <div className="lg:px-30 md:px-10">
        <div className="flex items-end gap-2 py-20">
        <h3 className="text-5xl md:text-7xl uppercase text-right font-extrabold">
          Explore <br /> Blogs
        </h3>
        <button className="flex gap-1 justify-center cursor-pointer font-bold items-center">
            View More <span className="text-xl">➜</span>
          </button>
        </div>

        <div
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          onMouseMove={handleMouseMove}
          className="relative lg:border-0  border-b"
        >
          {mouseEnter && (
            <motion.div
              className="absolute z-20 cursor-pointer w-24 h-24 flex items-center justify-center bg-white text-black font-semibold rounded-full shadow-lg"
              animate={{
                x: position.x - 48,
                y: position.y - 48,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              View
            </motion.div>
          )}
          <img
            src="/img/damanblog.png"
            alt="bg-image"
            className="w-full lg:h-[70vh] object-cover object-bottom"
          />

          <div className={`md:absolute bg-[#faf5ef] bottom-0 z-10 lg:pr-20 lg:py-8 md:pr-2`}>
            <p className="md:text-5xl text-2xl leading-none text-shadow-2xs text-shadow-black mb-1 font-bold">
              Summer Guide for Beaches <br /> in Daman
            </p>
            <button className="flex font-bold gap-1 justify-center cursor-pointer rounded-full items-center mb-2">
              View More<span className="text-xl">➜</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-x-5 gap-x-2 md:mt-20">
          {blogData.map((blog, index) => (
            <div key={index} className="border-b pb-3 py-15 cursor-pointer hover:pl-5 hover:bg-amber-400 duration-300 p-4">
              <p className="text-2xl font-bold ">{blog.title}</p>
              <button className="font-bold">
                <a href={blog.url}
                className="flex items-center gap-1"
                >Read More <span className="text-xl">➜</span></a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
