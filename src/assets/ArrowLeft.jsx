import {motion} from "framer-motion"

const ArrowLeft = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
      whileHover={{scale:1.05}}
      whileTap={{scale:.9}}
      className={` cursor-pointer`}
    >
      <rect width="80" height="80" fill="#fff" rx="40"></rect>
      <rect
        width="79"
        height="79"
        x="0.5"
        y="0.5"
        stroke="#191825"
        strokeOpacity="0.1"
        rx="39.5"
      ></rect>
      <path
        fill="#191825"
        d="M35.531 39.2H46.4a.8.8 0 110 1.6H35.531l2.595 2.594a.8.8 0 01-1.132 1.132L33.6 41.13a1.6 1.6 0 010-2.262l3.394-3.395a.8.8 0 111.132 1.132L35.53 39.2z"
      ></path>
    </motion.svg>
  );
};

export default ArrowLeft;
