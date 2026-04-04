import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareMoveObjUpLeft({
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
          d="m2,4.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75V4.75c0-1.5166-1.2334-2.75-2.75-2.75H4.75c-1.5166,0-2.75,1.2334-2.75,2.75Zm11,4.25c.5522,0,1,.4477,1,1v3c0,.5523-.4478,1-1,1h-3c-.5522,0-1-.4477-1-1v-3c0-.5523.4478-1,1-1h3Zm-5-5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-1.4395s1.7197,1.7197,1.7197,1.7197c.1465.1465.2197.3384.2197.5303s-.0732.3838-.2197.5303c-.293.293-.7676.293-1.0605,0l-1.7197-1.7197v1.4395c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-3.25c0-.4141.3359-.75.75-.75h3.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareMoveObjUpLeft;
