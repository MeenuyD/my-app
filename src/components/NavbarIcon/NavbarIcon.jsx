/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NameAnalyticsStateTrue } from "../../icons/NameAnalyticsStateTrue";
import { NameDeliveryStateTrue } from "../../icons/NameDeliveryStateTrue";
import { NameDiscountsStateFalse } from "../../icons/NameDiscountsStateFalse";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NameMarketingStateTrue } from "../../icons/NameMarketingStateTrue";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NameTutorialsStateTrue } from "../../icons/NameTutorialsStateTrue";
import { NavbarIcon109 } from "../../icons/NavbarIcon109";
import { NavbarIcon122 } from "../../icons/NavbarIcon122";
import { NavbarIcon135 } from "../../icons/NavbarIcon135";
import { NavbarIcon160 } from "../../icons/NavbarIcon160";
import { NavbarIcon39 } from "../../icons/NavbarIcon39";
import { NavbarIcon44 } from "../../icons/NavbarIcon44";
import { NavbarIcon46 } from "../../icons/NavbarIcon46";
import { NavbarIcon96 } from "../../icons/NavbarIcon96";

export const NavbarIcon = ({
  name,
  state,
  nameAccountStateClassName,
  vectorClassName,
  vector = "https://c.animaapp.com/CqtaZhb1/img/vector-3.svg",
}) => {
  return (
    <>
      {(name === "account" ||
        name === "affiliate" ||
        name === "appearance" ||
        name === "catalogue" ||
        name === "home" ||
        name === "manage" ||
        name === "orders" ||
        name === "pages" ||
        (name === "plugin" && !state) ||
        name === "vendor") && (
        <img
          className={`w-[24px] left-0 top-0 h-[24px] absolute ${nameAccountStateClassName}`}
          alt="Name account state"
          src={
            state && name === "pages"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-pages--state-true.png"
              : name === "appearance" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-appearance--state-true.png"
              : name === "account" && !state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-account--state-false.png"
              : name === "plugin"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-plugin--state-false.png"
              : !state && name === "pages"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-pages--state-false.png"
              : !state && name === "appearance"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-appearance--state-false.png"
              : name === "catalogue" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-catalogue--state-true.png"
              : !state && name === "catalogue"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-catalogue--state-false.png"
              : name === "home" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-home--state-true.png"
              : name === "affiliate" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-affiliate--state-true.png"
              : name === "vendor" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-vendor--state-true.png"
              : !state && name === "home"
              ? "https://c.animaapp.com/CqtaZhb1/img/name-home--state-false.png"
              : name === "manage" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-manage--state-true.png"
              : name === "manage" && !state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-manage--state-false.png"
              : name === "orders" && state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-orders--state-true.png"
              : name === "orders" && !state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-orders--state-false.png"
              : name === "affiliate" && !state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-affiliate--state-false.png"
              : name === "vendor" && !state
              ? "https://c.animaapp.com/CqtaZhb1/img/name-vendor--state-false.png"
              : "https://c.animaapp.com/CqtaZhb1/img/name-account--state-true.png"
          }
        />
      )}

      {((state && name === "plugin") || (!state && name === "tutorials")) && (
        <div className={`w-[24px] h-[24px] relative ${!state ? "opacity-80" : ""} ${nameAccountStateClassName}`}>
          <img
            className={`absolute ${!state ? "w-[24px]" : "w-[21px]"} ${!state ? "left-0" : "left-[2px]"} ${
              !state ? "top-[3px]" : "top-px"
            } ${!state ? "h-[18px]" : "h-[23px]"} ${vectorClassName}`}
            alt="Vector"
            src={!state ? "https://c.animaapp.com/CqtaZhb1/img/vector-2.svg" : vector}
          />
        </div>
      )}

      {name === "tools" && state && (
        <NavbarIcon122 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "tools" && !state && (
        <NavbarIcon46 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "discounts" && !state && (
        <NameDiscountsStateFalse className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />
      )}

      {name === "discounts" && state && (
        <NavbarIcon109 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "payments" && state && (
        <NavbarIcon135 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "payments" && !state && (
        <NamePaymentsStateFalse className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "marketing" && !state && (
        <NameMarketingStateFalse className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "customers" && !state && (
        <NavbarIcon44 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "marketing" && state && (
        <NameMarketingStateTrue className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "customers" && state && (
        <NavbarIcon96 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "tutorials" && state && (
        <NameTutorialsStateTrue className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />
      )}

      {name === "delivery" && !state && (
        <NavbarIcon39 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "delivery" && state && (
        <NameDeliveryStateTrue className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "analytics" && !state && (
        <NavbarIcon160 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}

      {name === "analytics" && state && (
        <NameAnalyticsStateTrue className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" color="#4D4D4D" />
      )}
    </>
  );
};
