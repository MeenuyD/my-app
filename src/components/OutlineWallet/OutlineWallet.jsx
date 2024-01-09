/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const OutlineWallet = ({ wallet = "https://c.animaapp.com/CqtaZhb1/img/wallet-1.svg" }) => {
  return (
    <div className="relative w-[24px] h-[24px]">
      <img className="absolute w-[24px] h-[20px] top-[2px] left-0" alt="Wallet" src={wallet} />
    </div>
  );
};
