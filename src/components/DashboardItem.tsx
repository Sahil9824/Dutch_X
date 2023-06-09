import React, { ReactElement } from "react";

export interface DashboardProps {
  icon: ReactElement;
  title: String;
  bgCol: String;
}

const DashboardItem: React.FC<DashboardProps> = ({ icon, title, bgCol }) => {
  const getStyle: object = { backgroundColor: bgCol };

  return (
    <div className="flex w-1/5 flex-col items-center cursor-pointer ">
      <div
        className={`h-[151px] w-full flex items-center justify-center rounded-[8px]`}
        style={getStyle}
      >
        {icon}
      </div>
      <p className="mt-[8px] font-Satoshi_700 text-white text-[16px]">
        {title}
      </p>
    </div>
  );
};

export default DashboardItem;
