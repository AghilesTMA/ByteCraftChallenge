import sectionFiveImg from "../assets/sectionFiveImg.png";
import location from "../assets/location.png";
import calander from "../assets/calander.png";
import coupon from "../assets/coupon.png";
import SectionFiveCard from "./SectionFiveCard";

const SectionFive = () => {
  return (
    <section className=" flex flex-col desktop:flex-row gap-4 p-4 desktop:justify-between items-center mb-8">
      <div className=" w-full desktop:order-last max-w-lg">
        <img src={sectionFiveImg} alt="img" />
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex flex-col text-center desktop:text-left gap-4 items-center desktop:items-start">
          <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
            KEY FEATURES
          </h3>
          <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
            We offer best services
          </h2>
          <p className=" opacity-50 desktop:max-w-3xl tablet:max-w-2xl">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <ul>
          <li>
            <SectionFiveCard
              img={location}
              title={"We offer best services"}
              text={"Lorem Ipsum is not simply random text"}
            />
          </li>
          <li>
            <SectionFiveCard
              img={calander}
              title={"Schedule your trip"}
              text={"It has roots in a piece of classical"}
            />
          </li>
          <li>
            <SectionFiveCard
              img={coupon}
              title={"Get discounted coupons"}
              text={"Lorem Ipsum is not simply random text"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionFive;
