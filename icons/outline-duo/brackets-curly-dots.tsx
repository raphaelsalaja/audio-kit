import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsCurlyDots({
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
          d="M9 13C9.41421 13 9.75 12.6642 9.75 12.25C9.75 11.8358 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.8358 8.25 12.25C8.25 12.6642 8.58579 13 9 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 13C12.1642 13 12.5 12.6642 12.5 12.25C12.5 11.8358 12.1642 11.5 11.75 11.5C11.3358 11.5 11 11.8358 11 12.25C11 12.6642 11.3358 13 11.75 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 13C6.66421 13 7 12.6642 7 12.25C7 11.8358 6.66421 11.5 6.25 11.5C5.83579 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.83579 13 6.25 13Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 15.25H5.25C4.145 15.25 3.25 14.355 3.25 13.25V10.625C3.25 9.728 2.522 9 1.625 9C2.522 9 3.25 8.272 3.25 7.375V4.75C3.25 3.645 4.145 2.75 5.25 2.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 15.25H12.75C13.855 15.25 14.75 14.355 14.75 13.25V10.625C14.75 9.728 15.478 9 16.375 9C15.478 9 14.75 8.272 14.75 7.375V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75"
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

export default BracketsCurlyDots;
