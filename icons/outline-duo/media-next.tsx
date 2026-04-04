import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaNext({
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
          d="M4.05 3.677L12.304 8.247C12.899 8.577 12.899 9.424 12.304 9.753L4.05 14.323C3.468 14.645 2.75 14.229 2.75 13.57V4.43C2.75 3.77 3.468 3.355 4.05 3.677Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.05 3.677L12.304 8.247C12.899 8.577 12.899 9.424 12.304 9.753L4.05 14.323C3.468 14.645 2.75 14.229 2.75 13.57V4.43C2.75 3.77 3.468 3.355 4.05 3.677Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 15.25V2.75"
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

export default MediaNext;
