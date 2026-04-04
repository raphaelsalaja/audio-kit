import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Socks({
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
          d="M5.75001 8.507V4.75H11.75V7.69588C11.7136 7.69463 11.6771 7.694 11.6404 7.694C9.906 7.694 8.5 9.1 8.5 10.8344C8.5 11.7698 8.90901 12.6097 9.55795 13.1851L7.37201 15.371C6.16201 16.58 4.17701 16.541 3.01801 15.254C1.93101 14.047 2.10001 12.157 3.24901 11.008L5.75001 8.507Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 4.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 7.74301C9.955 7.74301 8.5 9.19801 8.5 10.993C8.5 11.89 8.864 12.703 9.452 13.291"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.057 16.221C10.719 16.153 11.364 15.879 11.871 15.371L15.664 11.578C16.039 11.203 16.25 10.694 16.25 10.164V3.75C16.25 3.198 15.802 2.75 15.25 2.75H14.087"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 10.164V2.75C11.75 2.198 11.302 1.75 10.75 1.75H6.75001C6.19801 1.75 5.75001 2.198 5.75001 2.75V8.507L3.24901 11.008C2.10001 12.157 1.93101 14.047 3.01801 15.254C4.17701 16.541 6.16201 16.58 7.37201 15.371L11.165 11.578C11.54 11.203 11.751 10.694 11.751 10.164H11.75Z"
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

export default Socks;
