import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleWarning({
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
          d="M9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.431V9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.417C8.448 13.417 8 12.968 8 12.417C8 11.866 8.448 11.417 9 11.417C9.552 11.417 10 11.866 10 12.417C10 12.968 9.552 13.417 9 13.417Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleWarning;
