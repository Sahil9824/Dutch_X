import React, { useState } from "react";
import Search from "../../assets/svgs/Search";
import Enter from "../../assets/svgs/Enter";
import RightArrow from "../../assets/svgs/RightArrow";

const SearchInput = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="h-[37px] w-1/4 flex bg-transparent px-[8px] search_border py-8px items-center justify-between relative">
      <div className="flex w-full items-center">
        <Search />
        <input
          className="flex-1 px-[10px] ml-[8px] bg-transparent font-Satoshi_400 text-[14px] text-white/60 "
          type="search"
          placeholder="Enter name Or Id"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
      <Enter />
      {isFocus && (
        <div className="w-full h-[234px] absolute top-[40px] left-0 rounded-[8px] flex flex-col items-start inputSearch py-[16px]">
          <ListItem title="Analytics" isBorder />
          <ListItem title="Find Holders" />
        </div>
      )}
    </div>
  );
};

interface List {
  title: string;
  isBorder?: boolean;
}

const ListItem: React.FC<List> = ({ title, isBorder }) => (
  <div
    className={`w-full py-[5px] ${
      isBorder && "border-b-[1px] border-[#000000]/10"
    }`}
  >
    <p className="px-[24px]">{title}</p>

    <div className="flex w-full items-center mt-[8px] justify-between px-[24px] py-[10px] cursor-pointer hover:bg-[#000000]/10">
      <div className="flex items-center">
        <div className="h-[40px] w-[40px] bg-white"></div>
        <div className="ml-[16px]">
          <p className="font-Satoshi_700 text-[16px] text-white">Beep 044</p>
          <p className="font-Satoshi_400 text-[14px] text-white/60">
            0xb6...e462
          </p>
        </div>
      </div>
      <RightArrow />
    </div>
  </div>
);

export default SearchInput;
