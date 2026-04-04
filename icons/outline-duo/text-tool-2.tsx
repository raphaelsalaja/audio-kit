import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextTool2({
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
          d="M2 5.25C2 4.14543 2.89543 3.25 4 3.25H14C15.1046 3.25 16 4.14543 16 5.25V12.75C16 13.8546 15.1046 14.75 14 14.75H4C2.89543 14.75 2 13.8546 2 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 12V12.75C16.25 13.855 15.355 14.75 14.25 14.75H3.75C2.645 14.75 1.75 13.855 1.75 12.75V12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 6V5.25C1.75 4.145 2.645 3.25 3.75 3.25H14.25C15.355 3.25 16.25 4.145 16.25 5.25V6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.798 12.25L9.068 5.75H8.932L6.202 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.832 10.75H11.168"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9.75C2.16421 9.75 2.5 9.41421 2.5 9C2.5 8.58579 2.16421 8.25 1.75 8.25C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 9.75C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25C15.8358 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.8358 9.75 16.25 9.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default TextTool2;
