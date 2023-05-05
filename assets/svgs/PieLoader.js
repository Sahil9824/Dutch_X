import * as React from "react";

const PieLoader = (props) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10.0002} cy={10.4988} r={8} fill="white" fillOpacity={0.3} />
    <path
      d="M18.0002 10.4988C18.0002 11.5494 17.7933 12.5896 17.3912 13.5602C16.9892 14.5309 16.3999 15.4128 15.657 16.1556C14.9142 16.8985 14.0323 17.4878 13.0617 17.8898C12.091 18.2919 11.0508 18.4988 10.0002 18.4988L10.0002 10.4988H18.0002Z"
      fill="white"
    />
  </svg>
);

export default PieLoader;
