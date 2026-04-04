import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectArrowDown({
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
          d="m14.25,2.5H3.75c-1.5166,0-2.75,1.2334-2.75,2.75v7.5c0,1.5166,1.2334,2.75,2.75,2.75h10.5c1.5166,0,2.75-1.2334,2.75-2.75v-7.5c0-1.5166-1.2334-2.75-2.75-2.75Zm-2.2197,7.2803l-2.5,2.5c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197l-2.5-2.5c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l1.2197,1.2197v-3.9395c0-.4141.3359-.75.75-.75s.75.3359.75.75v3.9395l1.2197-1.2197c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default RectArrowDown;
