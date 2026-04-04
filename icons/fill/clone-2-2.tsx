import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clone22({
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
          d="m3.667,9h-1.417c-1.241,0-2.25-1.009-2.25-2.25V2.25C0,1.009,1.009,0,2.25,0h4.5c1.241,0,2.25,1.009,2.25,2.25v1.5c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-1.5c0-.414-.336-.75-.75-.75H2.25c-.414,0-.75.336-.75.75v4.5c0,.414.336.75.75.75h1.417c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="9"
          width="9"
          fill={fill}
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="3"
          y="3"
        />
      </g>
    </svg>
  );
}

export default Clone22;
