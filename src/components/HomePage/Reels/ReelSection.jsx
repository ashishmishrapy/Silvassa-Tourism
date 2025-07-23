import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const ReelSection = ({ dark }) => {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState({});

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingStates((prev) => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setPlayingStates((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-2 ">
      <div className="lg:pl-30 md:pl-10">
        <div
          className={`flex items-end gap-5 py-20 ${
            dark ? "text-white" : "text-zinc-900"
          }`}
        >
          <h2 className="text-5xl md:text-7xl uppercase font-extrabold">
            Social <br /> reels
          </h2>
          <button className="flex gap-1 justify-center cursor-pointer font-bold items-center">
            View More <span className="text-xl">➜</span>
          </button>
        </div>

        <div className="flex overflow-x-auto gap-7">
          {["reels", "reel", "video"].map((alt, index) => (
            <div
              key={index}
              className="min-w-[370px] h-[500px] relative overflow-hidden"
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/100 to-transparent z-10">
                <p className="font-bold leading-none text-white text-lg">
                  HELLO <br /> DNH & DD
                </p>

                <button
                  onClick={() => togglePlay(index)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
                >
                  {playingStates[index] ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              {/* Video */}
              <video
                className="w-full h-full object-cover"
                loop
                playsInline
                ref={(el) => (videoRefs.current[index] = el)}
              >
                <source src="/vid/daman.mp4" type="video/mp4" />
                Not supported by your browser
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelSection;
