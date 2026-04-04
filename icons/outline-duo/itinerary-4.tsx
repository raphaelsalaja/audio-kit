import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary4({
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
          d="M14.75 11.75H12.75C12.1977 11.75 11.75 12.1977 11.75 12.75V14.75C11.75 15.3023 12.1977 15.75 12.75 15.75H14.75C15.3023 15.75 15.75 15.3023 15.75 14.75V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 6.25C5.35457 6.25 6.25 5.35457 6.25 4.25C6.25 3.14543 5.35457 2.25 4.25 2.25C3.14543 2.25 2.25 3.14543 2.25 4.25C2.25 5.35457 3.14543 6.25 4.25 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 11.75H12.75C12.1977 11.75 11.75 12.1977 11.75 12.75V14.75C11.75 15.3023 12.1977 15.75 12.75 15.75H14.75C15.3023 15.75 15.75 15.3023 15.75 14.75V12.75C15.75 12.1977 15.3023 11.75 14.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6.25C5.35457 6.25 6.25 5.35457 6.25 4.25C6.25 3.14543 5.35457 2.25 4.25 2.25C3.14543 2.25 2.25 3.14543 2.25 4.25C2.25 5.35457 3.14543 6.25 4.25 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5 7.5L10.25 10.25"
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

export default Itinerary4;
