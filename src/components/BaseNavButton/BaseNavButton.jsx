/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NavbarIcon11 } from "../../icons/NavbarIcon11";

export const BaseNavButton = ({
  type,
  state,
  badge,
  beta,
  className,
  icon = <NavbarIcon11 className="!relative !w-[20px] !h-[20px]" />,
  text = "Home",
  override = <NavbarIcon11 className="!relative !w-[20px] !h-[20px]" />,
  text1 = "Child Item (12)",
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
            className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-black-100 relative font-medium whitespace-nowrap leading-[20px] ${
              state === "inactive" ? "opacity-80" : ""
            }`}
          >
            {text}
          </div>
        </>
      )}

      {(badge || beta) && (
        <>
          {override}
          <div
            className={`[font-family:'Inter',Helvetica] mt-[-1.00px] tracking-[0] text-[14px] text-black-100 font-medium leading-[20px] relative ${
              badge && state === "inactive" ? "w-[108px]" : ""
            } ${state === "inactive" ? "opacity-80" : ""} ${
              !badge || state === "active" || state === "hover" ? "flex-1" : ""
            }`}
          >
            {text}
          </div>
          <div
            className={`relative ${badge ? "w-[26px]" : ""} ${!badge ? "inline-flex" : ""} ${
              !badge ? "items-start" : ""
            } ${badge ? "mr-[-2.00px]" : ""} ${!badge ? "gap-[8px]" : ""} ${!badge ? "flex-[0_0_auto]" : ""} ${
              !badge ? "px-[6px] py-[2px]" : ""
            } ${badge ? "h-[20px]" : ""} ${!badge ? "rounded-[3px]" : ""} ${!badge ? "bg-[#ffffff4c]" : ""}`}
          >
            <div
              className={`relative ${!badge ? "[font-family:'Inter',Helvetica]" : ""} ${badge ? "w-[24px]" : "w-fit"} ${
                !badge ? "mt-[-1.00px]" : ""
              } ${!badge ? "tracking-[0]" : ""} ${!badge ? "text-[12px]" : ""} ${!badge ? "text-black-100" : ""} ${
                badge ? "h-[20px]" : ""
              } ${!badge ? "font-medium" : ""} ${!badge ? "leading-[16px]" : ""} ${!badge ? "whitespace-nowrap" : ""} ${
                badge ? "rounded-[10px]" : ""
              } ${badge ? "bg-primaryorange" : ""}`}
            >
              {!badge && <>BETA</>}

              {badge && (
                <div className="font-sub-body-medium left-[8px] [font-style:var(--sub-body-medium-font-style)] tracking-[var(--sub-body-medium-letter-spacing)] text-[length:var(--sub-body-medium-font-size)] top-[2px] text-black-100 absolute font-[number:var(--sub-body-medium-font-weight)] text-center whitespace-nowrap leading-[var(--sub-body-medium-line-height)]">
                  3
                </div>
              )}
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
          {text1}
        </div>
      )}
    </div>
  );
};
