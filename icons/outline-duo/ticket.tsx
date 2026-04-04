import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket({
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
          d="M16.25 7.25C15.284 7.25 14.5 8.033 14.5 9C14.5 9.967 15.284 10.75 16.25 10.75V12.25C16.25 13.354 15.355 14.25 14.25 14.25H3.75C2.645 14.25 1.75 13.354 1.75 12.25V10.75C2.716 10.75 3.5 9.967 3.5 9C3.5 8.033 2.716 7.25 1.75 7.25V5.75C1.75 4.646 2.645 3.75 3.75 3.75H14.25C15.355 3.75 16.25 4.646 16.25 5.75V7.25ZM6.25 7.25H11.75V10.75H6.25V7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.75 7.25H6.25V10.75H11.75V7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 9C14.5 8.033 15.284 7.25 16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V7.25C2.716 7.25 3.5 8.033 3.5 9C3.5 9.967 2.716 10.75 1.75 10.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H14.25C15.355 14.25 16.25 13.354 16.25 12.25V10.75C15.284 10.75 14.5 9.967 14.5 9Z"
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

export default Ticket;
