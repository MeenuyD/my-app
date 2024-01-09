/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TagStatus = ({ weight, type, className }) => {
  return (
    <div className={`inline-flex items-center gap-[6px] relative ${className}`}>
      <div
        className={`w-[10px] h-[10px] rounded-[5px] relative ${
          type === "delivered"
            ? "bg-primary-blue"
            : ["pending", "ready-to-ship", "unpaid"].includes(type)
            ? "bg-secondary-yellow"
            : ["preparing", "shipped"].includes(type)
            ? "bg-primaryorange"
            : ["cancelled-by-buyer", "cancelled", "failed", "rejected"].includes(type)
            ? "bg-secondary-red"
            : type === "served"
            ? "bg-secondary-raspberry"
            : type === "processing"
            ? "bg-black-60"
            : "bg-secondary-green"
        }`}
      />
      <div
        className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] whitespace-nowrap relative ${
          weight === "regular" ? "text-[14px]" : "text-[16px]"
        } ${weight === "regular" ? "text-black-12" : "text-black-50"} ${
          weight === "regular" ? "font-normal" : "font-medium"
        } ${weight === "regular" ? "leading-[20px]" : "leading-[24px]"}`}
      >
        {type === "delivered" && <>Delivered</>}

        {type === "accepted" && <>Accepted</>}

        {type === "received" && <>Received</>}

        {type === "successful" && <>Successful</>}

        {type === "pending" && <>Pending</>}

        {type === "ready-to-ship" && <>Ready to ship</>}

        {type === "shipped" && <>Shipped</>}

        {type === "preparing" && <>Preparing</>}

        {type === "cancelled" && <>Cancelled</>}

        {type === "served" && <>Served</>}

        {type === "rejected" && <>Rejected</>}

        {type === "failed" && <>Failed</>}

        {type === "processing" && <>Processing</>}

        {type === "unpaid" && <>Unpaid</>}

        {type === "cancelled-by-buyer" && <>Cancelled by buyer</>}

        {type === "completed" && <>Completed</>}
      </div>
    </div>
  );
};
