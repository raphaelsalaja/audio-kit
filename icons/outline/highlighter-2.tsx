import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Highlighter2({
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
          d="M7.35303 2.991C7.53203 3.634 7.69703 4.528 7.64003 5.591C7.61003 6.147 7.52503 6.643 7.42203 7.067C7.34703 7.372 7.49803 7.686 7.78703 7.809L9.17503 8.402L10.563 8.995C10.852 9.118 11.183 9.011 11.352 8.746C11.586 8.378 11.886 7.974 12.267 7.568C12.992 6.796 13.748 6.297 14.335 5.982"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.00101 1.24701L7.36001 2.35601C7.16701 2.68601 7.30801 3.11101 7.66001 3.26101L10.798 4.60101L13.936 5.94101C14.288 6.09101 14.691 5.89901 14.797 5.53201L15.167 4.23601"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.00098 10.75H3.25098C2.42298 10.75 1.75098 11.422 1.75098 12.25C1.75098 13.078 2.42298 13.75 3.25098 13.75H14.751C15.579 13.75 16.251 14.422 16.251 15.25C16.251 16.078 15.579 16.75 14.751 16.75H12.751"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.253 8.86101L9.495 10.75H6.789L8.028 7.91101L10.253 8.86101Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Highlighter2;
