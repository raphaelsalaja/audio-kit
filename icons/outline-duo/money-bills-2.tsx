import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBills2({
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
          d="M3.75 4.75H14.25C15.3546 4.75 16.25 5.64543 16.25 6.75V13.25C16.25 14.3546 15.3546 15.25 14.25 15.25H3.75C2.64543 15.25 1.75 14.3546 1.75 13.25V6.75C1.75 5.64543 2.64543 4.75 3.75 4.75ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 12C10.1046 12 11 11.1046 11 10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 10.75C4.66421 10.75 5 10.4142 5 10C5 9.58579 4.66421 9.25 4.25 9.25C3.83579 9.25 3.5 9.58579 3.5 10C3.5 10.4142 3.83579 10.75 4.25 10.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 10.75C14.1642 10.75 14.5 10.4142 14.5 10C14.5 9.58579 14.1642 9.25 13.75 9.25C13.3358 9.25 13 9.58579 13 10C13 10.4142 13.3358 10.75 13.75 10.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.75 1.75H14.25"
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

export default MoneyBills2;
