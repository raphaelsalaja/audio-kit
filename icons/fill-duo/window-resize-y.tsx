import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowResizeY({
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
          d="m10.4697,10.7197l-.7197.7197v-4.8789l.7197.7197c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2-2c-.293-.293-.7676-.293-1.0605,0l-2,2c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l.7197-.7197v4.8789l-.7197-.7197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2,2c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2-2c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WindowResizeY;
