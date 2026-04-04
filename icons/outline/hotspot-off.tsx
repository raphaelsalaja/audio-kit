import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HotspotOff({
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
          d="M15.7897 6.45258C16.0871 7.24508 16.25 8.1035 16.25 9C16.25 11.593 14.889 13.867 12.843 15.149"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.873 14.126C2.561 12.814 1.75 11.002 1.75 9C1.75 4.996 4.996 1.75 9 1.75C11.002 1.75 12.815 2.56099 14.127 3.87299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 9C13.25 10.52 12.452 11.853 11.253 12.604"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.995 12.005C5.226 11.236 4.75 10.173 4.75 9C4.75 6.653 6.653 4.75 9 4.75C10.174 4.75 11.236 5.226 12.005 5.995"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.116 9.88397C7.89 9.65797 7.75 9.345 7.75 9C7.75 8.31 8.31 7.75 9 7.75C9.345 7.75 9.658 7.89003 9.884 8.11603"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default HotspotOff;
