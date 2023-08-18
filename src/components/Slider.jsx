import React, { useState } from "react";
import user from "../assets/user.png";
import user2 from "../assets/icon2.jpg";
import user3 from "../assets/icon3.jpg";
import SliderCard from "./SliderCard";
import { motion } from "framer-motion";
import ArrowRight from "../assets/ArrowRight";
import ArrowLeft from "../assets/ArrowLeft";

const Slider = () => {
  const [step, setStep] = useState(0);

  return (
    <div className=" grid grid-cols-2 tablet:grid-cols-10">
      <div className=" flex flex-col gap-4 overflow-hidden col-span-2 tablet:col-span-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {step == 0 ? (
            <SliderCard
              img={user}
              fullName={"Mark Smith"}
              hobbie={"Traverl Entusianst"}
              stars={5}
              comment={`
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`}
            />
          ) : null}
          {step == 1 ? (
            <SliderCard
              img={user2}
              fullName={"Guts"}
              hobbie={"The Black Swordsman"}
              stars={3}
              comment={`
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`}
            />
          ) : null}
          {step == 2 ? (
            <SliderCard
              img={user3}
              fullName={"Mob psycho"}
              hobbie={"Something"}
              stars={4}
              comment={`
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.`}
            />
          ) : null}
        </motion.div>
        <ul className=" flex justify-center gap-4">
          {[...new Array(3)].map((e, idx) => (
            <li
              onClick={() => setStep(idx)}
              key={idx}
              className={` w-8 h-8 rounded-full cursor-pointer  ${
                idx == step ? " bg-Primary-Pink" : "bg-slate-200"
              } `}
            ></li>
          ))}
        </ul>
      </div>
      <div onClick={()=>setStep(prev=>prev>0?prev-1:prev)} className=" col-span-1 tablet:flex justify-center items-center tablet:order-first min-w-[50px]">
        <ArrowLeft />
      </div>
      <div onClick={()=>setStep(prev=>prev<2?prev+1:prev)} className=" col-span-1 flex justify-end tablet:justify-center items-center min-w-[50px]">
        <ArrowRight />
      </div>
    </div>
  );
};

export default Slider;
