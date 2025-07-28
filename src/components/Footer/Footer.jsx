import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

   const navItems = [
  { label: "Places to Stay", href: "#" },
  { label: "Events", href: "#" },
  { label: "Food & Drinks", href: "#" },
  { label: "Explore D&D", href: "#" },
  { label: "Forums", href: "#" },
  { label: "Login", href: "#" },
];

const socialLinks = [
  { url: "https://www.instagram.com", icon: <FaInstagram /> },
  { url: "https://www.facebook.com", icon: <FaFacebookF /> },
  { url: "https://www.twitter.com", icon: <FaTwitter /> },
  { url: "https://www.youtube.com", icon: <FaYoutube /> },
  { url: "https://www.linkedin.com", icon: <FaLinkedinIn /> },
];
  return (
    <div className={` lg:px-20 pt-20 p-2 `}>
      <div className='grid lg:grid-cols-2 border-b-2 pb-5'>
        <div className='place-items-center  lg:place-items-start '>
            <p className='text-[50px] font-extrabold'>HelloSilvassa</p>
            <ul className='flex text-lg gap-4'>
               {
                 socialLinks.map((link, index)=>(
                    <li key={index}><a href={link.url} target='_blank'>{link.icon}</a></li>
                  ))
               }
            </ul>
        </div>
        <div>
          <ul className="grid lg:grid-cols-2 lg:place-items-start place-items-center font-semibold p-2">
      {navItems.map((item, index) => (
        <li key={index}>
          <a href={item.href} className='hover:underline'>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
        </div>
      </div>
      <div className='flex flex-col py-5 lg:flex-row justify-center items-center font-semibold gap-2'>
        <p>©2025 Ashish Mishra. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer