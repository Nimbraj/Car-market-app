import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@radix-ui/react-separator';
import { FaSearch } from "react-icons/fa";

// CarMaker and pricing data
const CarMaker = [
  { id: 1, name: "AUDI" },
  { id: 2, name: "BMW" },
  { id: 3, name: "FORD" },
  { id: 4, name: "TATA" },
  { id: 5, name: "MAHINDRA" },
];

const pricing = [
  { id: 1, amount: 200000 },
  { id: 2, amount: 800000 },
  { id: 3, amount: 1000000 },
  { id: 4, amount: 1500000 },
  { id: 5, amount: 2000000 },
];

function Search() {
  // State to hold selected values
  const [carCondition, setCarCondition] = useState('');
  const [carMaker, setCarMaker] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  // Handler to perform search (declarative validation)
  const handleSearch = () => {
    const isValid = carCondition && carMaker && price;

    if (isValid) {
      setError(''); // Clear error if all fields are valid
      console.log({
        carCondition,
        carMaker,
        price,
      });
      // Add search logic here
    } else {
      setError('Please select all fields.');
    }
  };

  return (
    <div className="  rounded-full p-6 bg-gray-100  shadow-md max-w-4xl mx-auto flex flex-col md:flex-row gap-5 md:gap-10 items-center">
      
      {/* Select for Car Condition (New/Old) */}
      <div className="w-full md:w-64">
        <Select onValueChange={setCarCondition}>
          <SelectTrigger className="outline-none border bg-white px-4 py-2 rounded-lg w-full shadow-sm hover:shadow-lg transition focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator orientation="vertical" className="hidden md:block bg-gray-300 w-[1px] h-10" />

      {/* Select for Car Maker */}
      <div className="w-full md:w-64">
        <Select onValueChange={setCarMaker}>
          <SelectTrigger className="outline-none border bg-white px-4 py-2 rounded-lg w-full shadow-sm hover:shadow-lg transition focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Car Maker" />
          </SelectTrigger>
          <SelectContent>
            {CarMaker.map((maker) => (
              <SelectItem key={maker.id} value={maker.name}>
                {maker.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator orientation="vertical" className="hidden md:block bg-gray-300 w-[1px] h-10" />

      {/* Select for Pricing */}
      <div className="w-full md:w-64">
        <Select onValueChange={setPrice}>
          <SelectTrigger className="outline-none border bg-white px-4 py-2 rounded-lg w-full shadow-sm hover:shadow-lg transition focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Price" />
          </SelectTrigger>
          <SelectContent>
            {pricing.map((price) => (
              <SelectItem key={price.id} value={price.amount}>
                {price.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="flex justify-center items-center">
        <FaSearch
          onClick={handleSearch}
          className="text-[30px] bg-blue-500 p-2 text-white rounded-full hover:scale-105 cursor-pointer transition duration-200 ease-in-out transform hover:bg-blue-600"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mt-3 md:mt-0 md:ml-5">
          {error}
        </div>
      )}
    </div>
  );
}

export default Search;
