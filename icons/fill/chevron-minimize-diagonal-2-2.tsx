import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChevronMinimizeDiagonal22({
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
          d="m4.75,5.5H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h3.25V.75c0-.414.336-.75.75-.75s.75.336.75.75v4c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.25,12c-.414,0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75h4c.414,0,.75.336.75.75s-.336.75-.75.75h-3.25v3.25c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChevronMinimizeDiagonal22;
