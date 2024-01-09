/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TableType } from "../TableType";

export const CellHeaderRow = ({ sort = false, className, tableTypeText = "Sample Data", tableTypeDivClassName }) => {
  return (
    <div
      className={`inline-flex flex-col items-start justify-center relative bg-black-100 overflow-hidden ${className}`}
    >
      <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
        <TableType
          className="!flex-[0_0_auto]"
          divClassName={tableTypeDivClassName}
          text={tableTypeText}
          type="text-medium"
        />
      </div>
      <div className="inline-flex items-start gap-[90px] relative flex-[0_0_auto] -mt-px opacity-0">
        <div className="relative w-px h-px rounded-none" />
        <div className="mr-[-1.00px] relative w-px h-px rounded-none" />
      </div>
    </div>
  );
};
