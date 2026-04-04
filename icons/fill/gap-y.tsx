import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GapY({
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
          d="m16,15.25v-1c0-1.5166-1.2334-2.75-2.75-2.75H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v1c0,.4141.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16,3.75v-1c0-.4141-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75v1c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6,9c0-.4141.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-4.5c-.4141,0-.75-.3359-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default GapY;
