import React, { useState } from 'react'

const Menu = () => {

  const navItems = [
  { label: "Places to Stay", href: "#" },
  { label: "Events", href: "#" },
  { label: "Food & Drinks", href: "#" },
  { label: "Explore D&D", href: "#" },
  { label: "Forums", href: "#" },
  { label: "Login", href: "#" },
];

  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <div className='h-screen w-full md:w-4/5  bg-black fixed z-50 '>
      <ul className="flex flex-col gap-7 p-3 text-5xl font-semibold">
      {navItems.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a
            href={item.href}
            className={`transition duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "text-gray-800"
                : "text-white cursor-pointer"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Menu