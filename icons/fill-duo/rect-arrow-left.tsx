import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowLeft({
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
        <rect
          height="13"
          width="16"
          fill={secondaryfill}
          opacity=".4"
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          x="1"
          y="2.5"
        />
        <path
          d="m12.25,8.25h-4.6895l1.2197-1.2197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.2197-1.2197h4.6895c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RectArrowLeft;
