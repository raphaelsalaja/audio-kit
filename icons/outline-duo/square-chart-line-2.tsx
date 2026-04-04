import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLine2({
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
          d="M4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.938L11.459 10.747C11.264 10.943 10.948 10.944 10.752 10.749L7.25601 7.27299C7.06001 7.078 6.74401 7.07899 6.54901 7.27499L2.75 11.095V4.75C2.75 3.645 3.645 2.75 4.75 2.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 6.91701L11.437 10.73C11.242 10.925 10.925 10.925 10.73 10.73L7.26999 7.27C7.07499 7.075 6.75799 7.075 6.56299 7.27L2.75 11.083"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.1592V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.91701"
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

export default SquareChartLine2;
