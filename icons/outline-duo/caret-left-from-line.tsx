import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretLeftFromLine({
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
          d="M3.33199 9.845L10.715 14.527C11.381 14.949 12.251 14.471 12.251 13.682V4.318C12.251 3.53 11.381 3.051 10.715 3.473L3.33199 8.155C2.71299 8.548 2.71299 9.451 3.33199 9.844V9.845Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.33199 9.845L10.715 14.527C11.381 14.949 12.251 14.471 12.251 13.682V4.318C12.251 3.53 11.381 3.051 10.715 3.473L3.33199 8.155C2.71299 8.548 2.71299 9.451 3.33199 9.844V9.845Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 14.75V3.25"
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

export default CaretLeftFromLine;
