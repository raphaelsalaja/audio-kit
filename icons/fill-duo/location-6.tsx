import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location6({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M2.92497 11.3977C3.27121 10.5524 4.09322 10 5.00701 10H12.993C13.8877 10 14.697 10.5299 15.0541 11.3482C15.07 11.3845 15.0847 11.4213 15.0997 11.458L16.0981 13.8979C16.7041 15.3784 15.615 17 14.016 17H3.98403C2.38503 17 1.29594 15.3785 1.90189 13.898L2.92497 11.3977Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 6.5C9.41421 6.5 9.75 6.83579 9.75 7.25V13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25V7.25C8.25 6.83579 8.58579 6.5 9 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 5C5 2.79079 6.79079 1 9 1C11.2092 1 13 2.79079 13 5C13 7.20921 11.2092 9 9 9C6.79079 9 5 7.20921 5 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Location6;
