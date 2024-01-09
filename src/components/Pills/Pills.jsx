/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Pills = ({ rightIcon = false, leftIcon = false, state, className, text = "Text here" }) => {
  return (
    <div
      className={`inline-flex items-center px-[16px] py-[6px] rounded-[40px] relative ${
        state === "disabled" ? "gap-[10px]" : "gap-[6px]"
      } ${state === "disabled" ? "bg-black-90" : "bg-primary-blue"} ${className}`}
    >
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] font-medium leading-[20px] whitespace-nowrap relative ${
          state === "disabled" ? "text-black-50" : "text-black-100"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
