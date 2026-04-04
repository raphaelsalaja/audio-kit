import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HotDrink({
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
          d="M3.75 6.75H14.25V10.25C14.25 13.01 12.01 15.25 9.25 15.25H8.75C5.99 15.25 3.75 13.01 3.75 10.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 0.75C8.728 1.381 8.584 2.133 8.078 2.75C7.731 3.174 7.442 3.254 7.109 3.672C6.987 3.825 6.87 4.01 6.771 4.236"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 2.75C11.485 3.129 11.389 3.58 11.052 3.95C10.925 4.09 10.81 4.167 10.695 4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.75H14.25V10.25C14.25 13.01 12.01 15.25 9.25 15.25H8.75C5.99 15.25 3.75 13.01 3.75 10.25V6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 15.25H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 6.75H15.25C16.355 6.75 17.25 7.641 17.25 8.75C17.25 9.859 16.355 10.75 15.25 10.75H14.25"
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

export default HotDrink;
