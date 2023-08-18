import TicketIcon from "../assets/TicketIcon";
import woman from "../assets/woman.png";

const SectionFour = () => {
  return (
    <section className=" p-4 flex gap-4 flex-col desktop:flex-row desktop:items-center desktop:gap-0 mb-8">
      <div className=" p-2 tablet:p-8 desktop:p-0 desktop:w-full">
        <img src={woman} alt="woman" />
      </div>
      <div className=" p-4 flex flex-col gap-8">
        <div className=" flex flex-col text-center desktop:text-left gap-4 items-center desktop:items-start relative">
          <h3 className=" text-Primary-Pink font-semibold text-xl desktop:text-2xl">
            TOP DESTINATION
          </h3>
          <h2 className=" text-2xl font-bold max-w-lg desktop:text-3xl">
            Explore Top Destination
          </h2>
          <p className=" opacity-50 max-w-4xl">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className=" absolute bottom-[-2rem] right-0 w-14 h-14 hidden desktop:inline-block">
            <TicketIcon styles={"w-full h-full"} />
          </div>
        </div>
        <ul className=" grid grid-cols-1 tablet:grid-cols-2 gap-8 justify-items-center ">
          <li className=" w-full flex flex-col gap-4 items-center border-2 border-solid border-gray-200 rounded-xl py-4 ">
            <span className=" text-Primary-Orange font-semibold text-4xl">
              500+
            </span>
            Holiday Package
          </li>
          <li className=" w-full flex flex-col gap-4 items-center border-2 border-solid border-gray-200 rounded-xl py-4 ">
            <span className=" text-Primary-Orange font-semibold text-4xl">
              100
            </span>
            Luxury Hotel
          </li>
          <li className=" w-full flex flex-col gap-4 items-center border-2 border-solid border-gray-200 rounded-xl py-4 ">
            <span className=" text-Primary-Orange font-semibold text-4xl">
              7
            </span>
            Premuim Airlines
          </li>
          <li className=" w-full flex flex-col gap-4 items-center border-2 border-solid border-gray-200 rounded-xl py-4 ">
            <span className=" text-Primary-Orange font-semibold text-4xl">
              2k+
            </span>
            Happy customer
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionFour;
