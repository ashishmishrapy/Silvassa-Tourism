import React from 'react';

const Map = ({ dark }) => {
  return (
    <div className={`min-h-screen py-30 ${dark ? "text-white" : "text-zinc-900"}`}>
      <div className="lg:pl-80 md:pl-10 h-[100vh] flex flex-col">
        <h1 className={`text-[80px] font-extrabold leading-none uppercase p-5 left-10 absolute z-10 ${dark ? "bg-zinc-900" : "bg-white"} `}>
          we're <br /> more than <br />
          just one city
        </h1>
        <div className="flex-1">
          <iframe 
          className='w-full h-full'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246812.4607266195!2d72.90001281577533!3d20.20441845079648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb423115a3f9%3A0x5f5377056a5b839b!2sDadra%20and%20Nagar%20Haveli%2C%20Dadra%20and%20Nagar%20Haveli%20and%20Daman%20and%20Diu!5e1!3m2!1sen!2sin!4v1753292705674!5m2!1sen!2sin" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
