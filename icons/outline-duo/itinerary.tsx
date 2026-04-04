import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary({
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
          d="M5.75 2.25H3.75C3.19772 2.25 2.75 2.69772 2.75 3.25V5.25C2.75 5.80228 3.19772 6.25 3.75 6.25H5.75C6.30228 6.25 6.75 5.80228 6.75 5.25V3.25C6.75 2.69772 6.30228 2.25 5.75 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 11.75H12.25C11.6977 11.75 11.25 12.1977 11.25 12.75V14.75C11.25 15.3023 11.6977 15.75 12.25 15.75H14.25C14.8023 15.75 15.25 15.3023 15.25 14.75V12.75C15.25 12.1977 14.8023 11.75 14.25 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.25H3.75C3.19772 2.25 2.75 2.69772 2.75 3.25V5.25C2.75 5.80228 3.19772 6.25 3.75 6.25H5.75C6.30228 6.25 6.75 5.80228 6.75 5.25V3.25C6.75 2.69772 6.30228 2.25 5.75 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.75H12.25C11.6977 11.75 11.25 12.1977 11.25 12.75V14.75C11.25 15.3023 11.6977 15.75 12.25 15.75H14.25C14.8023 15.75 15.25 15.3023 15.25 14.75V12.75C15.25 12.1977 14.8023 11.75 14.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 4.25H12.875C14.187 4.25 15.25 5.313 15.25 6.625C15.25 7.937 14.187 9 12.875 9H5.125C3.813 9 2.75 10.063 2.75 11.375C2.75 12.687 3.813 13.75 5.125 13.75H8.5"
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

export default Itinerary;
