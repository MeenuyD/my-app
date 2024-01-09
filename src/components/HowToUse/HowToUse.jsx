/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsOutlinedInfo3 } from "../../icons/IconsOutlinedInfo3";

export const HowToUse = ({
  className,
  icon = <IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />,
  text = "How to use",
}) => {
  return (
    <div className={`inline-flex items-center gap-[6px] relative ${className}`}>
      {icon}
      <div className="relative w-fit mt-[-1.00px] font-caption-regular font-[number:var(--caption-regular-font-weight)] text-[#4c4c4c] text-[length:var(--caption-regular-font-size)] tracking-[var(--caption-regular-letter-spacing)] leading-[var(--caption-regular-line-height)] whitespace-nowrap [font-style:var(--caption-regular-font-style)]">
        {text}
      </div>
    </div>
  );
};
