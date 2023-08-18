import React from "react";
import SliderBg from "../assets/SliderBg";
import Slider from "./Slider";

const SliderSection = () => {
  return (
    <section className="p-4 flex flex-col gap-8 mb-8 relative items-center overflow-hidden">
      <div className=" flex flex-col text-center gap-4 items-center ">
        <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
          Testimonials
        </h3>
        <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
          Trust our clients
        </h2>
      </div>
      <div className=" absolute -z-10 hidden tablet:inline-block w-full desktop:top-[-25%] tablet:top-[25%]">
        <SliderBg />
      </div>
      <Slider/>
    </section>
  );
};

export default SliderSection;
