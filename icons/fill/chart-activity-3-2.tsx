import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity32({
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
          d="m7.625,11.5c-1.31,0-2.375-1.065-2.375-2.375V2.875c0-.482-.393-.875-.875-.875s-.875.393-.875.875v1.875c0,1.241-1.009,2.25-2.25,2.25h-.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h.5c.414,0,.75-.336.75-.75v-1.875c0-1.31,1.065-2.375,2.375-2.375s2.375,1.065,2.375,2.375v6.25c0,.482.393.875.875.875s.875-.393.875-.875v-1.875c0-1.241,1.009-2.25,2.25-2.25h.5c.414,0,.75.336.75.75s-.336.75-.75.75h-.5c-.414,0-.75.336-.75.75v1.875c0,1.31-1.065,2.375-2.375,2.375Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChartActivity32;
