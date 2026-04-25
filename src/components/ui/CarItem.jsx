import React from 'react';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

function CarItem({ car }) {
  const imageUrl = Array.isArray(car.images) && car.images.length > 0
    ? car.images[0]
    : 'https://content.carlelo.com/uploads/blog_img/1710568288.webp';

  const title = car.listingTitle || car.name || 'Unknown Car';
  const model = car.model || 'Unknown Model';
  const fuel = car.type || car.fuelType || 'N/A';
  const miles = car.fuelEfficiency || car.miles || 'N/A';
  const gear = car.driveType || car.gearType || 'Automatic';
  const price = car.sellingPrice || car.price || '0';
  const condition = car.condition || 'New';

  return (
    <div className="car-item border rounded-lg shadow-lg p-6 mb-6 bg-white transition-transform hover:scale-105 relative">
      {/* Condition badge */}
      <h2 className="absolute m-2 bg-green-500 text-white rounded-full px-2 py-1 text-sm uppercase ">
        {condition}
      </h2>
      
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-40 object-cover rounded-md mb-4" 
      />
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">Model: {model}</p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <BsFillFuelPumpFill className="mr-2" /> {fuel}
      </p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <SiSpeedtest className="mr-2" /> {miles} miles
      </p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <GiGearStickPattern className="mr-2" /> {gear}
      </p>
      
      {/* Price and button container */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-900 font-semibold">Price: ${price}</p>
        
        <button className="flex items-center px-3 py-2 bg-white-500 text-black rounded-md hover:bg-blue-600">
          <IoMdOpen className="mr-1" />
          View Details
        </button>
      </div>
    </div>
  );
}

export default CarItem;

