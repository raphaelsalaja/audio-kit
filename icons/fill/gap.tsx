import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gap({
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
          d="m11.25,9.75c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.5v-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.5h-1.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.5v1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.5h1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m2.75,6.5h1.5c1.5166,0,2.75-1.2334,2.75-2.75v-1c0-.4141-.3359-.75-.75-.75h-3.5c-.4141,0-.75.3359-.75.75v3c0,.4141.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,2h-3.5c-.4141,0-.75.3359-.75.75v1c0,1.5166,1.2334,2.75,2.75,2.75h1.5c.4141,0,.75-.3359.75-.75v-3c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.25,11.5h-1.5c-.4141,0-.75.3359-.75.75v3c0,.4141.3359.75.75.75h3.5c.4141,0,.75-.3359.75-.75v-1c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,11.5h-1.5c-1.5166,0-2.75,1.2334-2.75,2.75v1c0,.4141.3359.75.75.75h3.5c.4141,0,.75-.3359.75-.75v-3c0-.4141-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Gap;
