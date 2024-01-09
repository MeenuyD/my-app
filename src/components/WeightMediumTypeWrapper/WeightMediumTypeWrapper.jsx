/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const WeightMediumTypeWrapper = ({ weight, type, className }) => {
  return (
    <div className={`inline-flex items-center gap-[6px] relative ${className}`}>
      <div
        className={`w-[10px] h-[10px] rounded-[5px] relative ${
          type === "delivered"
            ? "bg-primary-blue"
            : ["pending", "ready-to-ship", "unpaid"].includes(type)
            ? "bg-secondary-yellow"
            : ["preparing", "shipped"].includes(type)
            ? "bg-primary-orange"
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
        className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
          weight === "regular" ? "font-body-2-regular" : "font-sub-title-medium"
        } ${
          weight === "regular"
            ? "tracking-[var(--body-2-regular-letter-spacing)]"
            : "tracking-[var(--sub-title-medium-letter-spacing)]"
        } ${
          weight === "regular"
            ? "text-[length:var(--body-2-regular-font-size)]"
            : "text-[length:var(--sub-title-medium-font-size)]"
        } ${
          weight === "regular"
            ? "[font-style:var(--body-2-regular-font-style)]"
            : "[font-style:var(--sub-title-medium-font-style)]"
        } ${weight === "regular" ? "text-black-12" : "text-black-50"} ${
          weight === "regular"
            ? "font-[number:var(--body-2-regular-font-weight)]"
            : "font-[number:var(--sub-title-medium-font-weight)]"
        } ${
          weight === "regular"
            ? "leading-[var(--body-2-regular-line-height)]"
            : "leading-[var(--sub-title-medium-line-height)]"
        }`}
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
