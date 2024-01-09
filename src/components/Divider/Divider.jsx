/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Divider = ({ stroke, className }) => {
  return (
    <div
      className={`w-[472px] bg-cover -top-px h-px bg-[50%_50%] relative ${
        stroke === "black-90"
          ? "bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-6.svg)]"
          : stroke === "dash"
          ? "bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-5.svg)]"
          : "bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-7.svg)]"
      } ${className}`}
    />
  );
};
