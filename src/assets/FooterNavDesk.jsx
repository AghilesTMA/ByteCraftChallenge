
const FooterNavDesk = ({type,arr}) => {
  return (
    <div>
      <h3 className=" font-bold text-lg mb-4">{type}</h3>
      <ul className=" flex flex-col gap-4">
        {arr.map(e=><li className=" hover:opacity-[100%] opacity-50 cursor-pointer" key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

export default FooterNavDesk