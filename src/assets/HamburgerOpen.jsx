
const HamburgerOpen = ({show}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      fill="none"
      viewBox="0 0 40 41"
      className={`${show?" hidden":""} cursor-pointer`}
    >
      <path
        fill="#5D50C6"
        d="M28.38.5H11.62C4.34.5 0 4.84 0 12.12v16.74c0 7.3 4.34 11.64 11.62 11.64h16.74c7.28 0 11.62-4.34 11.62-11.62V12.12C40 4.84 35.66.5 28.38.5zM30 31H10c-.82 0-1.5-.68-1.5-1.5S9.18 28 10 28h20c.82 0 1.5.68 1.5 1.5S30.82 31 30 31zm0-9H10c-.82 0-1.5-.68-1.5-1.5S9.18 19 10 19h20c.82 0 1.5.68 1.5 1.5S30.82 22 30 22zm0-9H10c-.82 0-1.5-.68-1.5-1.5S9.18 10 10 10h20c.82 0 1.5.68 1.5 1.5S30.82 13 30 13z"
      ></path>
    </svg>
  )
}

export default HamburgerOpen