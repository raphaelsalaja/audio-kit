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
          d="m14.25,2H3.75c-1.517,0-2.75,1.2329-2.75,2.75v8.5c0,1.5171,1.233,2.75,2.75,2.75h10.5c1.517,0,2.75-1.2329,2.75-2.75V4.75c0-1.5171-1.233-2.75-2.75-2.75Zm-7.25,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,1c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm10.5303,5.5303l-2,2c-.1465.1465-.3384.2197-.5303.2197s-.3838-.0732-.5303-.2197c-.293-.293-.293-.7676,0-1.0605l.7197-.7197h-4.3789l.7197.7197c.293.293.293.7676,0,1.0605-.1465.1465-.3384.2197-.5303.2197s-.3838-.0732-.5303-.2197l-2-2c-.293-.293-.293-.7676,0-1.0605l2-2c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-.7197.7197h4.3789l-.7197-.7197c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l2,2c.293.293.293.7676,0,1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default WindowResizeX2;
