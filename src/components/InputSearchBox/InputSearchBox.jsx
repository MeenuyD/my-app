/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BoldCross1 } from "../../icons/BoldCross1";
import { BoldSearch9 } from "../../icons/BoldSearch9";
import { BaseSearchField } from "../BaseSearchField";

export const InputSearchBox = ({
  clearText = true,
  icon = true,
  type,
  size,
  className,
  baseSearchFieldText = "Order ID, phone or a name...",
}) => {
  return (
    <div
      className={`flex relative ${
        size === "small" && ["active", "input"].includes(type) ? "border border-solid" : ""
      } ${
        size === "small" && type === "active"
          ? "border-primary-blue"
          : type === "input" && size === "small"
          ? "border-black-85"
          : ""
      } ${size === "small" ? "w-[248px]" : "w-[344px]"} ${
        size === "small" && ["active", "focus", "input"].includes(type) ? "items-center" : "items-start"
      } ${size === "small" && ["active", "focus", "input"].includes(type) ? "gap-[8px]" : ""} ${
        size === "small" && type === "active" ? "shadow-[0px_0px_0px_3px_#146eb433]" : ""
      } ${size === "small" && ["active", "focus", "input"].includes(type) ? "px-[16px] py-[10px]" : ""} ${
        size === "small" && type === "active" ? "overflow-hidden" : ""
      } ${size === "small" && ["active", "focus", "input"].includes(type) ? "rounded-[4px]" : ""} ${
        size === "small" && ["active", "input"].includes(type)
          ? "bg-black-100"
          : type === "focus" && size === "small"
          ? "bg-black-95"
          : ""
      } ${className}`}
    >
      {(size === "default" || (size === "small" && type === "default") || (size === "small" && type === "header")) && (
        <BaseSearchField
          boldSearch9Color={
            type === "header" ? "#808080" : size === "small" && type === "default" ? "#999999" : undefined
          }
          className={
            ["default", "input"].includes(type)
              ? "!flex-1 !grow !w-[unset]"
              : type === "active"
              ? "!border-primary-blue !flex-1 !shadow-[0px_0px_0px_3px_#146eb433] !grow !overflow-hidden !w-[unset]"
              : type === "header" && size === "default"
              ? "!border-black-90 !flex-1 !grow !bg-black-95 !w-[unset]"
              : "!border-[unset] !flex-1 !border-[unset] !grow !bg-black-95 !w-[unset]"
          }
          divClassName={
            ["focus", "input"].includes(type) ? "!text-black-12" : type === "header" ? "!text-black-50" : undefined
          }
          text={baseSearchFieldText}
        />
      )}

      {size === "small" && ["active", "focus", "input"].includes(type) && (
        <>
          <>{icon && <BoldSearch9 className="!relative !w-[16px] !h-[16px]" color="#999999" />}</>
          <div
            className={`font-body-2-regular mt-[-1.00px] tracking-[var(--body-2-regular-letter-spacing)] text-[length:var(--body-2-regular-font-size)] [font-style:var(--body-2-regular-font-style)] flex-1 font-[number:var(--body-2-regular-font-weight)] leading-[var(--body-2-regular-line-height)] relative ${
              type === "active" ? "text-black-60" : "text-black-12"
            }`}
          >
            Search blogs...
          </div>
        </>
      )}

      {size === "small" && ["focus", "input"].includes(type) && (
        <>
          <>{clearText && <BoldCross1 className="!relative !w-[16px] !h-[16px]" />}</>
        </>
      )}
    </div>
  );
};
