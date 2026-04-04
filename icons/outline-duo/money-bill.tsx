import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBill({
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
          d="M3.75 3.75H14.25C15.3546 3.75 16.25 4.64543 16.25 5.75V12.25C16.25 13.3546 15.3546 14.25 14.25 14.25H3.75C2.64543 14.25 1.75 13.3546 1.75 12.25V5.75C1.75 4.64543 2.64543 3.75 3.75 3.75ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 9.75C4.66421 9.75 5 9.41421 5 9C5 8.58579 4.66421 8.25 4.25 8.25C3.83579 8.25 3.5 8.58579 3.5 9C3.5 9.41421 3.83579 9.75 4.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 9.75C14.1642 9.75 14.5 9.41421 14.5 9C14.5 8.58579 14.1642 8.25 13.75 8.25C13.3358 8.25 13 8.58579 13 9C13 9.41421 13.3358 9.75 13.75 9.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MoneyBill;
