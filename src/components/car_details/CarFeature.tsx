import React from "react";

const CarFeature = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex justify-between ">
      <h4 className="text-[20px] font-normal text-[color:var(--secondary-dark-300)]">
        {label}
      </h4>
      <h3 className="text-[color:var(--secondary-dark-400)] font-semibold text-[20px]">
        {value}
      </h3>
    </div>
  );
};

export default CarFeature;
