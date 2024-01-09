/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsMenu3 } from "../../icons/IconsMenu3";
import { TypeNotificationStateNormal } from "../../icons/TypeNotificationStateNormal";
import { TypeShortcutsStateNormal } from "../../icons/TypeShortcutsStateNormal";
import { IconsMenu } from "../IconsMenu";

export const Icons = ({
  type,
  className,
  iconsMenuPolygon = "https://c.animaapp.com/CqtaZhb1/img/polygon-2-9.svg",
}) => {
  return (
    <div className={`inline-flex items-start gap-[12px] relative ${className}`}>
      <IconsMenu3 className="!relative !w-[40px] !h-[40px]" />
      {["four", "three"].includes(type) && <TypeNotificationStateNormal className="!relative !w-[40px] !h-[40px]" />}

      <IconsMenu
        polygon={type === "two" ? iconsMenuPolygon : "https://c.animaapp.com/CqtaZhb1/img/polygon-2-9.svg"}
        polygonClassName="!h-[9px] !left-[13px] !w-[14px] !top-[17px]"
        state="normal"
        type="dropdown"
        typeDropdownStateClassName="!rounded-[20px] !h-[40px] !w-[40px]"
      />
      {type === "four" && <TypeShortcutsStateNormal className="!relative !w-[40px] !h-[40px]" />}
    </div>
  );
};
