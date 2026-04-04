import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneTakeOff({
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
          d="M1.25 9.75L2.478 8.931C2.811 8.709 3.245 8.707 3.58 8.926L5 9.854L14.489 5.882C15.32 5.521 16.286 5.913 16.629 6.752C16.963 7.569 16.58 8.502 15.769 8.849L7.865 12.099C7.624 12.198 7.365 12.249 7.104 12.249H4.637C4.117 12.249 3.618 12.047 3.244 11.685L1.249 9.749L1.25 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 15.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 9.75L2.478 8.931C2.811 8.709 3.245 8.707 3.58 8.926L5 9.854L14.489 5.882C15.32 5.521 16.286 5.913 16.629 6.752C16.963 7.569 16.58 8.502 15.769 8.849L7.865 12.099C7.624 12.198 7.365 12.249 7.104 12.249H4.637C4.117 12.249 3.618 12.047 3.244 11.685L1.249 9.749L1.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 8.607L3 5L4.476 4.146C4.768 3.977 5.125 3.967 5.426 4.118L11.458 7.151"
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

export default PlaneTakeOff;
