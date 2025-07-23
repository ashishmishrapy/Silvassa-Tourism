import { useState } from 'react';
import { motion } from 'motion/react';

const Card = ({ image, title }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onMouseMove={handleMouseMove}
      className="min-w-[370px] h-[500px] relative overflow-hidden "
    >
      <p className="font-extrabold left-3 text-center z-10 absolute bottom-10 text-shadow-2xs text-shadow-black text-white text-4xl">
        {title}
      </p>

      {mouseEnter && (
        <motion.div
          className="absolute z-20 cursor-pointer w-24 h-24 flex items-center justify-center bg-amber-500 text-white font-semibold rounded-full shadow-lg"
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
        src={image}
        alt={title}
        className={`w-full h-full shadow-2xl shadow-black object-cover duration-300 ${
          mouseEnter && 'blur-[2px]'
        }`}
      />
    </div>
  );
};

export default Card;
