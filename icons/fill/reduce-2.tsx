import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reduce2({
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
          d="m8.4146,4.7188c.1421.1777.3574.2812.5854.2812s.4434-.1035.5854-.2812l2-2.5c.1802-.2256.2153-.5337.0903-.7935-.1245-.2603-.3877-.4253-.6758-.4253h-4c-.2881,0-.5513.165-.6758.4253-.125.2598-.0898.5679.0903.7935l2,2.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m2.75,8h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,10H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.5854,13.2812c-.2842-.3555-.8867-.3555-1.1709,0l-2,2.5c-.1802.2256-.2153.5337-.0903.7935.1245.2603.3877.4253.6758.4253h4c.2881,0,.5513-.165.6758-.4253.125-.2598.0898-.5679-.0903-.7935l-2-2.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Reduce2;
