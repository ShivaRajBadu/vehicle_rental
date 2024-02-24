import React from "react";

function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="max-w-[1440px] w-[95%] mx-auto ">{children}</div>;
}

export default Wrapper;
