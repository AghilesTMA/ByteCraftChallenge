const SectionFiveCard = ({img, title, text }) => {
  return (
    <div className=" flex flex-col tablet:flex-row gap-4 p-4 border-solid border-2 border-transparent hover:border-gray-200 cursor-pointer rounded-xl tablet:items-center">
      <div className=" w-[100px] h-[100px]">
        <img src={img} alt="icon" />
      </div>
      <div>
        <h3 className=" font-bold text-lg">{title}</h3>
        <p className=" opacity-50">{text}</p>
      </div>
    </div>
  );
};

export default SectionFiveCard;
