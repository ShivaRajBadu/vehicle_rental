import CarSection from "../car_section/CarSection";
import ReviewCard from "./ReviewCard";
import SellAllButton from "./SellAllButton";

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
      {Array.from({ length: 2 }).map((each, index) => (
        <ReviewCard key={index} />
      ))}
      <SellAllButton />
      <CarSection title="Similar Cars" />
    </div>
  );
};

export default CarReviews;
