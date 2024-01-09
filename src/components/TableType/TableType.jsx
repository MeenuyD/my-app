/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ControlsToggle } from "../../icons/ControlsToggle";
import { OutlinedCopy } from "../../icons/OutlinedCopy";
import { OutlinedKebabRight } from "../../icons/OutlinedKebabRight";
import { OutlinedShare } from "../../icons/OutlinedShare";
import { OutlinedView } from "../../icons/OutlinedView";
import { WeightMediumTypeWrapper } from "../WeightMediumTypeWrapper";

export const TableType = ({
  icon2 = true,
  icon1 = true,
  icon3 = true,
  infoTag = false,
  icon4 = true,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  text = "Sample Data",
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
  strikeThrough = false,
  type,
  className,
  divClassName,
  override = <WeightMediumTypeWrapper className="!flex-[0_0_auto]" type="accepted" weight="regular" />,
}) => {
  return (
    <div
      className={`inline-flex relative ${type === "checkbox" ? "items-start" : "items-center"} ${
        ["link", "text-medium", "text-regular", "u-line-link"].includes(type)
          ? "gap-[16px]"
          : type === "remove"
          ? "gap-[2px]"
          : ["icons", "tag"].includes(type)
          ? "gap-[4px]"
          : "gap-[8px]"
      } ${type === "input-disabled" ? "bg-white" : ""} ${className}`}
    >
      {(type === "input-active" ||
        type === "input-disabled" ||
        type === "link" ||
        type === "remove" ||
        type === "text-medium" ||
        type === "text-regular" ||
        type === "u-line-link") && (
        <div
          className={`relative ${["input-active", "input-disabled"].includes(type) ? "border-black-85" : ""} ${
            ["link", "text-medium", "text-regular", "u-line-link"].includes(type)
              ? "inline-flex"
              : ["input-active", "input-disabled"].includes(type)
              ? "flex"
              : ""
          } ${type === "remove" ? "mt-[-1.00px]" : ""} ${
            type === "remove" ? "[font-style:var(--body-2-regular-font-style)]" : ""
          } ${
            ["input-active", "input-disabled", "link", "text-medium", "text-regular", "u-line-link"].includes(type)
              ? "items-center"
              : ""
          } ${["link", "text-medium", "text-regular", "u-line-link"].includes(type) ? "flex-[0_0_auto]" : ""} ${
            type === "remove" ? "text-secondary-red" : ""
          } ${["input-active", "input-disabled"].includes(type) ? "px-[16px] py-[8px]" : ""} ${
            type === "remove" ? "leading-[var(--body-2-regular-line-height)]" : ""
          } ${type === "remove" ? "font-body-2-regular" : ""} ${
            type === "remove" ? "w-fit" : ["input-active", "input-disabled"].includes(type) ? "w-[144px]" : ""
          } ${type === "remove" ? "font-[number:var(--body-2-regular-font-weight)]" : ""} ${
            type === "remove" ? "whitespace-nowrap" : ""
          } ${["input-active", "input-disabled"].includes(type) ? "rounded-[4px]" : ""} ${
            type === "remove" ? "text-[length:var(--body-2-regular-font-size)]" : ""
          } ${
            ["link", "text-medium", "text-regular", "u-line-link"].includes(type)
              ? "gap-[12px]"
              : ["input-active", "input-disabled"].includes(type)
              ? "gap-[8px]"
              : ""
          } ${type === "input-active" ? "bg-black-100" : type === "input-disabled" ? "bg-black-95" : ""} ${
            ["input-active", "input-disabled"].includes(type) ? "border border-solid" : ""
          } ${type === "remove" ? "tracking-[var(--body-2-regular-letter-spacing)]" : ""}`}
        >
          {["input-active", "input-disabled", "link", "text-medium", "text-regular", "u-line-link"].includes(type) && (
            <div
              className={`relative ${["input-active", "input-disabled"].includes(type) ? "font-body-2-regular" : ""} ${
                ["link", "text-medium", "text-regular", "u-line-link"].includes(type) ? "inline-flex" : ""
              } ${["input-active", "input-disabled"].includes(type) ? "mt-[-1.00px]" : ""} ${
                ["link", "text-medium", "text-regular", "u-line-link"].includes(type) ? "flex-col" : ""
              } ${
                ["input-active", "input-disabled"].includes(type) ? "text-[length:var(--body-2-regular-font-size)]" : ""
              } ${["link", "text-medium", "text-regular", "u-line-link"].includes(type) ? "items-start" : ""} ${
                ["input-active", "input-disabled"].includes(type)
                  ? "tracking-[var(--body-2-regular-letter-spacing)]"
                  : ""
              } ${
                ["input-active", "input-disabled"].includes(type) ? "[font-style:var(--body-2-regular-font-style)]" : ""
              } ${
                ["link", "text-medium", "text-regular"].includes(type)
                  ? "gap-[2px]"
                  : type === "u-line-link"
                  ? "gap-[8px]"
                  : ""
              } ${["input-active", "input-disabled"].includes(type) ? "flex-1" : "flex-[0_0_auto]"} ${
                type === "input-active" ? "text-black-60" : type === "input-disabled" ? "text-black-12" : ""
              } ${
                ["input-active", "input-disabled"].includes(type)
                  ? "font-[number:var(--body-2-regular-font-weight)]"
                  : ""
              } ${["link", "text-medium", "text-regular", "u-line-link"].includes(type) ? "justify-center" : ""} ${
                ["input-active", "input-disabled"].includes(type) ? "leading-[var(--body-2-regular-line-height)]" : ""
              }`}
            >
              {["link", "text-medium", "text-regular", "u-line-link"].includes(type) && (
                <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] relative">
                  <div
                    className={`relative ${["text-medium", "text-regular"].includes(type) ? "inline-flex" : ""} ${
                      ["link", "u-line-link"].includes(type) ? "mt-[-1.00px]" : ""
                    } ${
                      type === "link"
                        ? "[font-style:var(--body-2-medium-font-style)]"
                        : type === "u-line-link"
                        ? "[font-style:var(--body-2-underline-medium-font-style)]"
                        : ""
                    } ${["text-medium", "text-regular"].includes(type) ? "items-center" : ""} ${
                      ["text-medium", "text-regular"].includes(type) ? "flex-[0_0_auto]" : ""
                    } ${["link", "u-line-link"].includes(type) ? "text-primary-blue" : ""} ${
                      type === "link"
                        ? "font-body-2-medium"
                        : type === "u-line-link"
                        ? "font-body-2-underline-medium"
                        : ""
                    } ${
                      type === "link"
                        ? "leading-[var(--body-2-medium-line-height)]"
                        : type === "u-line-link"
                        ? "leading-[var(--body-2-underline-medium-line-height)]"
                        : ""
                    } ${["link", "u-line-link"].includes(type) ? "w-fit" : ""} ${
                      type === "u-line-link" ? "underline" : ""
                    } ${
                      type === "link"
                        ? "font-[number:var(--body-2-medium-font-weight)]"
                        : type === "u-line-link"
                        ? "font-[number:var(--body-2-underline-medium-font-weight)]"
                        : ""
                    } ${["link", "u-line-link"].includes(type) ? "whitespace-nowrap" : ""} ${
                      type === "link"
                        ? "text-[length:var(--body-2-medium-font-size)]"
                        : type === "u-line-link"
                        ? "text-[length:var(--body-2-underline-medium-font-size)]"
                        : ""
                    } ${["text-medium", "text-regular"].includes(type) ? "gap-[4px]" : ""} ${
                      type === "link"
                        ? "tracking-[var(--body-2-medium-letter-spacing)]"
                        : type === "u-line-link"
                        ? "tracking-[var(--body-2-underline-medium-letter-spacing)]"
                        : ""
                    }`}
                  >
                    {["text-medium", "text-regular"].includes(type) && (
                      <div
                        className={`w-fit mt-[-1.00px] text-black-30 whitespace-nowrap relative ${
                          type === "text-regular" ? "font-body-2-regular" : "font-body-2-medium"
                        } ${
                          type === "text-regular"
                            ? "tracking-[var(--body-2-regular-letter-spacing)]"
                            : "tracking-[var(--body-2-medium-letter-spacing)]"
                        } ${
                          type === "text-regular"
                            ? "text-[length:var(--body-2-regular-font-size)]"
                            : "text-[length:var(--body-2-medium-font-size)]"
                        } ${
                          type === "text-regular"
                            ? "[font-style:var(--body-2-regular-font-style)]"
                            : "[font-style:var(--body-2-medium-font-style)]"
                        } ${
                          type === "text-regular"
                            ? "font-[number:var(--body-2-regular-font-weight)]"
                            : "font-[number:var(--body-2-medium-font-weight)]"
                        } ${
                          type === "text-regular"
                            ? "leading-[var(--body-2-regular-line-height)]"
                            : "leading-[var(--body-2-medium-line-height)]"
                        } ${divClassName}`}
                      >
                        {text}
                      </div>
                    )}

                    {["link", "u-line-link"].includes(type) && <>{text}</>}
                  </div>
                </div>
              )}

              {["input-active", "input-disabled"].includes(type) && <>Placeholder</>}
            </div>
          )}

          {type === "remove" && <>Remove</>}
        </div>
      )}

      {type === "switch" && (
        <>
          <ControlsToggle className="!relative !w-[36px] !h-[22px]" />
          <div className="relative w-fit font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-secondary-green text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
            In stock
          </div>
        </>
      )}

      {["checkbox", "status", "tag"].includes(type) && <>{override}</>}

      {type === "icons" && (
        <>
          <>
            {icon1 && (
              <div className="inline-flex items-start gap-[8px] p-[6px] relative flex-[0_0_auto]">
                <OutlinedView className="!relative !w-[20px] !h-[20px]" />
              </div>
            )}
          </>
          <>
            {icon2 && (
              <div className="inline-flex items-start gap-[8px] p-[6px] relative flex-[0_0_auto]">
                <OutlinedCopy className="!relative !w-[20px] !h-[20px]" />
              </div>
            )}
          </>
          <>
            {icon3 && (
              <div className="inline-flex items-start gap-[8px] p-[6px] relative flex-[0_0_auto]">
                <OutlinedShare className="!relative !w-[20px] !h-[20px]" />
              </div>
            )}
          </>
          <>
            {icon4 && (
              <div className="flex w-[32px] h-[32px] items-center justify-center gap-[8px] px-[8px] py-0 relative">
                <OutlinedKebabRight className="!relative !w-[20px] !h-[20px] !ml-[-2.00px] !mr-[-2.00px]" />
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};
