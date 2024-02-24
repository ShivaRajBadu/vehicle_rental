"use client";
import Wrapper from "../wrapper";
import Pick from "./pick";
import Image from "next/image";

function PickSection() {
  const swapPostion = () => {};
  return (
    <Wrapper>
      <div className="flex items-center gap-8 ">
        <Pick title="Pick-Up" />
        <div
          onClick={swapPostion}
          className="bg-[color:var(--primary-dark-600)] p-4 rounded-md cursor-pointer"
        >
          <Image src={"/icons/swap.svg"} width={24} height={24} alt="swap" />
        </div>
        <Pick title="Drop-Off" />
      </div>
    </Wrapper>
  );
}

export default PickSection;
