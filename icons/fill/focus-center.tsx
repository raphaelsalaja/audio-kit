import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FocusCenter({
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
        <circle cx="9" cy="9" fill={secondaryfill} r="3" strokeWidth="0" />
        <path
          d="m15.0605,9l1.7197-1.7197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2.25,2.25c-.293.293-.293.7676,0,1.0605l2.25,2.25c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.7197-1.7197Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.5303,13.4697c-.293-.293-.7676-.293-1.0605,0l-2.25,2.25c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.7197-1.7197,1.7197,1.7197c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2.25-2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.2803,6.2197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l1.7197,1.7197-1.7197,1.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2.25-2.25c.293-.293.293-.7676,0-1.0605l-2.25-2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.7197,1.2197l-1.7197,1.7197-1.7197-1.7197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2.25,2.25c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2.25-2.25c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FocusCenter;
