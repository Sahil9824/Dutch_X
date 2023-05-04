import React, { useState } from "react";
import Logo from "../../assets/svgs/Logo";
import SearchInput from "./SearchInput";
import cx from "classnames";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const getItemClasses = (id) =>
    cx("ml-8 text-base cursor-pointer", {
      "text-white": active === id,
      "text-white/70": active !== id,
      "font-Satoshi_700": active === id,
      "font-Satoshi_400": active !== id,
    });

  const setActiveItem = (id) => () => {
    setActive(id);
  };
  return (
    <nav className="flex py-4 w-full justify-between">
      <div className="flex">
        <Logo />
        <ul className="flex align-middle justify-between">
          <li className={getItemClasses(1)} onClick={setActiveItem(1)}>
            Dashboard
          </li>
          <li className={getItemClasses(2)} onClick={setActiveItem(2)}>
            Create
          </li>
          <li className={getItemClasses(3)} onClick={setActiveItem(3)}>
            Marketplace
          </li>
          <li className={getItemClasses(4)} onClick={setActiveItem(4)}>
            Roadmap
          </li>
        </ul>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Navbar;
