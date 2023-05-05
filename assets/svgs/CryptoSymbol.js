import * as React from "react";

const CryptoSymbol = (props) => (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
      fill="#627EEA"
    />
    <path
      d="M8 2.5V6.935L11.7485 8.61L8 2.5Z"
      fill="white"
      fillOpacity={0.602}
    />
    <path d="M8.249 2.5L4.5 8.61L8.249 6.935V2.5Z" fill="white" />
    <path
      d="M8 11.676V14.6895L11.751 9.5L8 11.676Z"
      fill="white"
      fillOpacity={0.602}
    />
    <path d="M8.249 14.6895V11.6755L4.5 9.5L8.249 14.6895Z" fill="white" />
    <path
      d="M8 10.8505L11.7485 8.674L8 7V10.8505Z"
      fill="white"
      fillOpacity={0.2}
    />
    <path
      d="M4.5 8.674L8.249 10.8505V7L4.5 8.674Z"
      fill="white"
      fillOpacity={0.602}
    />
  </svg>
);

export default CryptoSymbol;
