import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedPlus2({
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
          d="m6.75,2h-2c-1.5166,0-2.75,1.2334-2.75,2.75v1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.5c0-.6895.5605-1.25,1.25-1.25h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.25,11c-.4141,0-.75.3359-.75.75v1.5c0,.6895-.5605,1.25-1.25,1.25h-2c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2c1.5166,0,2.75-1.2334,2.75-2.75v-1.5c0-.4141-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.75,14.5h-2c-.6895,0-1.25-.5605-1.25-1.25v-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.5c0,1.5166,1.2334,2.75,2.75,2.75h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.5,3.5h-2V1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2h-2c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2v2c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareDashedPlus2;
