/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeShortcutsStateHover = ({ color = "#D9D9D9", opacity = "unset", fill = "#4D4D4D", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" fill={color} fillOpacity={opacity} r="18" />
      <path
        d="M23.8298 20.5412C24.3319 21.0515 25.2 20.696 25.2 19.9801V8.89998C25.2 8.45815 24.8419 8.09998 24.4 8.09998H13.4972C12.7876 8.09998 12.4292 8.95528 12.9269 9.46108L15.7165 12.296C7.34749 19.9911 10.9862 26.2566 16.834 27.6229C17.2755 27.7261 17.4558 27.0461 17.1164 26.7456C14.1528 24.122 17.9835 19.5848 20.6841 17.3443L23.8298 20.5412Z"
        fill={fill}
      />
    </svg>
  );
};
