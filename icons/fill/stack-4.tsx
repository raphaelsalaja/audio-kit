import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stack4({
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
          width="8.5"
          fill={fill}
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x=".5"
        />
        <path
          d="m11.25,10c-.414,0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v6.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Stack4;
