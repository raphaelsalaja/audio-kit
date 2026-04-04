import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedTextXmark({
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
          d="m10.4216,10.4216c-1.5596,1.5596-1.5596,4.0973,0,5.6569s4.0973,1.5596,5.6569,0,1.5596-4.0973,0-5.6569-4.0973-1.5596-5.6569,0Zm4.8462,1.8713l-.9571.9571.9571.9571c.2928.2928.2928.7679,0,1.0607s-.7679.2928-1.0607,0l-.9571-.9571-.9571.9571c-.2928.2928-.7679.2928-1.0607,0s-.2928-.7679,0-1.0607l.9571-.9571-.9571-.9571c-.2928-.2928-.2928-.7679,0-1.0607s.7679-.2928,1.0607,0l.9571.9571.9571-.9571c.2928-.2928.7679-.2928,1.0607,0s.2928.7679,0,1.0607Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m12,7h-6c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h6c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.5,10h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,7.5c-.4141,0-.75-.3359-.75-.75v-2c0-.6895-.5605-1.25-1.25-1.25h-2c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2c1.5166,0,2.75,1.2334,2.75,2.75v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.75,16h-2c-1.5166,0-2.75-1.2334-2.75-2.75v-2c0-.4141.3359-.75.75-.75s.75.3359.75.75v2c0,.6895.5605,1.25,1.25,1.25h2c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,7.5c-.4141,0-.75-.3359-.75-.75v-2c0-1.5166,1.2334-2.75,2.75-2.75h2c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-2c-.6895,0-1.25.5605-1.25,1.25v2c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareDashedTextXmark;
