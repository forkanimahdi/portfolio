import React from "react";
import logo from "../assets/images/myLogo.png"

export const Error = () => {
  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col gap-y-9 items-center justify-center">
        <div className="flex  items-center gap-x-3 text-9xl">
          <h1>4</h1>
          <img className="w-32 animate-" src={logo} alt="" />
          <h1>4</h1>
        </div>
        <h1 className="text-white text-3xl font-semibold"> Page Not Found !</h1>
      </div>

    </>
  );
};
