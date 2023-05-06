import React from "react";
import Navbar from "../components/Navbar";
import DashboardItem, { DashboardProps } from "../components/DashboardItem";
import NFT from "../../assets/svgs/NftManagement";
import FindHolder from "../../assets/svgs/FindHolder";
import AirDrop from "../../assets/svgs/AirDrop";
import TradeIn from "../../assets/svgs/TradeIn";
import Analytics from "../../assets/svgs/Analytics";
import { map } from "lodash";
import { DASHBOARD_ITEM_COLORS } from "../general.constants";
import DashboardDetails from "@/components/DashboardDetails";

const DashboardItemsList = [
  {
    icon: <NFT />,
    title: "NFT Management",
    bgCol: DASHBOARD_ITEM_COLORS.GREEN_BG,
  },
  {
    icon: <FindHolder />,
    title: "Find Holders",
    bgCol: DASHBOARD_ITEM_COLORS.BROWN,
  },
  {
    icon: <AirDrop />,
    title: "Air Drop",
    bgCol: DASHBOARD_ITEM_COLORS.BLUE,
  },
  {
    icon: <TradeIn />,
    title: "Trade In",
    bgCol: DASHBOARD_ITEM_COLORS.PURPLE,
  },
  {
    icon: <Analytics />,
    title: "Analytics",
    bgCol: DASHBOARD_ITEM_COLORS.PINK,
  },
];

const Homepage = () => {
  return (
    <div className="bg-c_bg_black w-screen h-screen overflow-scroll">
      <Navbar />
      <div className="flex  w-full justify-between items-center mt-[16px] gap-[16px] px-6">
        {map(DashboardItemsList, (item: DashboardProps) => (
          <DashboardItem {...item} />
        ))}
      </div>
      <div className="border_bottom w-screen mt-[16px]"></div>

      <div className="flex w-full mr-[24px] px-[24px] mt-[36px]">
        <div className="flex flex-col w-9/12 pr-[24px]">
          <div className="flex items-center">
            <p className="flex font-Satoshi_400 text-white/50 text-[24px]">
              Recent Activity
            </p>
            <div className="flex items-center justify-center ml-[8px]">
              <div className="h-[12px] w-[12px] rounded-[6px] bg-[#70BC63] mr-[8px]"></div>
              <p className="font-Satoshi_700 text-[14px] text-white leading-[21px]">
                Running
              </p>
            </div>
            <div className="flex items-center justify-center ml-[8px]">
              <div className="h-[12px] w-[12px] rounded-[6px] bg-[#DF4141] mr-[8px]"></div>
              <p className="font-Satoshi_700 text-[14px] text-white leading-[21px]">
                Interrupted
              </p>
            </div>
            <div className="flex items-center justify-center ml-[8px]">
              <div className="h-[12px] w-[12px] rounded-[6px] bg-[#4798E3] mr-[8px]"></div>
              <p className="font-Satoshi_700 text-[14px] text-white leading-[21px]">
                Completed
              </p>
            </div>
          </div>
          <DashboardDetails
            isInterrupted
            date="2022-09-13"
            time="08:57:15 PST"
            btn2="Show Report"
          />
          <DashboardDetails
            isRunning
            date="2022-09-13"
            time="08:57:15 PST"
            btn1="View Progress"
            btn2="Stop Mining"
          />
          <DashboardDetails
            isCompleted
            date="2022-09-13"
            time="08:57:15 PST"
            btn1="View in NFT Management"
            btn2="Show Report"
          />
          <DashboardDetails
            isCompleted
            isAddFunds
            date="2022-09-13"
            time="08:57:15 PST"
            btn1="View Transaction"
          />
        </div>
        <div className="font-Satoshi_400 text-[24px] text-white/50">
          <p>Overview</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
