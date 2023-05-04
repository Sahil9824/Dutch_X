import React from "react";
import Search from "../../assets/svgs/Search";
import Enter from "../../assets/svgs/Enter";

const SearchInput = () => {
  return (
    <div className="flex">
      <Search />
      <input type="search" />
      <Enter />
    </div>
  );
};

export default SearchInput;
