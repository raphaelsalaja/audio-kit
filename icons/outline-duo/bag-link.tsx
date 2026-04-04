import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagLink({
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
          d="M12.6671 4.75C13.704 4.75004 14.5703 5.54318 14.6593 6.57715L14.8946 10C13.5964 10 12.2983 10 11.0001 10C8.79094 10 7.00008 11.7909 7.00008 14V15C7.00008 15.3591 7.04805 15.707 7.1368 16.0381L4.68074 16.25C3.50792 16.2499 2.58667 15.245 2.68855 14.0771L3.3409 6.57715C3.4309 5.54315 4.29706 4.75 5.33406 4.75H12.6671Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 16.75H11C10.0335 16.75 9.25 15.9665 9.25 15V14C9.25 13.0335 10.0335 12.25 11 12.25H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 16.75H15C15.9665 16.75 16.75 15.9665 16.75 15V14C16.75 13.0335 15.9665 12.25 15 12.25H14.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8913 9.24999L14.659 6.57589C14.569 5.54289 13.704 4.74899 12.667 4.74899H5.334C4.297 4.74899 3.43099 5.54199 3.34199 6.57589L2.69 14.0759C2.588 15.2439 3.51 16.249 4.682 16.249H6.4378"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 14.5H14.25"
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

export default BagLink;
