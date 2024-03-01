import React from "react";
import FavoriteButton from "../car_section/FavoriteButton";
import CarFeature from "./CarFeature";
import CarReview from "./CarReview";
import RentNowButton from "../car_section/RentNowButton";

const CarInfo = () => {
  return (
    <div className="w-full max-w-[800px] bg-[color:var(--white)] py-6 px-8 rounded-md">
      <div className="flex justify-between ">
        <h1 className="text-[32px] font-bold text-[color:var(--secondary-dark-500)]">
          Nissan GT - R
        </h1>
        <FavoriteButton id={1} isFavorite={true} />
      </div>
      <CarReview carNumberOfReviews={2} />
      <p className="text-[20px] font-normal text-[color:var(--secondary-dark-400)] py-8">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className="grid grid-cols-2 grid-rows-2 py-4 gap-x-10 gap-y-6">
        <CarFeature label="Gasoline" value="70L" />
        <CarFeature label="Type Car" value="Sport" />
        <CarFeature label="Steering" value="Manual" />
        <CarFeature label="Capacity" value="2 Person" />
      </div>
      <div className="flex justify-between pt-14">
        <div>
          <h2 className="font-bold text-[28px] text-[color:var(--secondary-dark-500)]">
            $80.00/{" "}
            <span className="font-bold text-[16px] text-[color:var(--secondary-dark-300)]">
              days
            </span>
          </h2>
          <h3 className="font-bold text-[16px] text-[color:var(--secondary-dark-300)] line-through">
            $100.00
          </h3>
        </div>
        <RentNowButton paddingX="38px" fontSize="24px" />
      </div>
    </div>
  );
};

export default CarInfo;
