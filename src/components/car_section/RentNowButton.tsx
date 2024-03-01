"use client";

import { useRouter } from "next/navigation";

const RentNowButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/detail")}
      className="bg-[color:var(--primary-dark-500)] px-4 py-2 rounded-md font-bold  text-[color:var(--white)] hover:scale-[1.015] duration-200"
    >
      Rent Now
    </button>
  );
};

export default RentNowButton;
