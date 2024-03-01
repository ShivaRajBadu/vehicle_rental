"use client";

import { useRouter } from "next/navigation";

const RentNowButton = ({
  paddingX = "16px",
  paddingY = "8px",
  fontSize = "16px",
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/detail")}
      className="bg-[color:var(--primary-dark-500)] rounded-md font-bold   text-[color:var(--white)] hover:bg-[color:var(--primary-dark-600)] duration-200"
      style={{
        paddingBlock: paddingY,
        paddingInline: paddingX,
        fontSize: fontSize,
      }}
    >
      Rent Now
    </button>
  );
};

export default RentNowButton;
