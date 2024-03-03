import React from "react";

interface CustomInputProps {
  type: string;
  placeholder: string;
  label: string;
}
const CustomInput = ({ type, placeholder, label }: CustomInputProps) => {
  return (
    <div className="">
      <label
        className="block text-[16px] text-[color:var(--secondary-dark-500)] font-semibold pb-2"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className=" focus-visible:outline-none w-full rounded-xl bg-[--background] py-4 indent-6 font-medium  text-[16px] :placeholder:text-[--secondary-dark-300] :placeholder:text-[14px] :placeholder:font-medium"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
