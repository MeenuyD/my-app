import React from "react";
import { CellHeaderRow } from "../../components/CellHeaderRow";
import { CellTableRow } from "../../components/CellTableRow";
import { DashboardHeader } from "../../components/DashboardHeader";
import { Divider } from "../../components/Divider";
import { InputSearchBox } from "../../components/InputSearchBox";
import { Link } from "../../components/Link";
import { Navbar } from "../../components/Navbar";
import { Pills } from "../../components/Pills";
import { TagStatus } from "../../components/TagStatus";
import { TypeParentStateWrapper } from "../../components/TypeParentStateWrapper";
import { BoldChevronDown3 } from "../../icons/BoldChevronDown3";
import { NavbarIcon135 } from "../../icons/NavbarIcon135";
import { NavbarIcon143 } from "../../icons/NavbarIcon143";
import { NavbarIcon145 } from "../../icons/NavbarIcon145";
import { NavbarIcon160 } from "../../icons/NavbarIcon160";
import { NavbarIcon164 } from "../../icons/NavbarIcon164";
import { NavbarIcon29 } from "../../icons/NavbarIcon29";
import { NavbarIcon39 } from "../../icons/NavbarIcon39";
import { NavbarIcon44 } from "../../icons/NavbarIcon44";
import { NavbarIcon53 } from "../../icons/NavbarIcon53";
import { NavbarIcon6 } from "../../icons/NavbarIcon6";
import { NavbarIcon8 } from "../../icons/NavbarIcon8";
import { OutlinedChevronRight } from "../../icons/OutlinedChevronRight";
import { OutlinedHelp1 } from "../../icons/OutlinedHelp1";
import { OutlinedHelp2 } from "../../icons/OutlinedHelp2";
import { OutlinedSort1 } from "../../icons/OutlinedSort1";

