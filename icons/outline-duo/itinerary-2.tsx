import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary2({
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
          d="M4.75 6.25C5.85457 6.25 6.75 5.35457 6.75 4.25C6.75 3.14543 5.85457 2.25 4.75 2.25C3.64543 2.25 2.75 3.14543 2.75 4.25C2.75 5.35457 3.64543 6.25 4.75 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 15.75C14.3546 15.75 15.25 14.8546 15.25 13.75C15.25 12.6454 14.3546 11.75 13.25 11.75C12.1454 11.75 11.25 12.6454 11.25 13.75C11.25 14.8546 12.1454 15.75 13.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 4.25H12.875C14.187 4.25 15.25 5.313 15.25 6.625C15.25 7.937 14.187 9 12.875 9H5.125C3.813 9 2.75 10.063 2.75 11.375C2.75 12.687 3.813 13.75 5.125 13.75H8.5"
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
          d="M13.25 15.75C14.3546 15.75 15.25 14.8546 15.25 13.75C15.25 12.6454 14.3546 11.75 13.25 11.75C12.1454 11.75 11.25 12.6454 11.25 13.75C11.25 14.8546 12.1454 15.75 13.25 15.75Z"
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

export default Itinerary2;
