import React from "react";
import TriangleError from "../../assets/svgs/TriangleError";
import PieLoader from "../../assets/svgs/PieLoader";
import Tick from "../../assets/svgs/Tick";
import Clock from "../../assets/svgs/Clock";
import Error from "../../assets/svgs/Error";
import Gas from "../../assets/svgs/Gas";
import SmallGas from "../../assets/svgs/SmallGas";
import CryptoSymbol from "../../assets/svgs/CryptoSymbol";

interface Props {
  isTypeOne?: boolean;
  isInterrupted?: boolean;
  isCompleted?: boolean;
  isRunning?: boolean;
  isAddFunds?: boolean;
  date?: string;
  time?: string;
  btn1?: string;
  btn2?: string;
}

const DashboardDetails: React.FC<Props> = ({
  isInterrupted,
  isCompleted,
  isRunning,
  isAddFunds,
  date,
  time,
  btn1,
  btn2,
}) => {
  return (
    <div className="relative w-full py-[24px] px-[24px] search_border dashDetailBg my-[8px]">
      <div className="w-3/4">
        <div className="flex items-center absolute left-0 top-[24px]">
          <div className="mr-[8px] w-[105px] flex items-center justify-end bg-[#DF4141] pr-[12px] rounded-r-[8px]">
            <div>
              {isInterrupted && <TriangleError />}
              {isRunning && <PieLoader />}
              {isCompleted && <Tick />}
            </div>
            <p className="font-Satoshi_700 text-[12px] text-white ml-[4px]">
              Create
            </p>
          </div>
          <div className="flex items-center ">
            <Clock />
            <p className="font-Satoshi_400 text-[14px] text-white/70 ml-[8px]">
              {date} {time}
            </p>
          </div>
        </div>
        <p className="font-Satoshi_400 text-[16px] text-white mt-[36px]">
          {isAddFunds ? "Using Card" : "Beep"}
        </p>
        <div className="flex mt-[4px] items-center">
          <BeepText />
          <BeepText />
          <BeepText />
          <p className="font-Satoshi_700 text-[14px] text-white ml-[8px] mt-[14px]">
            +4
          </p>
        </div>
        <div className="flex items-center mt-[18px]">
          {!isAddFunds ? (
            <div className="relative search_border px-[16px] h-[29px] w-[289px] flex items-center ">
              <div className="flex items-center font-Satoshi_400 text-[14px] text-white border_right_grey pr-[16px]">
                0/7
                <p className="ml-[8px] ">Minting</p>
              </div>
              <div className="pl-[16px] flex items-center font-Satoshi_400 text-[14px] text-white border_right_grey">
                0<p className="ml-[8px] text-white/70 pr-[16px]">Success</p>
              </div>
              <div className="flex items-center font-Satoshi_400 text-[14px] pl-[16px] text-white ">
                7<p className="ml-[8px] text-white/70 pr-[16px]">Failed</p>
              </div>
              <div className="absolute right-[-9px] top-[-9px]">
                <Error />
              </div>
            </div>
          ) : (
            <div className="flex px-[16px] items-center search_border font-Satoshi_400 text-[14px] text-white border_right_grey py-[6px]">
              <CryptoSymbol />
              <p className="ml-[8px] ">1.5 ETH</p>
            </div>
          )}
          {!isAddFunds && (
            <p className="flex items-center ml-[14px]">
              <SmallGas />

              <span className="pl-[8px] font-Satoshi_400 text-[14px] text-white ">
                0 ETH $0 USD
              </span>
            </p>
          )}
        </div>
        {!isAddFunds && <ProgressBar />}
      </div>

      <div className="mt-[16px] flex items-center">
        {btn1 && (
          <div className="font-Satoshi_400 text-[14px]  cursor-pointer bg-white text-[#121212] px-[16px] py-[8px] rounded-[8px] w-fit mr-[8px]">
            {btn1}
          </div>
        )}
        {btn2 && (
          <div className="font-Satoshi_400 text-[14px]  cursor-pointer text-white border border-solid border-white px-[16px] py-[8px] rounded-[8px] w-fit">
            {btn2}
          </div>
        )}
      </div>
    </div>
  );
};

const BeepText = () => (
  <p className="font-Satoshi_700 text-[30px] text-white mr-[4px]">
    Beep 057
    <span className="font-Satoshi_700 text-[14px] text-white">(1)</span>
    <span className="font-Satoshi_700 text-[14px] text-white/50 ml-[8px]">
      /
    </span>
  </p>
);

const ProgressBar = () => (
  <div className="h-[16px] relative rounded-[8px] w-full bg-black/10 mt-[16px] ">
    <div className="h-[16px] w-1/2 bg-white absolute left-0 top-0 rounded-[8px] gradInItem"></div>
  </div>
);

export default DashboardDetails;
