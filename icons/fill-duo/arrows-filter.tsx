import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsFilter({
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
          d="m16.2803,5.7197l-3-3c-.293-.293-.7676-.293-1.0605,0l-3,3c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.7197-1.7197v9.6895c0,.4141.3359.75.75.75s.75-.3359.75-.75V5.0605l1.7197,1.7197c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m7.7197,11.2197l-1.7197,1.7197V3.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v9.6895l-1.7197-1.7197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l3,3c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l3-3c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowsFilter;
