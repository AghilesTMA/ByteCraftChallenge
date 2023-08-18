import SectionTwoCard from "./SectionTwoCard";
import icon1 from "../assets/cardOneIcon.png";
import icon2 from "../assets/cardTwoIcon.png";
import icon3 from "../assets/cardThreeIcon.png";

const SectionTwo = () => {
  return (
    <section className=" flex flex-col desktop:flex-row items-center text-center p-4 gap-8 overflow-hidden mb-8">
      <div>
        <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
          SERVICES
        </h3>
        <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
          Our top value categories for you
        </h2>
      </div>
      <ul className=" flex tablet:flex-row flex-col gap-8 tablet:flex-wrap desktop:flex-nowrap tablet:justify-center">
        <li>
          <SectionTwoCard
            img={icon1}
            title={"Best Tour Guide"}
            text={
              "What looked like a small patch of purple grass, above five feet."
            }
          />
        </li>
        <li>
          <SectionTwoCard
            img={icon2}
            title={"Easy Bokking"}
            text={"Square, was moving across the sand in their direction."}
          />
        </li>
        <li>
          <SectionTwoCard
            img={icon3}
            title={"Weather Forecast"}
            text={
              "What looked like a small patch of purple grass, above five feet."
            }
          />
        </li>
      </ul>
    </section>
  );
};

export default SectionTwo;
