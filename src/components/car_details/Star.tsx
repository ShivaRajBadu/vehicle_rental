import React from "react";

const Star = ({ fillColor }: { fillColor?: string }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: fillColor }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.16676 0.65838C8.22433 0.475844 8.33858 0.316412 8.49294 0.203241C8.64729 0.0900697 8.8337 0.0290527 9.0251 0.0290527C9.21649 0.0290527 9.40291 0.0900697 9.55726 0.203241C9.71161 0.316412 9.82587 0.475844 9.88343 0.65838L11.4334 5.42505H16.4334C16.6317 5.41755 16.8269 5.47516 16.9893 5.58908C17.1517 5.70299 17.2724 5.86695 17.3329 6.05589C17.3933 6.24484 17.3903 6.44838 17.3242 6.63542C17.2581 6.82247 17.1325 6.98273 16.9668 7.09171L12.9084 10.0334L14.4584 14.8084C14.5197 14.9903 14.5213 15.187 14.4628 15.3698C14.4044 15.5526 14.2891 15.712 14.1336 15.8246C13.9782 15.9372 13.7908 15.9972 13.5989 15.9958C13.407 15.9944 13.2205 15.9316 13.0668 15.8167L9.0001 12.8417L4.94176 15.7917C4.78802 15.9066 4.60157 15.9694 4.40963 15.9708C4.2177 15.9722 4.03034 15.9122 3.87491 15.7996C3.71948 15.687 3.60412 15.5276 3.54569 15.3448C3.48725 15.162 3.4888 14.9653 3.5501 14.7834L5.1001 10.0084L1.04176 7.06671C0.876001 6.95773 0.750474 6.79747 0.684365 6.61042C0.618256 6.42338 0.615199 6.21984 0.675661 6.03089C0.736123 5.84195 0.85678 5.67799 1.0192 5.56408C1.18161 5.45016 1.37686 5.39255 1.5751 5.40005H6.5751L8.16676 0.65838Z"
      />
    </svg>
  );
};

export default Star;
