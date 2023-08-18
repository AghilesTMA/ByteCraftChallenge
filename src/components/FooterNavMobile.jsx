import { useState } from "react";
import ArrowBottom from "../assets/ArrowBottom";
import { motion, AnimatePresence } from "framer-motion";

const FooterNavMobile = ({ type, arr }) => {
  const [show, setShow] = useState(false);
  return (
    <div className=" p-2">
      <div
        onClick={() => setShow((prev) => !prev)}
        className={` flex justify-between items-center cursor-pointer "mb-4"`}
      >
        <h3 className=" font-bold text-lg">{type}</h3>
        <ArrowBottom show={show} />
      </div>
      <AnimatePresence>
        {show ? (
          <motion.ul
            key={show}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            className=" flex flex-col gap-2"
          >
            {arr?.map((e) => (
              <li
                className=" opacity-50 hover:opacity-100 cursor-pointer"
                key={e}
              >
                {e}
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FooterNavMobile;
