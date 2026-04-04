import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice({
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
          d="M5 13.5C5.552 13.5 6 13.0523 6 12.5C6 11.9477 5.552 11.5 5 11.5C4.448 11.5 4 11.9477 4 12.5C4 13.0523 4.448 13.5 5 13.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.5 9C10.052 9 10.5 8.5523 10.5 8C10.5 7.4477 10.052 7 9.5 7C8.948 7 8.5 7.4477 8.5 8C8.5 8.5523 8.948 9 9.5 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.25 11.25C7.802 11.25 8.25 10.8023 8.25 10.25C8.25 9.6977 7.802 9.25 7.25 9.25C6.698 9.25 6.25 9.6977 6.25 10.25C6.25 10.8023 6.698 11.25 7.25 11.25Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.75 15.75H10.75C11.855 15.75 12.75 14.8546 12.75 13.75V6.75C12.75 5.6454 11.855 4.75 10.75 4.75H3.75C2.645 4.75 1.75 5.6454 1.75 6.75V13.75C1.75 14.8546 2.645 15.75 3.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.1549L16.228 4.57401C16.39 3.48101 15.636 2.46401 14.544 2.30201L7.62001 1.27201C6.78361 1.14741 5.99221 1.55961 5.59381 2.25001"
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

export default Dice;
