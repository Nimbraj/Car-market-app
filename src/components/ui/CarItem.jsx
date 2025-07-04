import React from 'react';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

function CarItem({ car }) {
  return (
    <div className="car-item border rounded-lg shadow-lg p-6 mb-6 bg-white transition-transform hover:scale-105 relative">
      {/* "New" badge */}
      <h2 className="absolute m-2 bg-green-500 text-white rounded-full px-2 py-1 text-sm uppercase ">
        New
      </h2>
      
      <img 
        src={car.image} 
        alt={car.name} 
        className="w-full h-40 object-cover rounded-md mb-4" 
      />
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
      <p className="text-gray-600 mb-2">Model: {car.model}</p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <BsFillFuelPumpFill className="mr-2" /> {car.fuelType}
      </p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <SiSpeedtest className="mr-2" /> {car.miles} miles
      </p>
      
      <p className="text-gray-600 flex items-center mb-2">
        <GiGearStickPattern className="mr-2" /> {car.gearType}
      </p>
      
      {/* Price and button container */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-900 font-semibold">Price: ${car.price}</p>
        
        <button className="flex items-center px-3 py-2 bg-white-500 text-black rounded-md hover:bg-blue-600">
          <IoMdOpen className="mr-1" />
          View Details
        </button>
      </div>
    </div>
  );
}

export default CarItem;
