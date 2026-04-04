import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddAbove2({
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
          d="m12,6h-2.25v2.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-2.25h-2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.25v-2.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v2.25h2.25c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,10.5H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,14H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default AddAbove2;
