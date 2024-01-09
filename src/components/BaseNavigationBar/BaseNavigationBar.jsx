/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BoldChevronDown3 } from "../../icons/BoldChevronDown3";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NavbarIcon11 } from "../../icons/NavbarIcon11";
import { NavbarIcon143 } from "../../icons/NavbarIcon143";
import { NavbarIcon145 } from "../../icons/NavbarIcon145";
import { NavbarIcon160 } from "../../icons/NavbarIcon160";
import { NavbarIcon164 } from "../../icons/NavbarIcon164";
import { NavbarIcon29 } from "../../icons/NavbarIcon29";
import { NavbarIcon31 } from "../../icons/NavbarIcon31";
import { NavbarIcon32 } from "../../icons/NavbarIcon32";
import { NavbarIcon39 } from "../../icons/NavbarIcon39";
import { NavbarIcon44 } from "../../icons/NavbarIcon44";
import { NavbarIcon46 } from "../../icons/NavbarIcon46";
import { NavbarIcon8 } from "../../icons/NavbarIcon8";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";

export const BaseNavigationBar = ({
  className,
  baseNavButtonIcon = <NavbarIcon11 className="!relative !w-[20px] !h-[20px]" />,
  override = <NavbarIcon164 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonIcon1 = <NavbarIcon8 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonIcon2 = <NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavButtonIcon3 = <NameMarketingStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavButtonIcon4 = <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />,
  override1 = (
    <BaseNavButton
      badge={false}
      beta={false}
      className="!flex-[0_0_auto]"
      icon={<NamePaymentsStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />}
      state="inactive"
      text="Payouts"
      type="parent"
    />
  ),
  visible = true,
  baseNavButtonIcon5 = <NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonIcon6 = <NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />,
  visible1 = true,
  visible2 = true,
  baseNavButtonIcon7 = <NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonIcon8 = <NavbarIcon29 className="!relative !w-[20px] !h-[20px]" />,
  baseNavBottomOutlineWalletWallet = "https://c.animaapp.com/CqtaZhb1/img/wallet-3.svg",
  baseNavButtonIcon9 = <NavbarIcon46 className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavButtonState = "inactive",
  baseNavButtonState1 = "inactive",
  baseNavButtonState2 = "inactive",
  baseNavButtonState3 = "inactive",
  baseNavButtonState4 = "inactive",
  baseNavButtonState5 = "inactive",
  baseNavButtonState6 = "inactive",
  baseNavButtonState7 = "inactive",
  baseNavButtonIcon10 = <NavbarIcon32 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonIcon11 = <NavbarIcon31 className="!relative !w-[20px] !h-[20px]" />,
  baseNavButtonState8 = "inactive",
}) => {
  return (
    <div
      className={`flex flex-col w-[224px] h-[800px] items-center gap-[16px] px-[10px] py-[16px] relative bg-secondary-navbar ${className}`}
    >
      <div className="inline-flex flex-col items-center gap-[24px] relative flex-1 grow ml-[-2.00px] mr-[-2.00px]">
        <div className="flex w-[192px] items-center gap-[12px] relative flex-[0_0_auto]">
          <div className="relative w-[40px] h-[40px] bg-black-100 rounded-[4px]" />
          <div className="flex flex-col items-start justify-center gap-[4px] relative flex-1 grow">
            <div className="relative self-stretch mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-black-100 text-[length:var(--body-1-medium-font-size)] tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] [font-style:var(--body-1-medium-font-style)]">
              Nishyan
            </div>
            <div className="relative self-stretch opacity-80 [font-family:'Galano_Grotesque-Regular',Helvetica] font-normal text-black-100 text-[13px] tracking-[0] leading-[16px] underline">
              Visit store
            </div>
          </div>
          <img
            className="absolute w-[39px] h-[39px] top-0 left-0"
            alt="Image"
            src="https://c.animaapp.com/CqtaZhb1/img/image-48@2x.png"
          />
          <BoldChevronDown3 className="!relative !w-[20px] !h-[20px]" color="white" />
        </div>
        <div className="inline-flex flex-col items-start gap-[4px] relative flex-1 grow">
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon}
            state={baseNavButtonState}
            text="Home"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={override}
            state="inactive"
            text="Orders"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon1}
            state="inactive"
            text="Products"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon2}
            state={baseNavButtonState1}
            text="Delivery"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon3}
            state={baseNavButtonState2}
            text="Marketing"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon4}
            state={baseNavButtonState3}
            text="Analytics"
            type="parent"
          />
          {override1}

          {visible && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="!flex-[0_0_auto]"
              icon={baseNavButtonIcon9}
              state={baseNavButtonState4}
              text="Tools"
              type="parent"
            />
          )}

          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon5}
            state={baseNavButtonState5}
            text="Discounts"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon6}
            state={baseNavButtonState6}
            text="Audience"
            type="parent"
          />
          {visible1 && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="!flex-[0_0_auto]"
              icon={baseNavButtonIcon10}
              state={baseNavButtonState7}
              text="Affiliates"
              type="parent"
            />
          )}

          {visible2 && (
            <BaseNavButton
              badge={false}
              beta={false}
              className="!flex-[0_0_auto]"
              icon={baseNavButtonIcon11}
              state={baseNavButtonState8}
              text="Vendors"
              type="parent"
            />
          )}

          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon7}
            state="inactive"
            text="Appearance"
            type="parent"
          />
          <BaseNavButton
            badge={false}
            beta={false}
            className="!flex-[0_0_auto]"
            icon={baseNavButtonIcon8}
            state="inactive"
            text="Plugins"
            type="parent"
          />
        </div>
      </div>
      <BaseNavBottom
        className="!flex-[0_0_auto]"
        outlineWalletWallet={baseNavBottomOutlineWalletWallet}
        property1="wallet-credits"
      />
    </div>
  );
};
