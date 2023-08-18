const SectionTwoCard = ({ img, title, text }) => {
  return (
    <div className=" flex flex-col p-8 gap-8 items-center border-solid border-[1px] border-slate-200 rounded-lg shadow-xl tablet:w-[200px] tablet:h-[400px] desktop:h-auto desktop:aspect-[2/3] desktop:w-[250px] desktop:justify-evenly ">
      <div className=" w-16">
        <img src={img} alt="icon" />
      </div>
      <h3 className=" font-bold text-xl">{title}</h3>
      <p className=" opacity-50">{text}</p>
    </div>
  );
};

export default SectionTwoCard;
