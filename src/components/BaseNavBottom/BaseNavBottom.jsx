/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { OutlineWallet } from "../OutlineWallet";

export const BaseNavBottom = ({
  property1,
  className,
  outlineWalletWallet = "https://c.animaapp.com/CqtaZhb1/img/wallet-3.svg",
}) => {
  return (
    <div
      className={`w-[192px] flex flex-col items-start gap-[10px] px-[12px] py-[6px] rounded-[4px] bg-[#353c53] relative ${className}`}
    >
      <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative">
        {property1 === "wallet-credits" && (
          <div className="inline-flex items-start gap-[10px] p-[6px] relative flex-[0_0_auto] bg-[#ffffff1a] rounded-[4px]">
            <OutlineWallet wallet={outlineWalletWallet} />
          </div>
        )}

        <div className="inline-flex flex-col items-start gap-[2px] flex-[0_0_auto] relative">
          <div className="font-sub-body-regular w-fit mt-[-1.00px] tracking-[var(--sub-body-regular-letter-spacing)] text-[length:var(--sub-body-regular-font-size)] opacity-80 [font-style:var(--sub-body-regular-font-style)] text-black-100 font-[number:var(--sub-body-regular-font-weight)] leading-[var(--sub-body-regular-line-height)] whitespace-nowrap relative">
            {property1 === "wallet-credits" && <>Available credits</>}

            {property1 === "support" && <>Need any help?</>}
          </div>
          <div
            className={`w-fit text-black-100 whitespace-nowrap relative ${
              property1 === "support" ? "font-body-1-medium" : "[font-family:'Inter',Helvetica]"
            } ${property1 === "support" ? "tracking-[var(--body-1-medium-letter-spacing)]" : "tracking-[0]"} ${
              property1 === "support" ? "[font-style:var(--body-1-medium-font-style)]" : ""
            } ${property1 === "support" ? "text-[length:var(--body-1-medium-font-size)]" : "text-[16px]"} ${
              property1 === "support" ? "font-[number:var(--body-1-medium-font-weight)]" : "font-medium"
            } ${property1 === "support" ? "leading-[var(--body-1-medium-line-height)]" : "leading-[24px]"}`}
          >
            {property1 === "wallet-credits" && <>222.10</>}

            {property1 === "support" && <>Watch tutorials</>}
          </div>
        </div>
      </div>
    </div>
  );
};
