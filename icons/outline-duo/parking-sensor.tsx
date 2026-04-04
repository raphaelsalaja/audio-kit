import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParkingSensor({
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
          d="M2.63201 3.25H1.25001H0.503906V12.75H3.20297L4.30862 10.7387H6.14168L7.25001 12.75H10.25V9.4797C10.25 8.7646 9.74531 8.149 9.04421 8.0088L5.25001 7.25L3.52641 3.8028C3.35701 3.464 3.01081 3.25 2.63201 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.25 12.75H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 3.25H2.632C3.0108 3.25 3.357 3.464 3.5264 3.8028L5.25 7.25L9.0442 8.0088C9.7453 8.149 10.25 8.7646 10.25 9.4797V12.75H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 14.75C6.354 14.75 7.25 13.8546 7.25 12.75C7.25 11.6454 6.354 10.75 5.25 10.75C4.146 10.75 3.25 11.6454 3.25 12.75C3.25 13.8546 4.146 14.75 5.25 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.311 9.621C13.897 10.207 13.897 11.157 13.311 11.742"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.432 7.5C17.189 9.257 17.189 12.107 15.432 13.864"
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

export default ParkingSensor;
