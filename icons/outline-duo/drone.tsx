import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Drone({
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
          d="M11.75 12.25L12 9.25H14C14.966 9.25 15.75 8.467 15.75 7.5C15.75 6.533 14.966 5.75 14 5.75H4C3.034 5.75 2.25 6.533 2.25 7.5C2.25 8.467 3.034 9.25 4 9.25H6L6.25 12.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 1.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 2.75H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 1.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 2.75H16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.25L12 9.25H14C14.966 9.25 15.75 8.467 15.75 7.5C15.75 6.533 14.966 5.75 14 5.75H4C3.034 5.75 2.25 6.533 2.25 7.5C2.25 8.467 3.034 9.25 4 9.25H6L6.25 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.25C15.75 14.041 13.959 12.25 11.75 12.25H6.25C4.041 12.25 2.25 14.041 2.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Drone;
