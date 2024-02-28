"use client";
import { useState } from "react";
import CarCard from "./CarCard";
import { useRouter } from "next/navigation";

function CarSection({
  title = "Popular Car",
  isHomePage = true,
  showMoreButton = false,
}: Readonly<{
  title?: string;
  isHomePage?: boolean;
  showMoreButton?: boolean;
}>) {
  console.log(title);
  const router = useRouter();

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
      {isHomePage && (
        <div className="flex justify-between py-4">
          <h2 className="text-[16px] font-semibold text-[color:var(--secondary-dark-300)]">
            {title}
          </h2>
          <button
            onClick={() => router.push("/car-category")}
            className="text-[16px] font-normal text-[color:var(--primary-dark-500)]"
          >
            View All
          </button>
        </div>
      )}
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
      {showMoreButton && (
        <div className="flex justify-center py-6 mt-10">
          <button className="py-4 px-6 text-center  bg-[color:var(--primary-dark-500)] text-[color:var(--white)] rounded-md font-bold hover:bg-[color:var(--primary-dark-600)] duration-300 ease-in-out hover:shadow-2xl ">
            Show more car
          </button>
        </div>
      )}
    </div>
  );
}

export default CarSection;
