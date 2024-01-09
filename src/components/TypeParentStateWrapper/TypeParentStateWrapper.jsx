/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NavbarIcon11 } from "../../icons/NavbarIcon11";
import { TagInfo } from "../TagInfo";

export const TypeParentStateWrapper = ({
  type,
  state,
  badge,
  beta,
  className,
  icon = <NavbarIcon11 className="!relative !w-[20px] !h-[20px]" />,
  text = "Home",
}) => {
  return (
    <div
      className={`w-[208px] flex relative ${
        state === "hover" ||
        (state === "inactive" && type === "parent") ||
        (!beta && state === "active" && type === "parent")
          ? "items-start"
          : type === "child" || (beta && state === "active")
          ? "items-center"
          : ""
      } ${type === "child" ? "gap-[8px]" : "gap-[12px]"} ${
        type === "child" ? "pl-[48px] pr-0 py-[4px]" : "px-[16px] py-[8px]"
      } ${type === "parent" ? "rounded-[4px]" : ""} ${
        state === "active" && type === "parent" ? "bg-[#ffffff1a]" : state === "hover" ? "bg-[#ffffff0d]" : ""
      } ${className}`}
    >
      {!beta && type === "parent" && !badge && (
        <>
          {icon}
          <div
            className={`font-body-2-medium w-fit mt-[-1.00px] tracking-[var(--body-2-medium-letter-spacing)] text-[length:var(--body-2-medium-font-size)] [font-style:var(--body-2-medium-font-style)] text-black-100 relative font-[number:var(--body-2-medium-font-weight)] whitespace-nowrap leading-[var(--body-2-medium-line-height)] ${
              state === "inactive" ? "opacity-80" : ""
            }`}
          >
            {text}
          </div>
        </>
      )}

      {(badge || beta) && <NavbarIcon11 className="!relative !w-[20px] !h-[20px]" />}

      {beta && (
        <>
          <div
            className={`font-body-2-medium mt-[-1.00px] tracking-[var(--body-2-medium-letter-spacing)] text-[length:var(--body-2-medium-font-size)] [font-style:var(--body-2-medium-font-style)] flex-1 text-black-100 relative font-[number:var(--body-2-medium-font-weight)] leading-[var(--body-2-medium-line-height)] ${
              state === "inactive" ? "opacity-80" : ""
            }`}
          >
            {text}
          </div>
          <TagInfo className="!flex-[0_0_auto]" size="twenty-px" text="medium" type="beta" />
        </>
      )}

      {badge && (
        <>
          <div
            className={`font-body-2-medium mt-[-1.00px] tracking-[var(--body-2-medium-letter-spacing)] text-[length:var(--body-2-medium-font-size)] [font-style:var(--body-2-medium-font-style)] text-black-100 relative font-[number:var(--body-2-medium-font-weight)] leading-[var(--body-2-medium-line-height)] ${
              state === "inactive" ? "w-[108px]" : ""
            } ${state === "inactive" ? "opacity-80" : ""} ${["active", "hover"].includes(state) ? "flex-1" : ""}`}
          >
            {text}
          </div>
          <div className="w-[26px] mr-[-2.00px] h-[20px] relative">
            <div className="w-[24px] h-[20px] rounded-[10px] bg-primary-orange relative">
              <div className="font-sub-body-medium left-[8px] [font-style:var(--sub-body-medium-font-style)] tracking-[var(--sub-body-medium-letter-spacing)] text-[length:var(--sub-body-medium-font-size)] top-[2px] text-black-100 absolute font-[number:var(--sub-body-medium-font-weight)] text-center whitespace-nowrap leading-[var(--sub-body-medium-line-height)]">
                3
              </div>
            </div>
          </div>
        </>
      )}

      {type === "child" && (
        <div
          className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
            state === "active" ? "font-sub-body-medium" : state === "inactive" ? "font-sub-body-regular" : ""
          } ${
            state === "active"
              ? "tracking-[var(--sub-body-medium-letter-spacing)]"
              : state === "inactive"
              ? "tracking-[var(--sub-body-regular-letter-spacing)]"
              : ""
          } ${
            state === "active"
              ? "text-[length:var(--sub-body-medium-font-size)]"
              : state === "inactive"
              ? "text-[length:var(--sub-body-regular-font-size)]"
              : ""
          } ${
            state === "active"
              ? "[font-style:var(--sub-body-medium-font-style)]"
              : state === "inactive"
              ? "[font-style:var(--sub-body-regular-font-style)]"
              : ""
          } ${state === "active" ? "text-black-100" : state === "inactive" ? "text-black-70" : ""} ${
            state === "active"
              ? "font-[number:var(--sub-body-medium-font-weight)]"
              : state === "inactive"
              ? "font-[number:var(--sub-body-regular-font-weight)]"
              : ""
          } ${
            state === "active"
              ? "leading-[var(--sub-body-medium-line-height)]"
              : state === "inactive"
              ? "leading-[var(--sub-body-regular-line-height)]"
              : ""
          }`}
        >
          Child Item (12)
        </div>
      )}
    </div>
  );
};
