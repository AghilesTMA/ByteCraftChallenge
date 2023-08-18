import { useEffect, useState } from "react";
import Logo from "./Logo";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/Instagram";
import { motion } from "framer-motion";
import FooterNavDesk from "../assets/FooterNavDesk";
import FooterNavMobile from "./FooterNavMobile";
import WavePattern from "../assets/WavePattern"

const Footer = () => {
  const [mobile, setMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 450) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className=" p-4 flex flex-col desktop:flex-row gap-8 desktop:gap-4 justify-evenly relative">
      <div className=" flex flex-col gap-4">
        <Logo />
        <p className=" opacity-50 desktop:max-w-lg">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <ul className=" flex gap-8">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-[32px] cursor-pointer"
          >
            <Facebook />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-[32px] cursor-pointer"
          >
            <Twitter />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-[32px] cursor-pointer"
          >
            <Instagram />
          </motion.li>
        </ul>
      </div>
      <div>
        {mobile?
        (
          <ul className=" flex flex-col gap4">
            <FooterNavMobile type={"Company"} arr={["About","Career","Mobile"]}/>
            <FooterNavMobile type={"Contact"} arr={["Why travlog?","Partner with us","FAQ's","Blog"]}/>
            <FooterNavMobile type={"Meet Us"} arr={["+00 92 1234 56789","info@travlog.com ","205. R Street, New York","BD23200"]}/>
          </ul>
        )
        :(
          <ul className=" flex gap-8 justify-between">
            <FooterNavDesk type={"Company"} arr={["About","Career","Mobile"]}/>
            <FooterNavDesk type={"Contact"} arr={["Why travlog?","Partner with us","FAQ's","Blog"]}/>
            <FooterNavDesk type={"Meet Us"} arr={["+00 92 1234 56789","info@travlog.com ","205. R Street, New York","BD23200"]}/>
          </ul>
        )}
      </div>
      <div className=" absolute desktop:top-[-25%] right-0 hidden tablet:inline-block w-52 h-52 tablet:top-0">
        <WavePattern />
      </div>
    </footer>
  );
};

export default Footer;
