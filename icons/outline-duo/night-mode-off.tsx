import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NightModeOff({
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
          d="M10.173 11.0076C11.6272 11.7141 13.3279 12.1846 15.7061 11.7598C14.6204 14.3949 12.0269 16.25 9 16.25C7.81794 16.25 6.90081 15.7675 5.91491 15.2657L10.173 11.0076Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.39844 2.23047C5.58441 4.37453 6.02415 7.7771 8.20801 9.9375L3.90625 14.1582C2.57527 12.8437 1.75 11.0184 1.75 9C1.75 5.91291 3.67958 3.27609 6.39844 2.23047Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.1042 5.25H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.4922 8.75H16.2453"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.1235 9.8765C6.8115 8.5645 6 6.752 6 4.75C6 3.857 6.169 3.005 6.465 2.215"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.785 11.535C14.995 11.83 14.143 12 13.25 12C12.3535 12 11.4951 11.8373 10.7025 11.5398"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.4526 15.7898C7.2451 16.0873 8.1036 16.25 9 16.25C13.0041 16.25 16.25 13.004 16.25 9C16.25 8.1045 16.0876 7.2469 15.7907 6.455"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.1265 3.8735C12.8145 2.5615 11.002 1.75 9 1.75C4.9959 1.75 1.75 4.996 1.75 9C1.75 11.002 2.5615 12.8145 3.8735 14.1265"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default NightModeOff;
