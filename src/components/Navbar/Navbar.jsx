import { RiMenu4Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { motion, useScroll } from 'motion/react';





const Navbar = ({menu, setMenu}) => {
  const {scrollYProgress} = useScroll();

    const menuHandle = ()=>{
      setMenu(!menu)
    }
  return (
    <>
      <div className={`flex justify-between items-center sticky w-full top-0 z-50 py-4 px-5 md:px-10 shadow-md bg-transparent backdrop-blur-2xl`}>
        <motion.div 
        style={{scaleX: scrollYProgress}}
        className='w-full fixed left-0 bottom-0 origin-left h-[2px] bg-amber-600 '/>
          <h1 className='flex flex-col leading-4 text-right font-semibold tracking-tight text-2xl'>  Hello <span>Silvassa</span> </h1>
          <ul className='gap-7 tracking-tighter hidden font-semibold lg:flex'>
              <li className='hover:text-amber-800'><a href="#">Places to Stay</a></li>
              <li className='hover:text-amber-800'><a href="#">Food & Drinks</a></li>
              <li className='hover:text-amber-800'><a href="#">Events</a></li>
              <li className='hover:text-amber-800'><a href="#">Explore D&D</a></li>
              <li className='hover:text-amber-800'><a href="#">Forums</a></li>
          </ul>
          <button onClick={menuHandle} className='text-2xl cursor-pointer'>
            {
              menu ? <RxCross1 /> : <RiMenu4Fill />
            }
          </button>
      </div>
    </>
  )
}

export default Navbar