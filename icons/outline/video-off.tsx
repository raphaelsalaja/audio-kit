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
          d="M3.75098 14.25C2.64598 14.25 1.75098 13.355 1.75098 12.25V5.75C1.75098 4.645 2.64598 3.75 3.75098 3.75H10.251C11.356 3.75 12.251 4.645 12.251 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.51 5.657C16.843 5.474 17.251 5.715 17.251 6.095V11.904C17.251 12.284 16.843 12.525 16.51 12.342L12.251 10V12.25C12.251 13.355 11.356 14.25 10.251 14.25H7.99316"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.00047 7.99899C5.55217 7.99899 5.99997 7.5512 5.99997 6.9995C5.99997 6.4478 5.55217 6 5.00047 6C4.44877 6 4.00098 6.4478 4.00098 6.9995C4.00098 7.5512 4.44877 7.99899 5.00047 7.99899Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.00098 16L16.001 2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default VideoOff;