export const PayoutsDukaanpay = () => {
  return (
    <div className="bg-[#f9f9f9] flex flex-row justify-center w-full">
      <div className="bg-black-98 w-[1440px] h-[882px] relative">
        <DashboardHeader
          backArrow={false}
          beta={false}
          button={false}
          className="!absolute !left-[224px] !top-0"
          descriptionText={false}
          help
          howToUseIcon={<OutlinedHelp2 className="!relative !w-[14px] !h-[14px]" color="#4D4D4D" />}
          howToUseText="How it works"
          iconsIconsMenuPolygon="https://c.animaapp.com/CqtaZhb1/img/polygon-2.svg"
          iconsSearch="https://c.animaapp.com/CqtaZhb1/img/icons-search.svg"
          screenWidth="full"
          searchBox
          text="Payouts"
        />
        <div className="flex flex-col w-[1152px] items-start gap-[32px] absolute top-[96px] left-10">
          <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-12 text-[20px] tracking-[0] leading-[28px] whitespace-nowrap">
                Overview
              </div>
              <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                <div className="w-[139px] mr-[-2.00px] relative h-[36px]">
                  <div className="relative w-[137px] h-[36px] bg-black-100 rounded-[4px] border border-solid border-black-85">
                    <div className="absolute top-[5px] left-[13px] [font-family:'Galano_Grotesque-Regular',Helvetica] font-normal text-black-30 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                      This Month
                    </div>
                    <BoldChevronDown3
                      className="!absolute !w-[16px] !h-[16px] !top-[9px] !left-[106px]"
                      color="#4D4D4D"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center justify-center relative flex-1 grow shadow-shadow-card">
                <div className="flex flex-col h-[154px] items-start gap-[16px] p-[20px] relative self-stretch w-full bg-primary-blue rounded-[var(--spacings-spacing-spacing-04)]">
                  <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black-100 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                          Next Payout
                        </div>
                        <OutlinedHelp2 className="!relative !w-[16px] !h-[16px]" color="white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-100 text-[32px] tracking-[0] leading-[38px] whitespace-nowrap">
                        ₹2,312.23
                      </div>
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <Link
                          className="!flex-[0_0_auto]"
                          color="blue"
                          divClassName="!text-black-100"
                          sIze="sixteen-px"
                          state="default"
                          text="23 orders"
                        />
                        <OutlinedChevronRight className="!relative !w-[24px] !h-[24px]" color="white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[371px] items-start justify-between px-[24px] py-[8px] absolute top-[118px] left-0 bg-hoverblue rounded-[8px]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Regular',Helvetica] font-normal text-black-95 text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Next payout date:
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-95 text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                    Today, 04:00PM
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[24px] relative flex-1 grow">
                <div className="flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow bg-black-100 rounded-[var(--spacings-spacing-spacing-04)] shadow-shadow-card">
                  <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black-30 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        Amount Pending
                      </div>
                      <OutlinedHelp1 className="!relative !w-[16px] !h-[16px]" />
                    </div>
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-12 text-[32px] tracking-[0] leading-[38px] whitespace-nowrap">
                        ₹92,312.20
                      </div>
                      <div className="inline-flex items-center relative flex-[0_0_auto]">
                        <Link
                          className="!flex-[0_0_auto]"
                          color="blue"
                          sIze="sixteen-px"
                          state="default"
                          text="13 orders"
                        />
                        <OutlinedChevronRight className="!relative !w-[24px] !h-[24px]" color="#146EB4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[24px] relative flex-1 grow">
                <div className="flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow bg-black-100 rounded-[var(--spacings-spacing-spacing-04)] shadow-shadow-card">
                  <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black-30 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        Amount Processed
                      </div>
                      <OutlinedHelp1 className="!relative !w-[16px] !h-[16px]" />
                    </div>
                    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-center justify-between relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-12 text-[32px] tracking-[0] leading-[38px] whitespace-nowrap">
                          ₹23,92,312.19
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Galano_Grotesque-Medium',Helvetica] font-medium text-black-12 text-[20px] tracking-[0] leading-[28px] whitespace-nowrap">
                Transactions | This Month
              </div>
              <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
                <Pills className="!flex-[0_0_auto]" state="disabled" text="Payouts (22)" />
                <Pills className="!flex-[0_0_auto]" state="active" text="Refunds (6)" />
              </div>
            </div>
            <div className="flex flex-col w-[1152px] items-end pt-[12px] pb-[8px] px-[12px] relative flex-[0_0_auto] bg-black-100 rounded-[8px] overflow-hidden shadow-shadow-card">
              <div className="inline-flex flex-col items-end gap-[12px] relative flex-[0_0_auto]">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <InputSearchBox
                    baseSearchFieldText="Order ID or transaction ID"
                    className="!w-[248px]"
                    size="default"
                    type="default"
                  />
                  <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-end gap-[16px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
                        <button className="all-[unset] box-border inline-flex items-center gap-[6px] px-[12px] py-[6px] relative flex-[0_0_auto] bg-black-100 rounded-[4px] border border-solid border-black-85">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black-30 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            Sort
                          </div>
                          <OutlinedSort1 className="!relative !w-[16px] !h-[16px]" />
                        </button>
                      </div>
                      <img
                        className="w-[36px] relative h-[36px]"
                        alt="Group"
                        src="https://c.animaapp.com/CqtaZhb1/img/group-898.png"
                      />
                    </div>
                  </div>
                </div>
                <header className="flex w-[1128px] items-center justify-between px-[12px] py-[10px] relative flex-[0_0_auto] bg-black-95 rounded-[4px]">
                  <CellHeaderRow className="!flex !bg-[unset] !w-[150.67px]" tableTypeText="Order ID" />
                  <CellHeaderRow
                    className="!flex !bg-[unset] !w-[150.67px]"
                    tableTypeDivClassName="!text-right"
                    tableTypeText="Status"
                  />
                  <CellHeaderRow
                    className="!flex !bg-[unset] !w-[150.67px]"
                    tableTypeDivClassName="!text-right"
                    tableTypeText="Transaction ID"
                  />
                  <CellHeaderRow className="!flex !bg-[unset] !w-[150.67px]" tableTypeText="Refund date" />
                  <CellHeaderRow
                    className="!flex !items-end !bg-[unset] !w-[150.67px]"
                    tableTypeDivClassName="!text-right"
                    tableTypeText="Order amount"
                  />
                </header>
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281209"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="successful" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="Today, 08:45 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <Divider
                  className="bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-4.svg)] !absolute !left-[12px] !w-[1104px] !top-[47px]"
                  stroke="black-90"
                />
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281208"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="processing" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="Yesterday, 3:00 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <Divider
                  className="bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-4.svg)] !absolute !left-[12px] !w-[1104px] !top-[47px]"
                  stroke="black-90"
                />
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281207"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="successful" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="12 Jul 2023, 03:00 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <Divider
                  className="bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-4.svg)] !absolute !left-[12px] !w-[1104px] !top-[47px]"
                  stroke="black-90"
                />
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281206"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="successful" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="12 Jul 2023, 03:00 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <Divider
                  className="bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-4.svg)] !absolute !left-[12px] !w-[1104px] !top-[47px]"
                  stroke="black-90"
                />
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281205"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="successful" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="12 Jul 2023, 03:00 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <Divider
                  className="bg-[url(https://c.animaapp.com/CqtaZhb1/img/line-4.svg)] !absolute !left-[12px] !w-[1104px] !top-[47px]"
                  stroke="black-90"
                />
              </div>
              <div className="flex w-[1128px] h-[48px] items-center justify-between px-[12px] py-[14px] relative bg-black-100">
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!mr-[-225.33px] !gap-[376px]"
                  tableTypeText="#281204"
                  tableTypeType="link"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  resizableSpacerClassName="!gap-[120px]"
                  tableType={<TagStatus className="!flex-[0_0_auto]" type="successful" weight="regular" />}
                  tableTypeType="status"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="131634495747"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !w-[150.67px]"
                  tableTypeText="12 Jul 2023, 03:00 PM"
                  tableTypeType="text-regular"
                />
                <CellTableRow
                  className="!flex !items-end !w-[150.67px]"
                  tableTypeDivClassName="!text-black-12 !text-right"
                  tableTypeText="₹1,125.00"
                  tableTypeType="text-regular"
                />
                <div className="top-[48px] absolute w-[1104px] h-px left-[12px]" />
              </div>
            </div>
          </div>
        </div>
        <Navbar
          baseNavigationBar={
            <TypeParentStateWrapper
              badge={false}
              beta={false}
              className="!flex-[0_0_auto]"
              icon={<NavbarIcon135 className="!relative !w-[20px] !h-[20px]" color="white" />}
              state="active"
              text="Payouts"
              type="parent"
            />
          }
          baseNavigationBarBaseNavBottomOutlineWalletWallet="https://c.animaapp.com/CqtaZhb1/img/wallet.svg"
          baseNavigationBarBaseNavButtonIcon={<NavbarIcon164 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarBaseNavButtonIcon1={<NavbarIcon44 className="!relative !w-[20px] !h-[20px]" color="white" />}
          baseNavigationBarBaseNavButtonIcon2={<NavbarIcon39 className="!relative !w-[20px] !h-[20px]" color="white" />}
          baseNavigationBarBaseNavButtonIcon3={<NavbarIcon6 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarBaseNavButtonIcon4={<NavbarIcon29 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarBaseNavButtonIcon5={<NavbarIcon143 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarBaseNavButtonIcon6={<NavbarIcon8 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarBaseNavButtonIcon7={
            <NavbarIcon160 className="!relative !w-[20px] !h-[20px]" color="white" />
          }
          baseNavigationBarBaseNavButtonIcon8={<NavbarIcon53 className="!relative !w-[20px] !h-[20px]" />}
          baseNavigationBarVisible={false}
          className="!h-[882px] !fixed !left-0 !top-0"
          navbar="account"
          override={<NavbarIcon145 className="!relative !w-[20px] !h-[20px]" />}
        />
      </div>
    </div>
  );
};
