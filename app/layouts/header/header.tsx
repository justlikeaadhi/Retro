import React from "react";

const Header = () => {
  return (
    <div
      className="flex items-center justify-evenly absolute w-full h-[60px]"
      id="header-container"
    >
      <div className="flex items-center justify-between w-[165px] h-[30px]">
        <div className="flex items-center justify-center w-full h-full">
          <h4 className="arabic-text text-[#46457C] text-[25px] text-shadow-lg select-none">
            Retro
          </h4>
        </div>
      </div>
      <div className="flex w-[445px] h-[30px]"></div>
      <div className="flex items-center justify-between w-[165px] h-[40px]">
        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-md cursor-pointer hover:bg-white/10 transition-all duration-500 ease-in-out">
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_30_14)">
              <mask
                id="mask0_30_14"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={14}
                height={14}
              >
                <path d="M0 0H14V14H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_30_14)">
                <path
                  d="M11.025 0.655998H13.172L8.482 6.03L14 13.344H9.68L6.294 8.909L2.424 13.344H0.275L5.291 7.594L0 0.656998H4.43L7.486 4.71L11.025 0.655998ZM10.27 12.056H11.46L3.78 1.877H2.504L10.27 12.056Z"
                  fill="#696995"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_30_14">
                <rect width={14} height={14} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="flex items-center justify-center rounded-full w-28 h-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-md text-[15px] font-sans font-light text-shadow-2xs text-white/40 hover:bg-white/10 hover:text-white/70 transition-all duration-500 ease-in-out cursor-pointer select-none">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Header;
