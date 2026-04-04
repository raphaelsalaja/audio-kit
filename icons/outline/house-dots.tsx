import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDots({
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
          d="M13 16C12.449 16 12 15.552 12 15C12 14.448 12.449 14 13 14C13.551 14 14 14.448 14 15C14 15.552 13.551 16 13 16Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10 16C9.449 16 9 15.552 9 15C9 14.448 9.449 14 10 14C10.551 14 11 14.448 11 15C11 15.552 10.551 16 10 16Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.25 11.8486V6.7461C15.25 6.4341 15.104 6.13889 14.855 5.94999L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.94999C2.896 6.13899 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H7.0015"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 16C15.449 16 15 15.552 15 15C15 14.448 15.449 14 16 14C16.551 14 17 14.448 17 15C17 15.552 16.551 16 16 16Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseDots;
