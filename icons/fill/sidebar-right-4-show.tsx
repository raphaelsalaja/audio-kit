import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight4Show({
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
          d="m3.7197,9.5303l2,2c.293.293.7676.293,1.0605,0s.293-.7676,0-1.0605l-.7197-.7197h1.9395c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.9395l.7197-.7197c.293-.293.293-.7676,0-1.0605-.1465-.1465-.3379-.2197-.5303-.2197s-.3838.0732-.5303.2197l-2,2c-.293.293-.293.7676,0,1.0605Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m3.75,2h10.5c1.5166,0,2.75,1.2334,2.75,2.75v8.5c0,1.5166-1.2334,2.75-2.75,2.75H3.75c-1.5166,0-2.75-1.2334-2.75-2.75V4.75c0-1.5166,1.2334-2.75,2.75-2.75Zm10.5,12.5c.6895,0,1.25-.5605,1.25-1.25V4.75c0-.6895-.5605-1.25-1.25-1.25H3.75c-.6895,0-1.25.5605-1.25,1.25v8.5c0,.6895.5605,1.25,1.25,1.25h10.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.25,5h3c.4141,0,.75.3359.75.75v6.5c0,.4141-.3359.75-.75.75h-3c-.4141,0-.75-.3359-.75-.75v-6.5c0-.4141.3359-.75.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SidebarRight4Show;
