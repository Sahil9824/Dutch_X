import React, { useState } from "react";
import Logo from "../../assets/svgs/Logo";
import OrangeDot from "../../assets/svgs/OrangeDot";
import Gas from "../../assets/svgs/Gas";
import DownArrow from "../../assets/svgs/DownArrow";
import Notification from "../../assets/svgs/Notification";
import Avatar from "../../assets/images/Avatar.png";
import SearchInput from "./SearchInput";
import cx from "classnames";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const getItemClasses = (id: number) =>
    cx("text-base cursor-pointer hover:text-white flex flex-col items-center", {
      "text-white": active === id,
      "text-white/70": active !== id,
      "font-Satoshi_700": active === id,
      "font-Satoshi_400": active !== id,
    });

  const setActiveItem = (id: number) => () => {
    setActive(id);
  };

  return (
    <nav className="flex py-4 px-[24px] w-full justify-between items-center gap-[10px]">
      <div className="flex items-center">
        <Logo />
        <ul className="ml-[32px] flex items-start justify-between gap-[20px] pt-[20px]">
          <li className={getItemClasses(1)} onClick={setActiveItem(1)}>
            <p> Dashboard</p>
            {active === 1 && <OrangeDot />}
          </li>
          <li className={getItemClasses(2)} onClick={setActiveItem(2)}>
            <p>Create</p>
            {active === 2 && <OrangeDot />}
          </li>
          <li className={getItemClasses(3)} onClick={setActiveItem(3)}>
            Marketplace
            <p className="font-Satoshi_500 text-dot_Orange text-[12px] mr-[10px]">
              Coming Soon
            </p>
          </li>
          <li className={getItemClasses(4)} onClick={setActiveItem(4)}>
            <p>Roadmap</p>
            {active === 4 && <OrangeDot />}
          </li>
        </ul>
      </div>
      <SearchInput />
      <div className="h-[26px] flex items-center justify-center py-[4px] px-[8px] bg-[#70BC63]/20 rounded-[4px]">
        <div className="w-[7px] h-[7px] rounded-[3.5px] bg-[#70BC63]"></div>
        <p className="font-Satoshi_700 text-[12px] text-[#70BC63] ml-[8px]">
          STATUS
        </p>
      </div>

      <div className="flex items-center ">
        <Gas />
        <p className="font-Satoshi_400 text-white text-[14px] ml-[4px] whitespace-nowrap">
          $0.14 USD
        </p>
      </div>
      <div className="ml-[16px]">
        <Notification />
      </div>

      <div className="p-[6px] flex items-center search_border h-[36px]">
        <Image
          src={Avatar}
          alt="Avatar"
          className="h-[24px] w-[24px] object-contain"
        />
        <p className="font-Satoshi_700 text-white text-[14px] ml-[6px] mr-[10px] whitespace-nowrap">
          0x31...c0b8
        </p>
        <DownArrow />
      </div>
    </nav>
  );
};

export default Navbar;
