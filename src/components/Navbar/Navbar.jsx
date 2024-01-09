/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BoldChevronDown3 } from "../../icons/BoldChevronDown3";
import { NameMarketingStateFalse } from "../../icons/NameMarketingStateFalse";
import { NamePaymentsStateFalse } from "../../icons/NamePaymentsStateFalse";
import { NavbarIcon122 } from "../../icons/NavbarIcon122";
import { NavbarIcon143 } from "../../icons/NavbarIcon143";
import { NavbarIcon145 } from "../../icons/NavbarIcon145";
import { NavbarIcon160 } from "../../icons/NavbarIcon160";
import { NavbarIcon164 } from "../../icons/NavbarIcon164";
import { NavbarIcon187 } from "../../icons/NavbarIcon187";
import { NavbarIcon200 } from "../../icons/NavbarIcon200";
import { NavbarIcon29 } from "../../icons/NavbarIcon29";
import { NavbarIcon31 } from "../../icons/NavbarIcon31";
import { NavbarIcon32 } from "../../icons/NavbarIcon32";
import { NavbarIcon39 } from "../../icons/NavbarIcon39";
import { NavbarIcon44 } from "../../icons/NavbarIcon44";
import { NavbarIcon46 } from "../../icons/NavbarIcon46";
import { NavbarIcon53 } from "../../icons/NavbarIcon53";
import { NavbarIcon55 } from "../../icons/NavbarIcon55";
import { NavbarIcon68 } from "../../icons/NavbarIcon68";
import { NavbarIcon8 } from "../../icons/NavbarIcon8";
import { NavbarIcon83 } from "../../icons/NavbarIcon83";
import { BaseNavBottom } from "../BaseNavBottom";
import { BaseNavButton } from "../BaseNavButton";
import { BaseNavigationBar } from "../BaseNavigationBar";
import { NavbarIcon } from "../NavbarIcon";

