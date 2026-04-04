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
          d="m11.25,5.75h-.5c-.828,0-1.5.672-1.5,1.5v1.875c0,.897-.728,1.625-1.625,1.625h0c-.897,0-1.625-.728-1.625-1.625V2.875c0-.897-.728-1.625-1.625-1.625h0c-.897,0-1.625.728-1.625,1.625v1.875c0,.828-.672,1.5-1.5,1.5h-.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default ChartActivity32;
