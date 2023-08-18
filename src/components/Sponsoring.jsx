import sponsors from "../assets/sponsors";

const Sponsoring = () => {
  return (
    <div className=" mb-8 relative">
      <ul className=" flex flex-wrap justify-evenly p-8 items-center gap-4">
        {sponsors.map((img) => (
          <li className=" w-[140px] inline-block" key={img}>
            <img src={img} alt="sponsor" className="w-full" />
          </li>
        ))}
      </ul>
      <div
        className=" absolute left-full top-1/2 h-0 w-0 bg-Primary-Orange rounded-full -z-10 hidden tablet:inline-block"
        style={{boxShadow:" 0px 0px 400px 50px #facd49"}}
      ></div>
    </div>
  );
};

export default Sponsoring;
