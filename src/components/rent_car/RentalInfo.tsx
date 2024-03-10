import React from "react";
import CartTitle from "./CartTitle";

const RentalInfo = () => {
  return (
    <div className="my-8 bg-[color:var(--white)] p-5">
      <CartTitle
        title="Rental Info"
        subtitle="Please select your rental date"
        stepNumber={2}
      />
      <div></div>
    </div>
  );
};

export default RentalInfo;
