import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VideoOff({
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
          d="M8.34472 14.25H10.25C11.3546 14.25 12.25 13.3546 12.25 12.25V10.016C12.25 9.72838 12.0446 9.48174 11.7617 9.42969L7.4585 13.7235L8.34472 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 3.75C11.3546 3.75 12.25 4.64543 12.25 5.75L3.75 14.25C2.64543 14.25 1.75 13.3546 1.75 12.25V5.75C1.75 4.64543 2.64543 3.75 3.75 3.75H10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75104 14.25C2.64604 14.25 1.75104 13.355 1.75104 12.25V5.75C1.75104 4.645 2.64604 3.75 3.75104 3.75H10.251C11.356 3.75 12.251 4.645 12.251 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.51 5.65701C16.843 5.47401 17.251 5.71501 17.251 6.09501V11.904C17.251 12.284 16.843 12.525 16.51 12.342L12.251 10V12.25C12.251 13.355 11.356 14.25 10.251 14.25H7.99316"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.00053 7.99899C5.55223 7.99899 6.00003 7.5512 6.00003 6.9995C6.00003 6.4478 5.55223 6 5.00053 6C4.44883 6 4.00104 6.4478 4.00104 6.9995C4.00104 7.5512 4.44883 7.99899 5.00053 7.99899Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.00104 16L16.001 2"
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

export default VideoOff;
