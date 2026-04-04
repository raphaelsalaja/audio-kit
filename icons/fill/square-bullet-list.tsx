import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareBulletList({
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
          d="m13.25,2H4.75c-1.517,0-2.75,1.2329-2.75,2.75v8.5c0,1.5171,1.233,2.75,2.75,2.75h8.5c1.517,0,2.75-1.2329,2.75-2.75V4.75c0-1.5171-1.233-2.75-2.75-2.75Zm-7.25,11c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Zm0-3c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Zm0-3c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Zm6.25,5.5h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm0-2.75h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm0-2.75h-3.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareBulletList;
