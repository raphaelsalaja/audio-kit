import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket2({
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
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 9.625C11.6642 9.625 12 9.28921 12 8.875C12 8.46079 11.6642 8.125 11.25 8.125C10.8358 8.125 10.5 8.46079 10.5 8.875C10.5 9.28921 10.8358 9.625 11.25 9.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 7C11.6642 7 12 6.66421 12 6.25C12 5.83579 11.6642 5.5 11.25 5.5C10.8358 5.5 10.5 5.83579 10.5 6.25C10.5 6.66421 10.8358 7 11.25 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 12.5C11.6642 12.5 12 12.1642 12 11.75C12 11.3358 11.6642 11 11.25 11C10.8358 11 10.5 11.3358 10.5 11.75C10.5 12.1642 10.8358 12.5 11.25 12.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Ticket2;
