import React, { useState } from "react";

const NavLinks = ({show,setShow}) => {
  const links = ["Home", "Discover", "Special Deals", "Contact"];
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <nav className={`${show?" h-[65vh] fixed tablet:h-[85vh] top-[15vh] left-0 w-full":"hidden"} desktop:block desktop:relative desktop:w-auto desktop:h-auto desktop:left-auto desktop:top-auto z-50 bg-white`}>
      <ul className={`flex desktop:flex-row flex-col gap-8 items-center desktop:gap-4 w-full h-full p-12 desktop:p-0 `}>
        {links.map((lnk) => {
          return (
            <li
              key={lnk}
              onClick={() => {
                setSelectedLink(lnk);
                setShow(false);
              }}
              className={`font-medium opacity-50 hover:opacity-[100%] cursor-pointer ${selectedLink==lnk?" opacity-[100%]":""}`}
            >
              <a href="#">{lnk}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
