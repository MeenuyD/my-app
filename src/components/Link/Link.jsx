/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Link = ({ text = "Link", color, sIze, state, className, divClassName }) => {
  return (
    <div
      className={`inline-flex items-start gap-[8px] relative ${state === "disabled" ? "opacity-40" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Galano_Grotesque-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] relative underline font-medium whitespace-nowrap ${
          sIze === "sixteen-px" ? "text-[16px]" : sIze === "fourteen-px" ? "text-[14px]" : "text-[12px]"
        } ${
          color === "blue" && state === "hover"
            ? "text-hover-blue"
            : color === "grey" && ["default", "disabled"].includes(state)
            ? "text-black-30"
            : state === "hover" && color === "grey"
            ? "text-hover-black"
            : color === "red" && ["default", "disabled"].includes(state)
            ? "text-secondary-red"
            : state === "hover" && color === "red"
            ? "text-hover-red"
            : "text-primary-blue"
        } ${
          sIze === "sixteen-px" ? "leading-[24px]" : sIze === "fourteen-px" ? "leading-[20px]" : "leading-[16px]"
        } ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
