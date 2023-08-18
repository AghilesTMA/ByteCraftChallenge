import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HamburgerOpen from "../assets/HamburgerOpen";
import HamburgerClose from "../assets/HamburgerClose";
import {motion} from "framer-motion"

const Header = () => {
  const [isOpened,setIsOpened] = useState(false);

  return (
    <header className={` ${isOpened?" fixed w-full":"relative"} flex items-center justify-between tablet:px-8 tablet:py-4 p-4 h-[15vh] bg-white mb-8 z-50`}>
      <Logo />
      <NavLinks show={isOpened} setShow={setIsOpened} />
      <div className={`${isOpened?" fixed left-0 h-[20vh] top-[80vh] w-full flex items-center justify-evenly":"hidden"} tablet:inline-block flex gap-2 tablet:relative tablet:top-auto tablet:left-auto tablet:w-auto tablet:h-auto z-50 bg-white`}>
        <motion.button type="button" whileHover={{scale:1.1}} whileTap={{scale:.9}} className=" py-2 px-4 sm:font-medium">Log In</motion.button>
        <motion.button type="button" whileHover={{scale:1.1}} whileTap={{scale:.9}} className=" py-2 px-4 sm:font-medium text-white bg-Primary-Purple rounded-full hover:bg-Primary-Pink">Sign Up</motion.button>
      </div>
      <div onClick={()=>setIsOpened(prev=>!prev)} className="desktop:hidden tablet:-order-last">
        <HamburgerOpen show={isOpened}/>
        <HamburgerClose show={isOpened}/>
      </div>
      <div
        className={` absolute left-0 top-0 h-0 w-0 bg-Primary-Orange rounded-full -z-10 hidden  desktop:hidden ${isOpened?" hidden":"tablet:inline-block"}`}
        style={{boxShadow:" 0px 0px 400px 50px #FF5722"}}
      ></div>
    </header> 
  );
};

export default Header;
