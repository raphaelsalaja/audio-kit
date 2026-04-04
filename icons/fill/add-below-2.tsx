import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddBelow2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11,2H1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11,5H1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.25,8.25h-1.5v-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.5h-1.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.5v1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.5h1.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11,2H1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11,5H1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h10c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default AddBelow2;
