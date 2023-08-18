import LogoImg from "../assets/LogoImg"

const Logo = () => {
  return (
    <div className=" flex items-center gap-2 cursor-pointer ">
      <LogoImg />
      <span className=" text-2xl font-bold">Travlog</span>
    </div>
  )
}

export default Logo