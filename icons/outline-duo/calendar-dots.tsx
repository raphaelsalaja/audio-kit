import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDots({
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
          d="M2.25 4.75C2.25 3.64543 3.14543 2.75 4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V6.25H2.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 2.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 6.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 14C12.449 14 12 13.552 12 13C12 12.448 12.449 12 13 12C13.551 12 14 12.448 14 13C14 13.552 13.551 14 13 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 14C9.449 14 9 13.552 9 13C9 12.448 9.449 12 10 12C10.551 12 11 12.448 11 13C11 13.552 10.551 14 10 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 14C15.449 14 15 13.552 15 13C15 12.448 15.449 12 16 12C16.551 12 17 12.448 17 13C17 13.552 16.551 14 16 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 9.7827V4.75C15.75 3.646 14.855 2.75 13.75 2.75H4.25C3.145 2.75 2.25 3.646 2.25 4.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H7.6642"
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

export default CalendarDots;
