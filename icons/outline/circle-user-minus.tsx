import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserMinus({
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
          d="M9 9.75049C10.1046 9.75049 11 8.85549 11 7.75049C11 6.64549 10.1046 5.75049 9 5.75049C7.8954 5.75049 7 6.64549 7 7.75049C7 8.85549 7.8954 9.75049 9 9.75049Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.15399 15.1475C5.63299 13.4745 7.17299 12.2505 8.99999 12.2505C10.827 12.2505 12.367 13.4745 12.846 15.1475"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.9691 1.82281C9.6515 1.78011 9.3298 1.75049 9 1.75049C4.996 1.75049 1.75 4.99659 1.75 9.00049C1.75 13.0044 4.996 16.2505 9 16.2505C13.004 16.2505 16.25 13.0044 16.25 9.00049C16.25 8.21439 16.1193 7.45949 15.8877 6.75049"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.75049H12.25"
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

export default CircleUserMinus;
