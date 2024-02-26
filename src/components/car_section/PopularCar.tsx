"use client";
import { useState } from "react";
import CarCard from "./CarCard";

function PopularCar() {
  const [carCollection, setCarCollection] = useState([
    {
      id: 1,
      carName: "Koenigsegg",
      carType: "sport",
      carImage: "/images/car_1.png",
      carDetail: {
        fuelCapacity: "90L",
        personCapacity: "4",
        isAutomatic: false,
      },
      rentPrice: 200,
      crossPrice: 210,
      isFavorite: true,
    },
    {
      id: 2,
      carName: "Koenigsegg",
      carType: "sport",
      carImage: "/images/car_1.png",
      carDetail: {
        fuelCapacity: "90L",
        personCapacity: "4",
        isAutomatic: false,
      },
      rentPrice: 200,
      crossPrice: 210,
      isFavorite: false,
    },
    {
      id: 3,
      carName: "Koenigsegg",
      carType: "sport",
      carImage: "/images/car_1.png",
      carDetail: {
        fuelCapacity: "90L",
        personCapacity: "4",
        isAutomatic: false,
      },
      rentPrice: 200,
      crossPrice: 210,
      isFavorite: false,
    },
  ]);

  function handleFavorite(id: number) {
    console.log("called here parent");
    setCarCollection(
      carCollection.map((car) => {
        if (car.id === id) {
          return {
            ...car,
            isFavorite: !car.isFavorite,
          };
        }
        return car;
      })
    );
  }
  return (
    <div className="py-8">
      <div className="flex justify-between py-4">
        <h2 className="text-[16px] font-semibold text-[color:var(--secondary-dark-300)]">
          Popular Car
        </h2>
        <button className="text-[16px] font-normal text-[color:var(--primary-dark-500)]">
          View All
        </button>
      </div>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
        }}
        // place grid at center from horizontally
        className="grid gap-4  max-md:justify-items-center"
      >
        {carCollection.map((car) => (
          <CarCard key={car.id} {...car} favorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
}

export default PopularCar;
