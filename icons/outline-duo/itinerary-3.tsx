import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary3({
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
          d="M5.75 11.75H3.75C3.19772 11.75 2.75 12.1977 2.75 12.75V14.75C2.75 15.3023 3.19772 15.75 3.75 15.75H5.75C6.30228 15.75 6.75 15.3023 6.75 14.75V12.75C6.75 12.1977 6.30228 11.75 5.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 6.25C5.85457 6.25 6.75 5.35457 6.75 4.25C6.75 3.14543 5.85457 2.25 4.75 2.25C3.64543 2.25 2.75 3.14543 2.75 4.25C2.75 5.35457 3.64543 6.25 4.75 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 11.75H3.75C3.19772 11.75 2.75 12.1977 2.75 12.75V14.75C2.75 15.3023 3.19772 15.75 3.75 15.75H5.75C6.30228 15.75 6.75 15.3023 6.75 14.75V12.75C6.75 12.1977 6.30228 11.75 5.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 6.25C5.85457 6.25 6.75 5.35457 6.75 4.25C6.75 3.14543 5.85457 2.25 4.75 2.25C3.64543 2.25 2.75 3.14543 2.75 4.25C2.75 5.35457 3.64543 6.25 4.75 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 4.25H13.25C14.355 4.25 15.25 5.145 15.25 6.25V11.75C15.25 12.855 14.355 13.75 13.25 13.75H9.25"
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

export default Itinerary3;
