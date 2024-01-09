/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { TableType } from "../TableType";

export const CellTableRow = ({
  className,
  tableTypeType = "text-medium",
  tableTypeText = "Sample Data",
  resizableSpacerClassName,
  tableType,
  tableTypeDivClassName,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start justify-center relative bg-black-100 overflow-hidden ${className}`}
    >
      <TableType
        className="!flex-[0_0_auto]"
        divClassName={tableTypeDivClassName}
        override={tableType}
        text={tableTypeText}
        type={tableTypeType}
      />
      <div
        className={`inline-flex items-start gap-[90px] relative flex-[0_0_auto] -mt-px opacity-0 ${resizableSpacerClassName}`}
      >
        <div className="relative w-px h-px rounded-none" />
        <div className="mr-[-1.00px] relative w-px h-px rounded-none" />
      </div>
    </div>
  );
};
