/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsMenu3 } from "../../icons/IconsMenu3";
import { TypeMessageStateActive } from "../../icons/TypeMessageStateActive";
import { TypeNotificationStateActive } from "../../icons/TypeNotificationStateActive";
import { TypeNotificationStateNormal } from "../../icons/TypeNotificationStateNormal";
import { TypeShortcutsStateHover } from "../../icons/TypeShortcutsStateHover";
import { TypeShortcutsStateNormal } from "../../icons/TypeShortcutsStateNormal";

export const IconsMenu = ({
  type,
  state,
  typeDropdownStateClassName,
  polygonClassName,
  polygon = "https://c.animaapp.com/CqtaZhb1/img/polygon-2-3.svg",
}) => {
  return (
    <>
      {type === "notification" && ["active", "hover"].includes(state) && (
        <TypeNotificationStateActive
          className="!absolute !w-[36px] !h-[36px] !top-0 !left-0"
          color={state === "hover" ? "#D9D9D9" : "#146EB4"}
          fill={state === "hover" ? "#4D4D4D" : "#146EB4"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}

      {state === "normal" && type === "notification" && (
        <TypeNotificationStateNormal className="!absolute !w-[36px] !h-[36px] !top-0 !left-0" />
      )}

      {type === "message" && state === "normal" && (
        <IconsMenu3 className="!absolute !w-[36px] !h-[36px] !top-0 !left-0" />
      )}

      {type === "message" && ["active", "hover"].includes(state) && (
        <TypeMessageStateActive
          className="!absolute !w-[36px] !h-[36px] !top-0 !left-0"
          color={state === "hover" ? "#D9D9D9" : "#146EB4"}
          fill={state === "hover" ? "#4D4D4D" : "#146EB4"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}

      {type === "dropdown" && (
        <div
          className={`w-[36px] h-[36px] rounded-[18px] relative ${state === "normal" ? "overflow-hidden" : ""} ${
            state === "active" ? "bg-[#146eb41a]" : state === "hover" ? "bg-[#d9d9d9]" : "bg-[#e6e6e6]"
          } ${typeDropdownStateClassName}`}
        >
          <img
            className={`w-[12px] left-[12px] top-[15px] h-[8px] absolute ${polygonClassName}`}
            alt="Polygon"
            src={state === "active" ? "https://c.animaapp.com/CqtaZhb1/img/polygon-2-2.svg" : polygon}
          />
        </div>
      )}

      {type === "shortcuts" && state === "normal" && (
        <TypeShortcutsStateNormal className="!absolute !w-[36px] !h-[36px] !top-0 !left-0" />
      )}

      {type === "shortcuts" && ["active", "hover"].includes(state) && (
        <TypeShortcutsStateHover
          className="!absolute !w-[36px] !h-[36px] !top-0 !left-0"
          color={state === "active" ? "#146EB4" : "#D9D9D9"}
          fill={state === "active" ? "#146EB4" : "#4D4D4D"}
          opacity={state === "active" ? "0.1" : undefined}
        />
      )}
    </>
  );
};
