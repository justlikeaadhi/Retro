import React from "react";
import Header from "../../header/header";

const Retro = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#010043] via-[#5b56edda] to-[#F48AFA]">
        <h1 className="arabic-text text-center text-[20vw] sm:text-[150px] md:text-[18vw] lg:text-[22vw] xl:text-[24vw] max-w-[90vw]  text-[#ddd8fe] bg-clip-text transform-gpu shadow-none text-shadow-lg cursor-default select-none">
          Retro
        </h1>
      </div>
    </>
  );
};

export default Retro;
