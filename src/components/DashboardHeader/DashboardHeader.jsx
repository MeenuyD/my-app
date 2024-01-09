/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { BoldSearch9 } from "../../icons/BoldSearch9";
import { IconsOutlinedDownArrow } from "../../icons/IconsOutlinedDownArrow";
import { IconsOutlinedInfo3 } from "../../icons/IconsOutlinedInfo3";
import { IconsOutlinedRightArrow1 } from "../../icons/IconsOutlinedRightArrow1";
import { HowToUse } from "../HowToUse";
import { Icons } from "../Icons";

export const DashboardHeader = ({
  backArrow,
  help,
  searchBox,
  descriptionText,
  button,
  screenWidth,
  beta,
  className,
  text = "Dashboard",
  howToUseText = "How to use",
  howToUseIcon = <IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />,
  iconsSearch = "https://c.animaapp.com/CqtaZhb1/img/icons-search-2.png",
  iconsIconsMenuPolygon = "https://c.animaapp.com/CqtaZhb1/img/polygon-2-9.svg",
}) => {
  return (
    <div
      className={`[border-bottom-style:solid] border-[#d9d9d9] w-[1216px] flex items-center border-b bg-black-100 relative ${
        backArrow ? "gap-[24px]" : "gap-[16px]"
      } ${
        (!backArrow && !help) ||
        beta ||
        (!button && !descriptionText && help) ||
        (button && !descriptionText && screenWidth === "full")
          ? "px-[32px] py-[12px]"
          : !beta && !button && backArrow && !descriptionText && !help
          ? "px-[32px] py-[18px]"
          : descriptionText
          ? "px-[32px] py-[7px]"
          : screenWidth === "small"
          ? "pl-[32px] pr-[228px] py-[12px]"
          : screenWidth === "middle"
          ? "pl-[32px] pr-[182px] py-[12px]"
          : screenWidth === "large"
          ? "pl-[32px] pr-[77px] py-[12px]"
          : ""
      } ${beta || (backArrow && help && !button && !descriptionText) ? "h-[64px]" : ""} ${className}`}
    >
      {(searchBox || (backArrow && descriptionText) || (button && !descriptionText)) && (
        <>
          <div
            className={`relative ${backArrow ? "w-[24px]" : ""} ${!backArrow ? "flex" : ""} ${
              !backArrow && descriptionText ? "flex-col" : ""
            } ${!backArrow && !descriptionText ? "items-center" : !backArrow && descriptionText ? "items-start" : ""} ${
              !backArrow ? "grow" : ""
            } ${!backArrow && !descriptionText ? "gap-[16px]" : !backArrow && descriptionText ? "gap-[2px]" : ""} ${
              !backArrow ? "flex-1" : ""
            } ${backArrow ? "h-[24px]" : ""}`}
          >
            {(backArrow || !help) && (
              <div
                className={`relative ${!backArrow ? "mt-[-1.00px]" : ""} ${
                  !backArrow ? "[font-style:var(--heading-h5-font-style)]" : ""
                } ${backArrow ? "top-[2px]" : ""} ${!backArrow ? "text-[#1a181e]" : ""} ${
                  !backArrow ? "leading-[var(--heading-h5-line-height)]" : ""
                } ${!backArrow ? "font-heading-h5" : ""} ${backArrow ? "w-[21px]" : "w-fit"} ${
                  backArrow ? "bg-[url(https://c.animaapp.com/CqtaZhb1/img/union-13.svg)]" : ""
                } ${!backArrow ? "font-[number:var(--heading-h5-font-weight)]" : ""} ${
                  !backArrow ? "whitespace-nowrap" : ""
                } ${!backArrow ? "text-[length:var(--heading-h5-font-size)]" : ""} ${
                  backArrow ? "bg-[100%_100%]" : ""
                } ${backArrow ? "left-10" : ""} ${!backArrow ? "tracking-[var(--heading-h5-letter-spacing)]" : ""} ${
                  backArrow ? "h-[21px]" : ""
                }`}
              >
                {!backArrow && <>{text}</>}
              </div>
            )}

            {!backArrow && help && (
              <div
                className={`inline-flex gap-[16px] flex-[0_0_auto] relative ${
                  descriptionText ? "items-baseline" : "items-center"
                }`}
              >
                {!descriptionText && (
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1a181e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                    {text}
                  </div>
                )}

                {descriptionText && (
                  <>
                    <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1a181e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                        {text}
                      </div>
                    </div>
                    <HowToUse
                      className="!flex-[0_0_auto]"
                      icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                      text="How to use"
                    />
                  </>
                )}
              </div>
            )}

            {!backArrow && help && !descriptionText && (
              <HowToUse className="!flex-[0_0_auto]" icon={howToUseIcon} text={howToUseText} />
            )}

            {!backArrow && descriptionText && (
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#7f7f7f] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                  Sample text
                </div>
                <IconsOutlinedRightArrow1 className="!relative !w-[20px] !h-[20px]" color="#808080" />
              </div>
            )}
          </div>
          <div
            className={`relative ${!backArrow && !help ? "w-[344px]" : !backArrow && help ? "w-[400px]" : ""} ${
              !backArrow || !descriptionText ? "flex" : !searchBox && descriptionText ? "inline-flex" : ""
            } ${!backArrow && help && !descriptionText ? "self-stretch" : ""} ${
              !searchBox && descriptionText ? "flex-col" : ""
            } ${!backArrow || !descriptionText ? "items-center" : !searchBox && descriptionText ? "items-start" : ""} ${
              backArrow && !descriptionText ? "grow" : ""
            } ${
              !backArrow
                ? "gap-[8px]"
                : backArrow && !descriptionText
                ? "gap-[16px]"
                : !searchBox && descriptionText
                ? "gap-[2px]"
                : ""
            } ${backArrow && !descriptionText ? "flex-1" : !searchBox && descriptionText ? "flex-[0_0_auto]" : ""} ${
              !backArrow && !help ? "px-[16px] py-[10px]" : !backArrow && help ? "px-[16px] py-[9px]" : ""
            } ${!backArrow ? "rounded-[6px]" : ""} ${!backArrow ? "bg-[#f2f2f2]" : ""}`}
          >
            {!backArrow && !help && (
              <>
                <BoldSearch9 className="!relative !w-[16px] !h-[16px]" color="#808080" />
                <div className="relative flex-1 mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#7f7f7f] text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Search features, tutorials, etc.
                </div>
              </>
            )}

            {!backArrow && help && (
              <>
                <img className="w-[16px] h-[16px] relative" alt="Icons search" src={iconsSearch} />
                <div className="[font-family:'Galano_Grotesque-Regular',Helvetica] w-fit mt-[-0.50px] tracking-[0] text-[15px] text-[#7f7f7f] font-normal leading-[22px] whitespace-nowrap relative">
                  Search features, tutorials, etc.
                </div>
              </>
            )}

            {backArrow && !descriptionText && (
              <div className="inline-flex items-center gap-[16px] flex-[0_0_auto] relative">
                <div className="font-heading-h5 w-fit mt-[-1.00px] tracking-[var(--heading-h5-letter-spacing)] text-[length:var(--heading-h5-font-size)] [font-style:var(--heading-h5-font-style)] text-[#1a181e] font-[number:var(--heading-h5-font-weight)] leading-[var(--heading-h5-line-height)] whitespace-nowrap relative">
                  {text}
                </div>
              </div>
            )}

            {button && help && (
              <HowToUse
                className="!flex-[0_0_auto]"
                icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                text="How to use"
              />
            )}

            {!searchBox && descriptionText && (
              <>
                <div className="w-[234.67px] flex items-center gap-[16px] flex-[0_0_auto] relative">
                  <div className="inline-flex items-center gap-[16px] flex-[0_0_auto] relative">
                    <div className="font-heading-h5 w-fit mt-[-1.00px] tracking-[var(--heading-h5-letter-spacing)] text-[length:var(--heading-h5-font-size)] [font-style:var(--heading-h5-font-style)] text-[#1a181e] relative font-[number:var(--heading-h5-font-weight)] whitespace-nowrap leading-[var(--heading-h5-line-height)]">
                      {text}
                    </div>
                  </div>
                  {help && (
                    <HowToUse
                      className="!flex-[0_0_auto]"
                      icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                      text="How to use"
                    />
                  )}
                </div>
                <div
                  className={`relative ${!button && !help ? "font-body-2-regular" : ""} ${
                    !button && !help ? "w-fit" : ""
                  } ${button || help ? "inline-flex" : ""} ${
                    !button && !help ? "tracking-[var(--body-2-regular-letter-spacing)]" : ""
                  } ${!button && !help ? "[font-style:var(--body-2-regular-font-style)]" : ""} ${
                    !button && !help ? "text-[length:var(--body-2-regular-font-size)]" : ""
                  } ${button || help ? "items-center" : ""} ${!button && !help ? "text-[#7f7f7f]" : ""} ${
                    button || help ? "flex-[0_0_auto]" : ""
                  } ${!button && !help ? "font-[number:var(--body-2-regular-font-weight)]" : ""} ${
                    !button && !help ? "whitespace-nowrap" : ""
                  } ${!button && !help ? "leading-[var(--body-2-regular-line-height)]" : ""}`}
                >
                  {!button && !help && <>Thane | Testing@rankz.io</>}

                  {(button || help) && (
                    <div className="font-body-2-medium w-fit mt-[-1.00px] tracking-[var(--body-2-medium-letter-spacing)] text-[length:var(--body-2-medium-font-size)] [font-style:var(--body-2-medium-font-style)] text-[#146eb4] font-[number:var(--body-2-medium-font-weight)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap relative">
                      Sample text
                    </div>
                  )}

                  {help && <IconsOutlinedRightArrow1 className="!relative !w-[20px] !h-[20px]" color="#146EB4" />}

                  {button && <IconsOutlinedDownArrow className="!relative !w-[20px] !h-[20px]" />}
                </div>
              </>
            )}
          </div>
          <div
            className={`relative ${
              (descriptionText && button) || (!backArrow && !button) || (!descriptionText && !button)
                ? "flex"
                : backArrow && !descriptionText
                ? "inline-flex"
                : ""
            } ${
              (descriptionText && button) || (!backArrow && !button) || (!descriptionText && !button)
                ? "items-start"
                : backArrow && !descriptionText
                ? "items-center"
                : ""
            } ${descriptionText || !backArrow ? "grow" : ""} ${
              (descriptionText && button) || (!backArrow && !button) || (!descriptionText && !button)
                ? "gap-[8px]"
                : backArrow && !descriptionText
                ? "gap-[24px]"
                : ""
            } ${backArrow && !descriptionText ? "flex-[0_0_auto]" : "flex-1"} ${
              (descriptionText && button) || (!backArrow && !button) || (!descriptionText && !button)
                ? "justify-end"
                : ""
            }`}
          >
            {!backArrow && <Icons className="!flex-[0_0_auto]" iconsMenuPolygon={iconsIconsMenuPolygon} type="two" />}

            {backArrow && !descriptionText && (
              <>
                <button className="all-[unset] box-border inline-flex items-center gap-[10px] flex-[0_0_auto] rounded-[4px] justify-center relative">
                  <div className="font-sub-title-medium w-fit mt-[-1.00px] tracking-[var(--sub-title-medium-letter-spacing)] text-[length:var(--sub-title-medium-font-size)] [font-style:var(--sub-title-medium-font-style)] text-[#4c4c4c] font-[number:var(--sub-title-medium-font-weight)] text-center whitespace-nowrap leading-[var(--sub-title-medium-line-height)] relative">
                    Button
                  </div>
                </button>
                <button className="all-[unset] box-border inline-flex items-center gap-[10px] flex-[0_0_auto] px-[24px] py-[8px] rounded-[4px] justify-center bg-[#146eb4] relative">
                  <div className="font-sub-title-medium w-fit mt-[-1.00px] tracking-[var(--sub-title-medium-letter-spacing)] text-[length:var(--sub-title-medium-font-size)] [font-style:var(--sub-title-medium-font-style)] text-black-100 font-[number:var(--sub-title-medium-font-weight)] text-center whitespace-nowrap leading-[var(--sub-title-medium-line-height)] relative">
                    Button
                  </div>
                </button>
              </>
            )}

            {button && descriptionText && (
              <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                <button className="all-[unset] box-border inline-flex items-center justify-center gap-[6px] px-[24px] py-[8px] relative flex-[0_0_auto] bg-black-100 rounded-[4px] border border-solid border-[#d9d9d9]">
                  <div className="relative w-fit mt-[-1.00px] font-sub-title-regular font-[number:var(--sub-title-regular-font-weight)] text-[#4c4c4c] text-[length:var(--sub-title-regular-font-size)] text-center tracking-[var(--sub-title-regular-letter-spacing)] leading-[var(--sub-title-regular-line-height)] whitespace-nowrap [font-style:var(--sub-title-regular-font-style)]">
                    Button
                  </div>
                </button>
                <button className="all-[unset] box-border inline-flex items-center justify-center gap-[10px] px-[24px] py-[8px] relative flex-[0_0_auto] bg-[#146eb4] rounded-[4px]">
                  <div className="relative w-fit mt-[-1.00px] font-sub-title-medium font-[number:var(--sub-title-medium-font-weight)] text-black-100 text-[length:var(--sub-title-medium-font-size)] text-center tracking-[var(--sub-title-medium-letter-spacing)] leading-[var(--sub-title-medium-line-height)] whitespace-nowrap [font-style:var(--sub-title-medium-font-style)]">
                    Button
                  </div>
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {!searchBox && (descriptionText || !button) && (!backArrow || !descriptionText) && (
        <>
          <div
            className={`relative ${backArrow ? "w-[24px]" : ""} ${!backArrow ? "inline-flex" : ""} ${
              descriptionText ? "flex-col" : ""
            } ${descriptionText ? "items-start" : !backArrow && !descriptionText ? "items-center" : ""} ${
              descriptionText ? "gap-[2px]" : !backArrow && !descriptionText ? "gap-[16px]" : ""
            } ${!backArrow ? "flex-[0_0_auto]" : ""} ${backArrow ? "h-[24px]" : ""}`}
          >
            {backArrow && (
              <div className="w-[21px] left-[2px] top-[2px] bg-[100%_100%] h-[21px] bg-[url(https://c.animaapp.com/CqtaZhb1/img/union-13.svg)] relative" />
            )}

            {descriptionText && (
              <div className="flex items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1a181e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                    {text}
                  </div>
                </div>
                <HowToUse
                  className="!flex-[0_0_auto]"
                  icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                  text="How to use"
                />
              </div>
            )}

            {!backArrow && (
              <div
                className={`inline-flex items-center flex-[0_0_auto] relative ${
                  !descriptionText ? "gap-[16px]" : "gap-[4px]"
                }`}
              >
                <div
                  className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
                    descriptionText ? "font-body-2-medium" : "font-heading-h5"
                  } ${
                    descriptionText
                      ? "tracking-[var(--body-2-medium-letter-spacing)]"
                      : "tracking-[var(--heading-h5-letter-spacing)]"
                  } ${
                    descriptionText
                      ? "text-[length:var(--body-2-medium-font-size)]"
                      : "text-[length:var(--heading-h5-font-size)]"
                  } ${
                    descriptionText
                      ? "[font-style:var(--body-2-medium-font-style)]"
                      : "[font-style:var(--heading-h5-font-style)]"
                  } ${descriptionText ? "text-[#7f7f7f]" : "text-[#1a181e]"} ${
                    descriptionText
                      ? "font-[number:var(--body-2-medium-font-weight)]"
                      : "font-[number:var(--heading-h5-font-weight)]"
                  } ${
                    descriptionText
                      ? "leading-[var(--body-2-medium-line-height)]"
                      : "leading-[var(--heading-h5-line-height)]"
                  }`}
                >
                  {!descriptionText && <>{text}</>}

                  {descriptionText && <>Sample text</>}
                </div>
                {descriptionText && (
                  <IconsOutlinedRightArrow1 className="!relative !w-[20px] !h-[20px]" color="#808080" />
                )}
              </div>
            )}

            {!backArrow && !descriptionText && (
              <HowToUse
                className="!flex-[0_0_auto]"
                icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                text="How to use"
              />
            )}
          </div>
          <div
            className={`grow flex-1 relative ${backArrow ? "flex" : ""} ${backArrow ? "items-center" : ""} ${
              !beta && backArrow ? "gap-[16px]" : beta ? "gap-[12px]" : ""
            }`}
          >
            {!beta && !help && (
              <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#1a181e] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                {text}
              </div>
            )}

            {(beta || (backArrow && help)) && (
              <div className="inline-flex items-center gap-[16px] flex-[0_0_auto] relative">
                <div className="font-heading-h5 w-fit mt-[-1.00px] tracking-[var(--heading-h5-letter-spacing)] text-[length:var(--heading-h5-font-size)] [font-style:var(--heading-h5-font-style)] text-[#1a181e] font-[number:var(--heading-h5-font-weight)] leading-[var(--heading-h5-line-height)] whitespace-nowrap relative">
                  {text}
                </div>
              </div>
            )}

            {backArrow && help && (
              <HowToUse
                className="!flex-[0_0_auto]"
                icon={<IconsOutlinedInfo3 className="!relative !w-[14px] !h-[14px]" />}
                text="How to use"
              />
            )}

            {beta && (
              <div className="flex w-[43px] h-[20px] items-start gap-[10px] px-[6px] py-[2px] relative bg-[#e6e6e6] rounded-[3px]">
                <div className="relative w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#4c4c4c] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                  BETA
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
