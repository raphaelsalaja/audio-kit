import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopy({
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
          d="M10.75 16.25C13.7876 16.25 16.25 13.788 16.25 10.75C16.25 7.712 13.7876 5.25 10.75 5.25C7.7124 5.25 5.25 7.712 5.25 10.75C5.25 13.788 7.7124 16.25 10.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.6639 2.32739C8.933 1.96799 8.1198 1.75 7.25 1.75C4.212 1.75 1.75 4.2119 1.75 7.25C1.75 8.1191 1.9681 8.9321 2.3275 9.6633"
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

export default CircleCopy;
