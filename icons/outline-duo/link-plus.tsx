import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LinkPlus({
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
          d="M14.19 10.1418L12.0306 7.98241C10.6494 6.60126 8.41014 6.60126 7.02899 7.98241C5.64784 9.36356 5.64784 11.6029 7.02899 12.984L9.18841 15.1434C10.5696 16.5246 12.8088 16.5246 14.19 15.1434C15.5712 13.7623 15.5712 11.523 14.19 10.1418Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.251 1.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.751 3.75H11.751"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.86906 7.3934C7.56646 7.5539 7.28236 7.7617 7.02796 8.017C5.64696 9.398 5.63696 11.646 7.01796 13.027L9.19296 15.202C10.574 16.583 12.812 16.583 14.193 15.202C15.574 13.821 15.584 11.573 14.203 10.192L13.4406 9.4296"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.13291 11.6066C9.43551 11.4461 9.71961 11.2383 9.97401 10.983C11.355 9.60199 11.365 7.35399 9.98401 5.97299L7.80901 3.79799C6.42801 2.41699 4.19001 2.41699 2.80901 3.79799C1.42801 5.17899 1.41801 7.42699 2.79901 8.80799L3.56141 9.57039"
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

export default LinkPlus;
