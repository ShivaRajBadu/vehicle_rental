import CustomInput from "@/components/CustomInput";
import BillingInfo from "@/components/rent_car/BillingInfo";
import RentalInfo from "@/components/rent_car/RentalInfo";
import Wrapper from "@/components/wrapper";
import React from "react";

const RentCar = () => {
  return (
    <Wrapper>
      <div className="my-8 flex gap-6  items-start">
        <main className="w-full">
          <BillingInfo />
          <RentalInfo />
        </main>
        <aside className="w-[40%]"></aside>
      </div>
    </Wrapper>
  );
};

export default RentCar;
