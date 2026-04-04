import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserPlus({
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
          d="M5.1369 15.1362C5.61062 13.4484 7.16076 12.2108 8.99996 12.2108C10.8392 12.2108 12.3893 13.4484 12.863 15.1362C11.7447 15.8417 10.42 16.25 8.99996 16.25C7.57993 16.25 6.25525 15.8417 5.1369 15.1362Z"
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
          d="M14.75 1.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.9619 1.82178C9.6465 1.77978 9.3271 1.75049 9 1.75049C4.996 1.75049 1.75 4.99659 1.75 9.00049C1.75 13.0044 4.996 16.2505 9 16.2505C13.004 16.2505 16.25 13.0044 16.25 9.00049C16.25 8.94829 16.2458 8.89699 16.2448 8.84499"
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

export default CircleUserPlus;
