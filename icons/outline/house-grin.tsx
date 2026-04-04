import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseGrin({
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
          d="M3.145 5.94999L8.39499 1.96C8.75299 1.688 9.24801 1.688 9.60501 1.96L14.855 5.94999C15.104 6.13899 15.25 6.434 15.25 6.746V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.746C2.75 6.433 2.896 6.13899 3.145 5.94999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 11C7.052 11 7.5 10.5523 7.5 10C7.5 9.4477 7.052 9 6.5 9C5.948 9 5.5 9.4477 5.5 10C5.5 10.5523 5.948 11 6.5 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.5 11C12.052 11 12.5 10.5523 12.5 10C12.5 9.4477 12.052 9 11.5 9C10.948 9 10.5 9.4477 10.5 10C10.5 10.5523 10.948 11 11.5 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.83328 11.5H10.1666C10.4886 11.5 10.7499 11.7613 10.7499 12.0833C10.7499 13.0493 9.96588 13.8333 8.99988 13.8333C8.03388 13.8333 7.24988 13.0493 7.24988 12.0833C7.24988 11.7613 7.51128 11.5 7.83328 11.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseGrin;
