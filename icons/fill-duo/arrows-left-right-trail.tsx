import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsLeftRightTrail({
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
          d="m6.2803,8.2197l-1.7197-1.7197h6.4395c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-6.4395l1.7197-1.7197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-3,3c-.293.293-.293.7676,0,1.0605l3,3c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14,6.5h.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4,11.5h-.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.7803,8.7197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.7197,1.7197h-6.4395c-.4141,0-.75.3359-.75.75s.3359.75.75.75h6.4395l-1.7197,1.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l3-3c.293-.293.293-.7676,0-1.0605l-3-3Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowsLeftRightTrail;
