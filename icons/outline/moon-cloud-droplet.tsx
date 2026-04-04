import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonCloudDroplet({
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
          d="M14.341 7.172C14.724 6.703 15.002 6.145 15.142 5.534C14.854 5.6 14.558 5.642 14.25 5.642C12.041 5.642 10.25 3.851 10.25 1.642C10.25 1.334 10.292 1.038 10.358 0.75C8.58 1.156 7.25 2.741 7.25 4.642C7.25 5.47 7.50201 6.24 7.93301 6.878"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.585 10.499C11.824 10.086 12.179 9.74701 12.605 9.52701"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7571 14.2493C15.1347 14.2454 16.25 13.1285 16.25 11.75C16.25 10.3689 15.131 9.25 13.75 9.25C13.337 9.25 12.953 9.3599 12.61 9.5371C12.182 7.936 10.736 6.75 9 6.75C7.264 6.75 5.81701 7.9351 5.39001 9.5371C5.04701 9.3599 4.663 9.25 4.25 9.25C2.869 9.25 1.75 10.3689 1.75 11.75C1.75 13.1284 2.86539 14.2454 4.24289 14.2493"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 17.25C10.036 17.25 10.875 16.398 10.875 15.347C10.875 13.902 9.824 13.284 9 12.25C8.176 13.284 7.125 13.902 7.125 15.347C7.125 16.398 7.964 17.25 9 17.25Z"
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

export default MoonCloudDroplet;
