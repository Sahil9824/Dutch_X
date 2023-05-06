import { map } from "lodash";
import React from "react";
import RightArrow from "../../assets/svgs/RightArrow";

interface data {
  title: string;
  number?: number;
}

interface Props {
  title: string;
  data?: data[];
  isNumber?: boolean;
}

const OverviewDetails: React.FC<Props> = ({ title, data, isNumber }) => {
  return (
    <div className="search_border py-[12px] pl-[24px] pr-[16px] my-[8px] ">
      {title && (
        <p className="font-Satoshi_500 text-[20px] text-white">{title}</p>
      )}

      {map(data, (item) => (
        <p className="cursor-pointer font-Satoshi_400 flex items-center justify-between text-base font-normal leading-6 tracking-normal text-left text-white/60 mt-[12px]">
          {item.title}
          <div className="flex items-center">
            {isNumber && (
              <span
                className="mr-[16px]
            font-Satoshi_400  text-white text-base font-normal leading-6 tracking-normal text-left
            "
              >
                {item.number}
              </span>
            )}
            <RightArrow />
          </div>
        </p>
      ))}
    </div>
  );
};

export default OverviewDetails;
