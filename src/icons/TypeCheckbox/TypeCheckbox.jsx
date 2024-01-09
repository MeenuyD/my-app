/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeCheckbox = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z"
        fill={color}
      />
      <path
        clipRule="evenodd"
        d="M17 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V17C1.5 17.8284 2.17157 18.5 3 18.5H17C17.8284 18.5 18.5 17.8284 18.5 17V3C18.5 2.17157 17.8284 1.5 17 1.5ZM3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3Z"
        fill="#B3B3B3"
        fillRule="evenodd"
      />
    </svg>
  );
};
