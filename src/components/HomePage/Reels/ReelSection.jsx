import { FaInstagram } from 'react-icons/fa';

const images = [
  "/img/insta/img1.jpg",
  "/img/insta/img2.jpg",
  "/img/insta/img3.jpg",
  "/img/insta/img7.jpg",
  "/img/insta/img4.jpg",
  "/img/insta/img5.jpg",
  "/img/insta/img6.jpg",
];

const ReelSection = () => {
  return (
    <div className="grid grid-cols-3 gap-[1px] p-[1px]">
      {images.map((src, i) => (
        <div key={i} className={`relative ${i == 3 && "col-span-3"}`}>
          <div className='bg-black absolute w-full h-full opacity-30'/>
          {
            i == 3 && 
            <div className='absolute flex flex-col justify-center items-center w-full h-full'>
              <p className='font-extrabold text-shadow-2xs text-shadow-black text-white text-[50px]'>#DNHDD</p>
              <button className=' cursor-pointer hover:scale-105 duration-300 font-semibold flex items-center gap-1 bg-red-600 rounded-full text-white px-4 py-2'> <FaInstagram />  Follow us</button>
            </div>
          }
          <img
            src={src}
            alt={`img-${i}`}
            className={`w-full object-cover ${i == 3 ? "aspect-[3/1] object-bottom" : "aspect-square"}`}
          />
          <FaInstagram className="absolute top-2 left-2 text-white text-xl opacity-80" />
        </div>
      ))}
    </div>
  );
};

export default ReelSection;
