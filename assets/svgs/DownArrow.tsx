import * as React from "react";

const DownArrow = (props: object) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1284_1489"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={20}
    >
      <rect width={20} height={20} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1284_1489)">
      <path
        d="M10.0013 13.474C9.89019 13.474 9.78269 13.4531 9.6788 13.4115C9.57436 13.3698 9.48741 13.3142 9.41797 13.2448L5.58464 9.41146C5.43186 9.25868 5.35547 9.06424 5.35547 8.82812C5.35547 8.59201 5.43186 8.39757 5.58464 8.24479C5.73741 8.09201 5.93186 8.01562 6.16797 8.01562C6.40408 8.01562 6.59852 8.09201 6.7513 8.24479L10.0013 11.4948L13.2513 8.24479C13.4041 8.09201 13.5985 8.01562 13.8346 8.01562C14.0707 8.01562 14.2652 8.09201 14.418 8.24479C14.5707 8.39757 14.6471 8.59201 14.6471 8.82812C14.6471 9.06424 14.5707 9.25868 14.418 9.41146L10.5846 13.2448C10.5013 13.3281 10.411 13.387 10.3138 13.4215C10.2166 13.4565 10.1124 13.474 10.0013 13.474Z"
        fill="white"
      />
    </g>
  </svg>
);

export default DownArrow;