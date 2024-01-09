/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BoldSearch9 } from "../../icons/BoldSearch9";

export const BaseSearchField = ({
  showX = false,
  icon = true,
  className,
  text = "Order ID, phone or a name...",
  divClassName,
  boldSearch9Color = "#999999",
}) => {
  return (
    <div
      className={`flex w-[344px] items-center gap-[8px] px-[16px] py-[10px] relative bg-black-100 rounded-[4px] border border-solid border-black-85 ${className}`}
    >
      {icon && <BoldSearch9 className="!relative !w-[14px] !h-[14px]" color={boldSearch9Color} />}

      <p
        className={`relative flex-1 mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-black-60 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)] ${divClassName}`}
      >
        {text}
      </p>
    </div>
  );
};
