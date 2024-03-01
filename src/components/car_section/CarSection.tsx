import CarCard from "./CarCard";

import { carsCollection } from "../../data/cars";
import ViewAll from "./ViewAll";

function CarSection({
  title = "Popular Car",
  isHomePage = true,
  showMoreButton = false,
}: Readonly<{
  title?: string;
  isHomePage?: boolean;
  showMoreButton?: boolean;
}>) {
  return (
    <div className="py-8">
      {isHomePage && (
        <div className="flex justify-between py-4">
          <h2 className="text-[16px] font-semibold text-[color:var(--secondary-dark-300)]">
            {title}
          </h2>
          <ViewAll />
        </div>
      )}
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
        }}
        className="grid gap-4  max-md:justify-items-center"
      >
        {carsCollection.map((car) => (
          <CarCard key={car.id} {...car} />
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
