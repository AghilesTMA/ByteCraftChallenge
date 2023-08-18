import EmailIcon from "../assets/EmailIcon";
import { motion } from "framer-motion";
import TrianglePattern from "../assets/TrianglePattern";

const EmailSection = () => {
  return (
    <section className=" mb-8 p-4">
      <div className=" bg-Neutral-Light-Yellow px-4 py-20 rounded-2xl flex flex-col gap-14 tablet:max-w-3xl m-auto relative">
        <div className=" flex flex-col text-center gap-4 items-center ">
          <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
            subscribe to our newsletter
          </h3>
          <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
            Prepare yourself & let’s explore the beauty of the world
          </h2>
        </div>
        <div className=" flex flex-col tablet:flex-row gap-4 justify-between">
          <div className=" relative w-full">
            <input
              className=" py-4 px-2 pl-10 font-bold placeholder:text-gray-600 w-full rounded-2xl"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <EmailIcon styles={" absolute top-[16px] left-[5px]"} />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className=" bg-Primary-Purple text-white p-4 font-semibold rounded-xl w-full tablet:max-w-[200px]"
          >
            Subscribe
          </motion.button>
        </div>
        <div className=" absolute top-[-20px] left-[-20px] hidden tablet:inline-block w-[120px] h-[120px]">
          <TrianglePattern />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
