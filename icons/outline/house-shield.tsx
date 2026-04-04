import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseShield({
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
          d="M14.5 10.75L11.75 12V14.94C11.75 16.48 14.5 17.25 14.5 17.25V10.75Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.25 7.8564V6.74601C15.25 6.43401 15.104 6.13881 14.855 5.94991L9.605 1.95991C9.247 1.68791 8.752 1.68791 8.395 1.95991L3.145 5.94991C2.896 6.13891 2.75 6.43401 2.75 6.74601V14.2499C2.75 15.3539 3.645 16.2499 4.75 16.2499H8.9549"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 10.75L17.25 12V14.94C17.25 16.48 14.5 17.25 14.5 17.25C14.5 17.25 11.75 16.48 11.75 14.94V12L14.5 10.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseShield;
