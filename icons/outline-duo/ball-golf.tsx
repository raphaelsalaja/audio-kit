import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallGolf({
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
          d="M9 12.25C11.8995 12.25 14.25 9.8995 14.25 7C14.25 4.10051 11.8995 1.75 9 1.75C6.10051 1.75 3.75 4.10051 3.75 7C3.75 9.8995 6.10051 12.25 9 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 12.25C11.8995 12.25 14.25 9.8995 14.25 7C14.25 4.10051 11.8995 1.75 9 1.75C6.10051 1.75 3.75 4.10051 3.75 7C3.75 9.8995 6.10051 12.25 9 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 17V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5C9.41421 5 9.75 4.66421 9.75 4.25C9.75 3.83579 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.83579 8.25 4.25C8.25 4.66421 8.58579 5 9 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.25 7C7.66421 7 8 6.66421 8 6.25C8 5.83579 7.66421 5.5 7.25 5.5C6.83579 5.5 6.5 5.83579 6.5 6.25C6.5 6.66421 6.83579 7 7.25 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.75 7C11.1642 7 11.5 6.66421 11.5 6.25C11.5 5.83579 11.1642 5.5 10.75 5.5C10.3358 5.5 10 5.83579 10 6.25C10 6.66421 10.3358 7 10.75 7Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BallGolf;
