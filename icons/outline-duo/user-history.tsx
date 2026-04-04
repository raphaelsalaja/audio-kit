import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserHistory({
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
          d="M5.13693 15.1362C5.61065 13.4484 7.16079 12.2108 8.99999 12.2108C10.8392 12.2108 12.3893 13.4484 12.863 15.1362C11.7447 15.8417 10.42 16.25 8.99999 16.25C7.57996 16.25 6.25528 15.8417 5.13693 15.1362Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.15399 15.147C5.63299 13.474 7.17299 12.25 8.99999 12.25C10.827 12.25 12.367 13.474 12.846 15.147"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.25L2.29 6.25C3.373 3.61 5.969 1.75 9 1.75C13.004 1.75 16.25 5 16.25 9C16.25 13 13.004 16.25 9 16.25C5.0635 16.25 1.8596 13.1086 1.7528 9.2016"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserHistory;
