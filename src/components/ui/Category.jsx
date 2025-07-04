import React from 'react';

const categories = [
  {
    id: 1,
    name: "SUV",
    icon: "/sedan.png",
  },
  {
    id: 2,
    name: "Sedan",
    icon: "/sedan.png",
  },
  {
    id: 3,
    name: "Hatchback",
    icon: "/Hatchback.png",
  },
  {
    id: 4,
    name: "Electric",
    icon: "/Electric.png",
  },
  {
    id: 5,
    name: "Convertible",
    icon: "/Convertible.png",
  },
  {
    id: 6,
    name: "Hybrid",
    icon: "/Hybrid.png",
  },
  {
    id: 7,
    name: "Coupe",
    icon: "/Coupe.png",
  },
  {
    id: 8,
    name: "Van",
    icon: "/Van.png",
  },
  {
    id: 9,
    name: "Truck",
    icon: "/Truck.png",
  },
];

function Category() {
  return (
    <div className='mt-40 items-center'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
      <div className=' mr-70 ml-11'>
      <div className='mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4'>
        {categories.map((category) => (
          <div key={category.id} className='border rounded-xl p-3 flex flex-col items-center hover:shadow-md cursor-pointer transition-transform transform hover:scale-105'>
            <img src={category.icon} alt={`${category.name} Icon`} className='w-10 h-10' />
            <h2 className='mt-2 text-center'>{category.name}</h2>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Category;
