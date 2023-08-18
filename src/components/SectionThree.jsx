import ArrowLeft from "../assets/ArrowLeft";
import ArrowRight from "../assets/ArrowRight";
import beach from "../assets/beach.png";
import fish from "../assets/fish.png";
import mountains from "../assets/mountains.png";
import SectionThreeCard from "./SectionThreeCard";

const SectionThree = () => {
  return (
    <section className=" flex flex-col gap-8 items-center p-4 mb-8">
      <div className=" text-center flex flex-col desktop:flex-row desktop:justify-between gap-4 desktop:text-left w-full items-center">
        <div className=" flex flex-col">
          <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
            TOP DESTINATION
          </h3>
          <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
            Explore Top Destination
          </h2>
        </div>
        <div className=" flex gap-4 w-full justify-between tablet:w-auto">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <ul className=" flex flex-col gap-8 tablet:flex-row tablet:justify-center p-2 tablet:p-4 desktop:px-8 flex-wrap items-center desktop:flex-nowrap">
        <li>
          <SectionThreeCard
            img={beach}
            title={"Paradise Beach, Bantayan Island"}
            price={"$550.16"}
            place={"Rome, Italy"}
            rating={4.8}
          />
        </li>
        <li>
          <SectionThreeCard
            img={fish}
            title={"Ocean with full of Colors"}
            price={"$20.99"}
            place={"Maldives"}
            rating={4.5}
          />
        </li>
        <li>
          <SectionThreeCard
            img={mountains}
            title={"Mountain View, Above the cloud"}
            price={"$150.99"}
            place={"United Arab Emeries"}
            rating={5.0}
          />
        </li>
        
      </ul>
    </section>
  );
};

export default SectionThree;
