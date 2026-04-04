import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight3({
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
          d="M3.75,3.5h5.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h5.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H3.75c-.689,0-1.25-.561-1.25-1.25V4.75c0-.689,.561-1.25,1.25-1.25Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,2h-2.5c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75h2.5c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight3;
