import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import { api } from '@/lib/api';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await api.getCars();
        setCarList(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto my-16">
        <h2 className="font-bold text-3xl text-center mb-10">Most Searched Cars</h2>
        <p className="text-center text-gray-600">Loading cars...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-16">
      <h2 className="font-bold text-3xl text-center mb-10">Most Searched Cars</h2>

      {carList.length > 0 ? (
        <Carousel>
          <CarouselPrevious />
          <CarouselContent className="flex gap-4">
            {carList.map((car, index) => (
              <CarouselItem key={car.id || index} className="basis-1/4">
                <CarItem car={car} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      ) : (
        <p className="text-center text-gray-600">No cars available.</p>
      )}
    </div>
  );
}

export default MostSearchedCar;

