import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoNotWash({
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
          d="M5.875 6.75C6.8874 7.9576 8.45 8.43142 9.88846 8.11152L9.79099 8.209L3.87085 14.1291C3.29062 13.8924 2.862 13.3524 2.79145 12.695L2.31 8.20905L2.77023 8.209C3.9698 8.20602 5.10732 7.67281 5.875 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.1915 12.7269L15.7115 8.20906L15.2099 8.209C14.5761 8.20585 13.9604 8.05363 13.4081 7.7739L7.46271 13.7193L7.90679 14.2633L13.4494 14.2768C14.3399 14.2786 15.0897 13.6115 15.1915 12.7269Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.1083 8.02926C14.4694 8.16781 14.8832 8.21 15.25 8.208"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.209C3.957 8.212 5.103 7.678 5.875 6.75C6.87 7.937 8.39599 8.414 9.81299 8.127"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.935 14.065C3.323 13.781 2.87401 13.195 2.79001 12.486L1.75 3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.9475 6.29471L15.21 12.487C15.09 13.493 14.237 14.251 13.224 14.251H7.99121"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default DoNotWash;
