import HeroImg from "../assets/HeroImg";
import WorkIcon from "../assets/WorkIcon";
import PlayCirculIcon from "../assets/PlayCirculIcon";
import Triangles from "../assets/Triangles";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className=" flex flex-col desktop:flex-row desktop:justify-between overflow-hidden gap-2 justify-center items-center text-center p-4 relative mb-8">
      <div className=" p-4 desktop:order-1 w-full max-w-2 xl">
        <HeroImg />
      </div>
      <div className=" flex flex-col justify-center items-center gap-8 ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className=" flex p-4  text-Primary-Pink font-semibold items-center justify-center gap-2 shadow-lg rounded-full cursor-pointer border-[1px] border-solid border-slate-300"
        >
          Explore the world!
          <WorkIcon />
        </motion.button>
        <h1 className=" text-4xl tablet:text-5xl max-w-xl tablet:leading-[4rem] font-bold">
          Travel <span className=" text-Primary-Pink">top destination</span> of
          the world
        </h1>
        <p className=" opacity-50 max-w-sm -z-10">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className=" flex flex-col tablet:flex-row gap-4 w-full tablet:justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" p-4 tablet:p-2 font-medium text-lg rounded-full shadow-lg cursor-pointer bg-Primary-Purple text-white"
            type="button"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" p-4 tablet:p-2 font-medium text-lg rounded-full shadow-lg cursor-pointer flex gap-2 justify-center items-center border-[1px] border-solid border-slate-300"
            type="button"
          >
            <PlayCirculIcon />
            Watch Demo
          </motion.button>
        </div>
      </div>
      <Triangles
        styles={
          " absolute bottom-[-10px] left-[10px] -z-10 opacity-80 hidden tablet:inline-block"
        }
      />
    </main>
  );
};

export default HeroSection;
