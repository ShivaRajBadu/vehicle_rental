"use client";

import { useState } from "react";
import Wrapper from "../wrapper";
import Pick from "./pick";
import Image from "next/image";

function PickSection() {
  const [isFirst, setIsFirst] = useState(true);
  const swapPostion = () => {
    setIsFirst((prev: boolean) => !prev);
  };
  return (
    <Wrapper>
      <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-8 ">
        <Pick title={isFirst ? "Pick-Up" : "Drop-Off"} />
        <div
          onClick={swapPostion}
          className="bg-[color:var(--primary-dark-600)] p-4 rounded-md cursor-pointer"
        >
          <Image
            className="rotate-90 lg:rotate-0 min-w-[20px] "
            src={"/icons/swap.svg"}
            width={24}
            height={24}
            alt="swap"
          />
        </div>
        <Pick title={isFirst ? "Drop-Off" : "Pick-Up"} />
      </div>
    </Wrapper>
  );
}

export default PickSection;