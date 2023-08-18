import YellowStarIcon from "../assets/YellowStarIcon";

const SliderCard = ({ img, fullName, hobbie, stars, comment }) => {
  return (
    <div className=" flex flex-col gap-8 items-center text-center">
      <div className=" w-[120px] h-[120px] rounded-full overflow-hidden">
        <img src={img} alt="user icon" />
      </div>
      <div className=" flex flex-col gap-8">
        <span className=" font-bold text-xl">
          <span className=" text-Primary-Orange ">{fullName}</span> / {""}
          {hobbie}
        </span>
        <ul className=" flex  w-full justify-evenly items-center">
          {[...new Array(stars)].map((e, idx) => (
            <li key={idx}>
              <YellowStarIcon />
            </li>
          ))}
        </ul>
      </div>
      <p className=" max-w-2xl">{comment}</p>
    </div>
  );
};

export default SliderCard;
