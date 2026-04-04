import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewRight22({
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
        <rect
          height="12"
          width="5.5"
          fill={fill}
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
        />
        <path
          d="m11.25,5.25h-1.25v-1.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75v1.25h-1.25c-.414,0-.75.336-.75.75s.336.75.75.75h1.25v1.25c0,.414.336.75.75.75s.75-.336.75-.75v-1.25h1.25c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TableColNewRight22;
