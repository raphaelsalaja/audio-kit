import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ship({
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
          d="M4.25 5.25V9.279L9.01229 8.04633L13.75 9.279V5.25C13.75 4.698 13.302 4.25 12.75 4.25H5.25C4.698 4.25 4.25 4.698 4.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 15.75C3.151 15.757 4.481 15.137 5.375 14.058C7.053 16.06 10.036 16.323 12.038 14.645C12.25 14.467 12.447 14.271 12.625 14.058C13.519 15.136 14.849 15.757 16.25 15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 9.279V5.25C4.25 4.698 4.698 4.25 5.25 4.25H12.75C13.302 4.25 13.75 4.698 13.75 5.25V9.279"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 1.75H7.75V4.25H10.25V1.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.75V12.715"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.954 12.1624L15.249 11.1299C15.391 10.6319 15.129 10.1079 14.646 9.9219L9 7.75L3.354 9.9219C2.87 10.1079 2.60901 10.6319 2.75101 11.1299L3.04599 12.1624C3.05159 12.1558 3.05889 12.1512 3.06439 12.1446"
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

export default Ship;
