import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClockCoins({
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
          d="M15 11L9 11C8.4477 11 8 11.448 8 12V13C8 13.552 8.4477 14 9 14H15C15.5523 14 16 13.552 16 13V12C16 11.448 15.5523 11 15 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 8H10C9.4477 8 9 8.448 9 9V10C9 10.552 9.4477 11 10 11H16C16.5523 11 17 10.552 17 10V9C17 8.448 16.5523 8 16 8Z"
          fill={fill}
        />
        <path
          d="M7 1C3.68634 1 1 3.68634 1 7C1 10.1453 3.42027 12.7254 6.5 12.9795V12C6.5 11.1824 6.89273 10.4561 7.5 9.99989V9C7.5 7.61987 8.61898 6.5 10 6.5H12.9795C12.7254 3.42027 10.1453 1 7 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 14H10C9.4477 14 9 14.448 9 15V16C9 16.552 9.4477 17 10 17H16C16.5523 17 17 16.552 17 16V15C17 14.448 16.5523 14 16 14Z"
          fill={fill}
        />
        <path
          d="M6.99999 3.25C7.4142 3.25 7.74999 3.58579 7.74999 4V7C7.74999 7.26345 7.61177 7.50758 7.38586 7.64312L4.88586 9.14312C4.53068 9.35623 4.06998 9.24106 3.85687 8.88587C3.64376 8.53069 3.75893 8.06999 4.11412 7.85688L6.24999 6.57536V4C6.24999 3.58579 6.58578 3.25 6.99999 3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClockCoins;
