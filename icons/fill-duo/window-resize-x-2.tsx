import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowResizeX2({
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
          d="m3.75,2c-1.5204,0-2.75,1.237-2.75,2.75v8.5c0,1.513,1.2296,2.75,2.75,2.75h10.5c1.5204,0,2.75-1.237,2.75-2.75V4.75c0-1.513-1.2296-2.75-2.75-2.75H3.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m3.75,5.5c.4142,0,.75-.34.75-.75s-.3358-.75-.75-.75-.75.34-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,5.5c.4142,0,.75-.34.75-.75s-.3358-.75-.75-.75-.75.34-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.5303,9.4697l-2-2c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l.7197.7197h-4.3789l.7197-.7197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2,2c-.293.293-.293.7676,0,1.0605l2,2c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-.7197-.7197h4.3789l-.7197.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2-2c.293-.293.293-.7676,0-1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WindowResizeX2;
