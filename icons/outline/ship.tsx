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
          d="M10.25 1.75H7.75V4.25H10.25V1.75Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 15.75C3.151 15.757 4.481 15.137 5.375 14.058C7.053 16.06 10.036 16.323 12.038 14.645C12.25 14.467 12.447 14.271 12.625 14.058C13.519 15.136 14.849 15.757 16.25 15.75"
          fill="none"
          stroke={secondaryfill}
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
          d="M9 7.75V12.715"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.954 12.1624L15.249 11.1299C15.391 10.6319 15.129 10.1079 14.646 9.9219L8.99997 7.75L3.35397 9.9219C2.86997 10.1079 2.60898 10.6319 2.75098 11.1299L3.04596 12.1624C3.05156 12.1558 3.05886 12.1512 3.06436 12.1446"
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
