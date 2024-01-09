/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TagInfo = ({ type, size, text, className }) => {
  return (
    <div
      className={`inline-flex rounded-[3px] relative ${text === "semi-bold" ? "items-center" : "items-start"} ${
        text === "semi-bold" ? "gap-[10px]" : "gap-[8px]"
      } ${
        type === "beta" || type === "draft" || type === "new" || (size === "twenty-px" && type === "return")
          ? "px-[6px] py-[2px]"
          : size === "twenty-two-px" && type === "return"
          ? "px-[6px] py-px"
          : (size === "twenty-px" && type === "COD") ||
            (size === "twenty-px" && type === "cash") ||
            (size === "twenty-px" && type === "manual") ||
            (size === "twenty-px" && type === "paid") ||
            (size === "twenty-px" && type === "unpaid")
          ? "px-[8px] py-[2px]"
          : "px-[8px] py-px"
      } ${text === "semi-bold" ? "justify-end" : ""} ${
        type === "new"
          ? "bg-secondary-green"
          : type === "beta"
          ? "bg-[#ffffff4c]"
          : type === "return" && text === "medium"
          ? "bg-secondary-red"
          : type === "draft"
          ? "bg-secondary-yellow"
          : type === "cash"
          ? "bg-[#df1e5b26]"
          : type === "paid"
          ? "bg-[#17b31b26]"
          : type === "COD"
          ? "bg-[#ee741f26]"
          : type === "manual"
          ? "bg-[#78380c26]"
          : type === "unpaid"
          ? "bg-[#4d4d4d26]"
          : "bg-[#e50b2026]"
      } ${className}`}
    >
      <div
        className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
          text === "semi-bold" ? "[font-family:'Galano_Grotesque-SemiBold',Helvetica]" : "font-caption-medium"
        } ${text === "semi-bold" ? "tracking-[0]" : "tracking-[var(--caption-medium-letter-spacing)]"} ${
          text === "medium"
            ? "text-[length:var(--caption-medium-font-size)]"
            : size === "twenty-px" && text === "semi-bold"
            ? "text-[12px]"
            : size === "twenty-two-px"
            ? "text-[14px]"
            : ""
        } ${text === "medium" ? "[font-style:var(--caption-medium-font-style)]" : ""} ${
          text === "semi-bold" && type === "return"
            ? "text-secondary-red"
            : type === "draft"
            ? "text-black-12"
            : type === "cash"
            ? "text-secondary-raspberry"
            : type === "paid"
            ? "text-secondary-green"
            : type === "COD"
            ? "text-primary-orange"
            : type === "manual"
            ? "text-[#78380c]"
            : type === "unpaid"
            ? "text-black-30"
            : "text-black-100"
        } ${text === "semi-bold" ? "font-semibold" : "font-[number:var(--caption-medium-font-weight)]"} ${
          text === "semi-bold" ? "text-right" : ""
        } ${
          text === "medium"
            ? "leading-[var(--caption-medium-line-height)]"
            : size === "twenty-px" && text === "semi-bold"
            ? "leading-[16px]"
            : size === "twenty-two-px"
            ? "leading-[20px]"
            : ""
        }`}
      >
        {type === "new" && <>NEW</>}

        {type === "beta" && <>BETA</>}

        {type === "return" && <>RETURN</>}

        {type === "draft" && <>DRAFT</>}

        {type === "cash" && <>CASH</>}

        {type === "paid" && <>PAID</>}

        {type === "COD" && <>COD</>}

        {type === "manual" && <>MANUAL</>}

        {type === "unpaid" && <>UNPAID</>}
      </div>
    </div>
  );
};
