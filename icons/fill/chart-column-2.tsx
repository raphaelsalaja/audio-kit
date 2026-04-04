import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartColumn2({
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
          d="m4.25,8.5c-.414,0-.75-.336-.75-.75V3.75c0-.414.336-.75.75-.75s.75.336.75.75v4c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.25,8.5c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v6c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.25,8.5c-.414,0-.75-.336-.75-.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75v1.5c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.75,11.5H3.25c-1.517,0-2.75-1.233-2.75-2.75V1.25c0-.414.336-.75.75-.75s.75.336.75.75v7.5c0,.689.561,1.25,1.25,1.25h7.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChartColumn2;
