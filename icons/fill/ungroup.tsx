import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ungroup({
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
          d="m15.25,14H4.75c-.6895,0-1.25-.5605-1.25-1.25V2.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v10c0,1.5166,1.2334,2.75,2.75,2.75h10.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,2h-5.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.75v4.75c0,.4141.3359.75.75.75s.75-.3359.75-.75V2.75c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.75,12c.1924,0,.3838-.0732.5303-.2197l3.2197-3.2197v1.6895c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.5c0-.4141-.3359-.75-.75-.75h-3.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.6895l-3.2197,3.2197c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ungroup;
