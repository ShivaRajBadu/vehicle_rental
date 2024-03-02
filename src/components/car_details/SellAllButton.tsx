"use client";

import React from "react";

const SellAllButton = () => {
  return (
    <div className="flex justify-center">
      <button className="flex gap-2 cursor-pointer justify-center text-[16px] text-[color:var(--secondary-dark-300)] items-center">
        See all
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00026 11.1996C7.53359 11.1996 7.06692 11.0196 6.71359 10.6663L2.36692 6.31964C2.17359 6.1263 2.17359 5.80631 2.36692 5.61297C2.56026 5.41964 2.88026 5.41964 3.07359 5.61297L7.42026 9.95964C7.74026 10.2796 8.26026 10.2796 8.58026 9.95964L12.9269 5.61297C13.1203 5.41964 13.4403 5.41964 13.6336 5.61297C13.8269 5.80631 13.8269 6.1263 13.6336 6.31964L9.28692 10.6663C8.93359 11.0196 8.46692 11.1996 8.00026 11.1996Z"
            fill="#90A3BF"
            stroke="#90A3BF"
            stroke-width="0.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SellAllButton;
