const ArrowBottom = ({show}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      className={` w-[24px] h-[24px] transition-all duration-500 ${show?" rotate-180":" rotate-0"}`}
    >
      <path
        fill="#292D32"
        d="M12 23.129c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.629 12 1.629s10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
      ></path>
      <path
        fill="#292D32"
        d="M12 15.389c-.19 0-.38-.07-.53-.22l-3.53-3.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
      ></path>
    </svg>
  );
};

export default ArrowBottom;
