import React from "react";

const Hero = () => {

  return (
    <div className='h-[92vh] w-full bg-[url("/img/bg/daman-bg.png")] relative bg-fixed bg-cover bg-bottom flex items-center justify-center'>
      <div className={`h-[92vh] w-full bg-black absolute opacity-30`}></div>
      <div className="text-center relative w-full">
        <h1 className="font-montserrat font-extrabold text-amber-50 text-shadow-zinc-900 text-shadow-md text-[45px] md:text-[80px] lg:text-[100px] leading-tight uppercase selection:bg-amber-500">
          Explore<br /> DNH And D&D
        </h1>
        <button className="mt-8 bg-amber-50 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-amber-500 cursor-pointer duration-300 flex items-center gap-2 mx-auto">
          Create Your Ideal Trip
          <span className="text-xl">➜</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
