const HamburgerClose = ({show}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className={`${show?"":" hidden"} cursor-pointer`}
    >
      <rect width="40" height="40" fill="#5D50C6" rx="10"></rect>
      <rect
        width="3.63"
        height="32.631"
        x="7"
        y="9.567"
        fill="#fff"
        rx="1.815"
        transform="rotate(-45 7 9.567)"
      ></rect>
      <rect
        width="3.63"
        height="32.631"
        x="30.073"
        y="7"
        fill="#fff"
        rx="1.815"
        transform="rotate(45 30.073 7)"
      ></rect>
    </svg>
  )
}

export default HamburgerClose