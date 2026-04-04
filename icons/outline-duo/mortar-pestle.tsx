import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MortarPestle({
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
          d="M2.75 7.75V8C2.75 10.432 4.142 12.535 6.171 13.568L5.906 14.629C5.827 14.945 6.066 15.25 6.391 15.25H11.61C11.935 15.25 12.174 14.944 12.095 14.629L11.83 13.568C13.858 12.535 15.251 10.432 15.251 8V7.75H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.281 7.74999L13.984 3.98999C14.44 3.35599 14.296 2.47199 13.662 2.01599C13.028 1.55999 12.144 1.70399 11.688 2.33799L7.787 7.74999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 7.75V8C2.75 10.432 4.142 12.535 6.171 13.568L5.906 14.629C5.827 14.945 6.066 15.25 6.391 15.25H11.61C11.935 15.25 12.174 14.944 12.095 14.629L11.83 13.568C13.858 12.535 15.251 10.432 15.251 8V7.75H2.75Z"
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

export default MortarPestle;
