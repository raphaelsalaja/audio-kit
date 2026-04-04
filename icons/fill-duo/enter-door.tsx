import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnterDoor({
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
          d="m13.75,9c-.6011,0-1.166-.2339-1.5908-.6592l-2.5-2.5c-.4253-.4248-.6592-.9897-.6592-1.5908s.2339-1.166.6592-1.5908l1.6592-1.6592h-5.5684c-1.2407,0-2.25,1.0093-2.25,2.25v12.25h11v-6.6362c-.2385.0845-.4894.1362-.75.1362Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.25,17H2.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h12.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,11h-1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.25,3.5h-3.1895l1.2197-1.2197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-1.2197-1.2197h3.1895c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default EnterDoor;
