import React from "react";
import Search from "../../assets/svgs/Search";
import Enter from "../../assets/svgs/Enter";

const SearchInput = () => {
  return (
    <div className="h-[37px] w-1/4 flex bg-transparent px-[8px] search_border py-8px items-center justify-between">
      <div className="flex w-full items-center">
        <Search />
        <input
          className="flex-1 px-[10px] ml-[8px] bg-transparent"
          type="search"
          placeholder="Enter name Or Id"
        />
      </div>
      <Enter />
    </div>
  );
};

export default SearchInput;
