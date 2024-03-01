import React from "react";
import CarReview from "./CarReview";
import Image from "next/image";
import ReviewCard from "./ReviewCard";

const CarReviews = () => {
  return (
    <div className="bg-[color:var(--white)] my-8 p-4">
      <div className="flex gap-3 items-center">
        <p className="font-semibold text-[20px] text-[color:var(--secondary-dark-500)]">
          Review
        </p>
        <p className="bg-[color:var(--primary-dark-600)] rounded-md font-bold text-[14px] text-[color:var(--white)] px-3 py-1">
          13
        </p>
      </div>
      <ReviewCard />
    </div>
  );
};

export default CarReviews;
