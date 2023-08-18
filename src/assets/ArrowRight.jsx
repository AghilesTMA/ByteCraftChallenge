import {motion} from "framer-motion"

const ArrowRight = () => {
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
      <rect
        width="80"
        height="80"
        x="80"
        y="80"
        fill="#5D50C6"
        rx="40"
        transform="rotate(-180 80 80)"
      ></rect>
      <rect
        width="79"
        height="79"
        x="79.5"
        y="79.5"
        stroke="#191825"
        strokeOpacity="0.1"
        rx="39.5"
        transform="rotate(-180 79.5 79.5)"
      ></rect>
      <path
        fill="#5D50C6"
        d="M0 0H19.2V19.2H0z"
        transform="rotate(180 24.8 24.8)"
      ></path>
      <path
        fill="#fff"
        d="M44.469 40.8H33.6a.8.8 0 110-1.6h10.869l-2.595-2.594a.8.8 0 011.132-1.132L46.4 38.87a1.6 1.6 0 010 2.262l-3.394 3.395a.8.8 0 11-1.132-1.132L44.47 40.8z"
      ></path>
    </motion.svg>
  );
};

export default ArrowRight;
