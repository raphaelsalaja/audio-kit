import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowToCornerBottomRight2({
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
          d="m8.75,11.5H2.5c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h6.25c.689,0,1.25-.561,1.25-1.25V2.5c0-.414.336-.75.75-.75s.75.336.75.75v6.25c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7.25,2.25c-.414,0-.75.336-.75.75v2.439L1.78.72c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l4.72,4.72h-2.439c-.414,0-.75.336-.75.75s.336.75.75.75h4.25c.414,0,.75-.336.75-.75V3c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ArrowToCornerBottomRight2;
