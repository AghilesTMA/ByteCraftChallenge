import StarIcon from "../assets/StarIcon";

const SectionThreeCard = ({ img, title, price, place, rating }) => {
  return (
    <div className=" rounded-[2rem] overflow-hidden border-[1px] border-solid border-slate-300 flex flex-col gap-4 shadow-xl w-full tablet:w-[230px] tablet:aspect-[1/2] desktop:aspect-auto desktop:w-full desktop:max-w-[300px]">
      <div>
        <img src={img} alt="trip" />
      </div>
      <div className=" p-4 flex flex-col gap-4">
        <div className=" flex flex-col desktop:flex-row desktop:justify-between">
          <h3 className=" text-xl font-bold max-w-[15rem]">{title}</h3>
          <span className=" order-first text-Primary-Pink text-lg font-semibold desktop:order-last">{price}</span>
        </div>
        <span className=" opacity-50">{place}</span>
        <div className=" flex text-Primary-Orange items-center font-bold text-lg">
          {rating}
          <StarIcon />
        </div>
      </div>
    </div>
  );
};

export default SectionThreeCard;
