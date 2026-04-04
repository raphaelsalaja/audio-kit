import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft2({
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
          d="m14.25,16H3.75c-1.5166,0-2.75-1.2334-2.75-2.75V4.75c0-1.5166,1.2334-2.75,2.75-2.75h10.5c1.5166,0,2.75,1.2334,2.75,2.75v8.5c0,1.5166-1.2334,2.75-2.75,2.75ZM3.75,3.5c-.6895,0-1.25.5605-1.25,1.25v8.5c0,.6895.5605,1.25,1.25,1.25h10.5c.6895,0,1.25-.5605,1.25-1.25V4.75c0-.6895-.5605-1.25-1.25-1.25H3.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.75,13h-3c-.4141,0-.75-.3359-.75-.75v-6.5c0-.4141.3359-.75.75-.75h3c.4141,0,.75.3359.75.75v6.5c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SidebarLeft2;
