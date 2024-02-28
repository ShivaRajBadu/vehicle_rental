"use client";

import PriceRange from "@/components/car_category_page/PriceRange";
import CarCard from "@/components/car_section/CarCard";
import CarSection from "@/components/car_section/CarSection";
import PickSection from "@/components/pick_section/pick_section";
import Wrapper from "@/components/wrapper";
import React, { useState } from "react";

function CarCategory() {
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
  const carTypes = ["Sport", "MPV", "SUV", "Couple", "Sedan", "Hatchback"];
  const carCapacity = ["2", "4", "6", "8 or More"];
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
    <div className="bg-[color:var(--white)]">
      <Wrapper>
        <div className="flex gap-2">
          <aside className="w-[25%]">
            <div className="py-2">
              <h3 className="text-sm text-[color:var(--secondary-dark-300)] uppercase font-semibold pt-2 pb-4">
                Types
              </h3>
              <div className="space-y-4">
                {carTypes.map((carType, index) => {
                  return (
                    <div key={index} className="flex gap-3 items-center ">
                      <input type="checkbox" name={carType} id={carType} />
                      <label
                        className="text-[20px] font-medium text-[color:var(--secondary-dark-400)]"
                        htmlFor={carType}
                      >
                        {carType}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-sm text-[color:var(--secondary-dark-300)] uppercase font-semibold pt-2 pb-6">
                Capacity
              </h3>
              <div className="space-y-4 ">
                {carCapacity.map((carCapacity, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        name={carCapacity}
                        id={carCapacity}
                      />
                      <label
                        className="text-[20px] font-medium text-[color:var(--secondary-dark-400)]"
                        htmlFor={carCapacity}
                      >
                        {carCapacity} Persons
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-sm text-[color:var(--secondary-dark-300)] uppercase font-semibold pt-2 pb-6">
                Price
              </h3>
              <PriceRange />
            </div>
          </aside>
          <main className="bg-[color:var(--background)] w-full px-6">
            <PickSection />

            <CarSection isHomePage={false} showMoreButton={true} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
}

export default CarCategory;