export const Navbar = ({
  navbar,
  className,
  baseNavigationBarBaseNavButtonIcon = <NavbarIcon164 className="!relative !w-[20px] !h-[20px]" />,
  baseNavigationBar = (
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
  override = <NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />,
  baseNavigationBarBaseNavButtonIcon1 = <NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavigationBarBaseNavButtonIcon2 = <NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavigationBarBaseNavButtonIcon3 = (
    <NameMarketingStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
  ),
  baseNavigationBarVisible,
  baseNavigationBarBaseNavButtonIcon4 = <NavbarIcon29 className="!relative !w-[20px] !h-[20px]" />,
  baseNavigationBarBaseNavButtonIcon5 = <NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />,
  baseNavigationBarBaseNavBottomOutlineWalletWallet = "https://c.animaapp.com/CqtaZhb1/img/wallet-18.svg",
  baseNavigationBarBaseNavButtonIcon6 = <NavbarIcon8 className="!relative !w-[20px] !h-[20px]" />,
  baseNavigationBarBaseNavButtonIcon7 = <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />,
  baseNavigationBarBaseNavButtonIcon8 = <NavbarIcon53 className="!relative !w-[20px] !h-[20px]" />,
}) => {
  return (
    <div className={`inline-flex flex-col items-start h-[800px] relative ${className}`}>
      {(navbar === "account" ||
        navbar === "affiliates" ||
        navbar === "analytics" ||
        navbar === "audience" ||
        navbar === "delivery" ||
        navbar === "discounts" ||
        navbar === "home" ||
        navbar === "marketing" ||
        navbar === "payouts" ||
        navbar === "tools" ||
        navbar === "vendors") && (
        <BaseNavigationBar
          baseNavBottomOutlineWalletWallet={baseNavigationBarBaseNavBottomOutlineWalletWallet}
          baseNavButtonIcon={baseNavigationBarBaseNavButtonIcon8}
          baseNavButtonIcon1={baseNavigationBarBaseNavButtonIcon6}
          baseNavButtonIcon10={
            navbar === "affiliates" ? (
              <NavbarIcon83 className="!relative !w-[20px] !h-[20px]" />
            ) : navbar === "vendors" ? (
              <NavbarIcon32 className="!relative !w-[20px] !h-[20px]" />
            ) : undefined
          }
          baseNavButtonIcon11={
            navbar === "affiliates" ? (
              <NavbarIcon31 className="!relative !w-[20px] !h-[20px]" />
            ) : navbar === "vendors" ? (
              <NavbarIcon68 className="!relative !w-[20px] !h-[20px]" />
            ) : undefined
          }
          baseNavButtonIcon2={baseNavigationBarBaseNavButtonIcon2}
          baseNavButtonIcon3={baseNavigationBarBaseNavButtonIcon3}
          baseNavButtonIcon4={baseNavigationBarBaseNavButtonIcon7}
          baseNavButtonIcon5={override}
          baseNavButtonIcon6={baseNavigationBarBaseNavButtonIcon1}
          baseNavButtonIcon7={baseNavigationBarBaseNavButtonIcon5}
          baseNavButtonIcon8={baseNavigationBarBaseNavButtonIcon4}
          baseNavButtonIcon9={
            navbar === "tools" ? (
              <NavbarIcon122 className="!relative !w-[20px] !h-[20px]" color="white" />
            ) : (
              <NavbarIcon46 className="!relative !w-[20px] !h-[20px]" color="white" />
            )
          }
          baseNavButtonState={
            navbar === "home"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "delivery" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState1={
            navbar === "delivery"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "marketing" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState2={
            navbar === "marketing"
              ? "active"
              : navbar === "affiliates" ||
                navbar === "analytics" ||
                navbar === "audience" ||
                navbar === "discounts" ||
                navbar === "payouts" ||
                navbar === "tools" ||
                navbar === "vendors"
              ? "inactive"
              : undefined
          }
          baseNavButtonState3={
            navbar === "analytics"
              ? "active"
              : ["affiliates", "audience", "discounts", "payouts", "tools", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState4={
            navbar === "tools"
              ? "active"
              : ["affiliates", "audience", "discounts", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState5={
            navbar === "discounts"
              ? "active"
              : ["affiliates", "audience", "vendors"].includes(navbar)
              ? "inactive"
              : undefined
          }
          baseNavButtonState6={
            navbar === "audience" ? "active" : ["affiliates", "vendors"].includes(navbar) ? "inactive" : undefined
          }
          baseNavButtonState7={navbar === "affiliates" ? "active" : navbar === "vendors" ? "inactive" : undefined}
          baseNavButtonState8={navbar === "vendors" ? "active" : undefined}
          className="!h-[unset] !flex-1 !grow"
          override={baseNavigationBarBaseNavButtonIcon}
          override1={baseNavigationBar}
          visible={baseNavigationBarVisible}
          visible1={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
          visible2={
            navbar === "account" ||
            navbar === "analytics" ||
            navbar === "audience" ||
            navbar === "delivery" ||
            navbar === "discounts" ||
            navbar === "home" ||
            navbar === "marketing" ||
            navbar === "payouts" ||
            navbar === "tools"
              ? false
              : undefined
          }
        />
      )}

      {["apperance", "orders", "plugins", "products"].includes(navbar) && (
        <div className="w-[224px] flex flex-col items-center grow gap-[16px] flex-1 px-[10px] py-[16px] bg-secondary-navbar relative">
          <div className="inline-flex flex-col items-center grow mr-[-2.00px] gap-[24px] flex-1 ml-[-2.00px] relative">
            <div className="w-[192px] flex items-center gap-[12px] flex-[0_0_auto] relative">
              <div className="w-[40px] h-[40px] rounded-[4px] bg-black-100 relative" />
              <div className="flex flex-col items-start grow gap-[4px] flex-1 justify-center relative">
                <div className="font-body-1-medium self-stretch mt-[-1.00px] tracking-[var(--body-1-medium-letter-spacing)] text-[length:var(--body-1-medium-font-size)] [font-style:var(--body-1-medium-font-style)] text-black-100 font-[number:var(--body-1-medium-font-weight)] leading-[var(--body-1-medium-line-height)] relative">
                  Nishyan
                </div>
                <div className="[font-family:'Galano_Grotesque-Regular',Helvetica] self-stretch tracking-[0] text-[13px] opacity-80 text-black-100 underline font-normal leading-[16px] relative">
                  Visit store
                </div>
              </div>
              <img
                className="w-[39px] left-0 top-0 h-[39px] absolute"
                alt="Image"
                src="https://c.animaapp.com/CqtaZhb1/img/image-48@2x.png"
              />
              <BoldChevronDown3 className="!relative !w-[20px] !h-[20px]" color="white" />
            </div>
            <div className="inline-flex flex-col items-start grow gap-[4px] flex-1 relative">
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={<NavbarIcon53 className="!relative !w-[20px] !h-[20px]" />}
                state="inactive"
                text="Home"
                type="parent"
              />
              {navbar === "products" && (
                <div className="items-start inline-flex relative flex-[0_0_auto]">
                  <BaseNavButton
                    badge
                    beta={false}
                    override={<NavbarIcon164 className="!relative !w-[20px] !h-[20px]" />}
                    state="inactive"
                    text="Orders"
                    type="parent"
                  />
                </div>
              )}

              {["orders", "products"].includes(navbar) && (
                <div className="inline-flex flex-col items-center gap-[8px] flex-[0_0_auto] relative">
                  <BaseNavButton
                    badge={navbar === "products" ? false : true}
                    beta={false}
                    className="!flex-[0_0_auto]"
                    icon={
                      navbar === "products" ? <NavbarIcon187 className="!relative !w-[20px] !h-[20px]" /> : undefined
                    }
                    override={
                      navbar === "orders" ? <NavbarIcon200 className="!relative !w-[20px] !h-[20px]" /> : undefined
                    }
                    state="active"
                    text={navbar === "products" ? "Products" : "Orders"}
                    type="parent"
                  />
                  <div className="inline-flex flex-col items-start gap-[2px] flex-[0_0_auto] relative">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="active"
                      text1={navbar === "products" ? "All products (133)" : "All orders (303)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1={navbar === "products" ? "Categories (13)" : "Returns (2)"}
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1={navbar === "products" ? "Inventory" : "Abandoned (103)"}
                      type="child"
                    />
                  </div>
                </div>
              )}

              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon8 className="!relative !w-[20px] !h-[20px]" />
                  ) : navbar === "products" ? (
                    <NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NavbarIcon164 className="!relative !w-[20px] !h-[20px]" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Products" : navbar === "products" ? "Delivery" : "Orders"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "products" ? (
                    <NameMarketingStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NavbarIcon8 className="!relative !w-[20px] !h-[20px]" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Delivery" : navbar === "products" ? "Marketing" : "Products"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NameMarketingStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Marketing" : navbar === "products" ? "Analytics" : "Delivery"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "products" ? (
                    <NamePaymentsStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NameMarketingStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Payouts" : navbar === "orders" ? "Analytics" : "Marketing"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon46 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "orders" ? (
                    <NamePaymentsStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Tools" : navbar === "orders" ? "Payouts" : "Analytics"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon46 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />
                  ) : (
                    <NamePaymentsStateFalse className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Tools" : navbar === "products" ? "Discounts" : "Payouts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />
                  ) : navbar === "products" ? (
                    <NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : (
                    <NavbarIcon46 className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Discounts" : navbar === "products" ? "Audience" : "Tools"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "orders" ? (
                    <NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />
                  ) : navbar === "products" ? (
                    <NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />
                  ) : (
                    <NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />
                  )
                }
                state="inactive"
                text={navbar === "orders" ? "Audience" : navbar === "products" ? "Appearance" : "Discounts"}
                type="parent"
              />
              <BaseNavButton
                badge={false}
                beta={false}
                className="!flex-[0_0_auto]"
                icon={
                  navbar === "products" ? (
                    <NavbarIcon29 className="!relative !w-[20px] !h-[20px]" />
                  ) : navbar === "orders" ? (
                    <NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />
                  ) : (
                    <NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />
                  )
                }
                state="inactive"
                text={navbar === "products" ? "Plugins" : navbar === "orders" ? "Appearance" : "Audience"}
                type="parent"
              />
              {navbar === "apperance" && (
                <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                  <BaseNavButton
                    badge={false}
                    beta={false}
                    className="!flex-[0_0_auto]"
                    icon={<NavbarIcon55 className="!relative !w-[20px] !h-[20px]" />}
                    state="active"
                    text="Appearance"
                    type="parent"
                  />
                  <div className="inline-flex flex-col items-start gap-[2px] relative flex-[0_0_auto]">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="active"
                      text1="Themes"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1="Pages"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1="Menus"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1="Blog"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1="Media"
                      type="child"
                    />
                  </div>
                </div>
              )}

              {["apperance", "orders", "plugins"].includes(navbar) && (
                <BaseNavButton
                  badge={false}
                  beta={false}
                  className="!flex-[0_0_auto]"
                  icon={
                    navbar === "plugins" ? (
                      <NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />
                    ) : (
                      <NavbarIcon29 className="!relative !w-[20px] !h-[20px]" />
                    )
                  }
                  state="inactive"
                  text={navbar === "plugins" ? "Appearance" : "Plugins"}
                  type="parent"
                />
              )}

              {navbar === "plugins" && (
                <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="items-start gap-[12px] px-[16px] py-[8px] bg-[#ffffff1a] rounded-[4px] flex w-[208px] relative flex-[0_0_auto]">
                    <NavbarIcon
                      name="plugin"
                      nameAccountStateClassName="!h-[20px] !w-[20px]"
                      state
                      vector="https://c.animaapp.com/CqtaZhb1/img/vector-4.svg"
                      vectorClassName="!h-[19px] !w-[17px] !top-0"
                    />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black-100 text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                      Plugins
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-[2px] relative flex-[0_0_auto]">
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="active"
                      text1="Installed (11)"
                      type="child"
                    />
                    <BaseNavButton
                      badge={false}
                      beta={false}
                      className="!flex-[0_0_auto]"
                      state="inactive"
                      text1="All plugins (99)"
                      type="child"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <BaseNavBottom
            className="!flex-[0_0_auto]"
            outlineWalletWallet={
              ["apperance", "plugins"].includes(navbar)
                ? "https://c.animaapp.com/CqtaZhb1/img/wallet-6.svg"
                : "https://c.animaapp.com/CqtaZhb1/img/wallet-18.svg"
            }
            property1="wallet-credits"
          />
        </div>
      )}
    </div>
  );
};
