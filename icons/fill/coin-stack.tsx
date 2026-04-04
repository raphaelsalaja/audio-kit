import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CoinStack({
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
          d="m10,7.25c0-.4141-.3359-.75-.75-.75H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.5c.4141,0,.75-.3359.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.0488,10.75c0-.4141-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.5488c.4141,0,.75-.3359.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.9512,13.5H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.2012c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,4.5h5.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle
          cx="13"
          cy="11.5"
          fill={secondaryfill}
          r="3.5"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CoinStack;
