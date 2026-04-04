import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge4({
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
          d="M9 4.75C4.996 4.75 1.75 7.9961 1.75 12C1.75 12.084 1.76 12.167 1.763 12.25H7.27521C7.39761 11.4033 8.1196 10.75 9 10.75C9.8804 10.75 10.6024 11.4033 10.7248 12.25H16.237C16.24 12.167 16.25 12.084 16.25 12C16.25 7.9961 13.004 4.75 9 4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 14.25C9.966 14.25 10.75 13.466 10.75 12.5C10.75 11.534 9.966 10.75 9 10.75C8.034 10.75 7.25 11.534 7.25 12.5C7.25 13.466 8.034 14.25 9 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 12.25H16.237C16.24 12.167 16.25 12.084 16.25 12C16.25 7.996 13.004 4.75 9 4.75C4.996 4.75 1.75 7.996 1.75 12C1.75 12.084 1.76 12.167 1.763 12.25H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.11659 10.9908L6.55701 8.327"
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

export default Gauge4;
