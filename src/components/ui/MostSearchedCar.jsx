import React from 'react';
import CarItem from './CarItem';
import { faker } from '@faker-js/faker';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Generate a list of random car data
function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://content.carlelo.com/uploads/blog_img/1710568288.webp', // Placeholder for the car image
        miles: '10000',
        gearType: 'Automatic',
        price: faker.finance.amount({ min: 40000, max: 4000000 }),
    };
}

// Create a car list with 16 random car objects
const carList = faker.helpers.multiple(createRandomCarList, { count: 16 });

function MostSearchedCar() {
  return (
    <div className="container mx-auto my-16">
      <h2 className="font-bold text-3xl text-center mb-10">Most Searched Cars</h2>

      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="flex gap-4">
          {carList.length > 0 ? carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CarItem car={car} />
            </CarouselItem>
          )) : (
            <p className="text-center">No cars available.</p>
          )}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
