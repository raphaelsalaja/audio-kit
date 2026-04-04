import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGridDots({
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
        <rect
          height="14"
          width="14"
          fill={secondaryfill}
          opacity=".4"
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <circle cx="5.5" cy="9" fill={fill} r="1" strokeWidth="0" />
        <circle cx="9" cy="12.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="9" cy="9" fill={fill} r="1" strokeWidth="0" />
        <circle cx="9" cy="5.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="12.5" cy="9" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default SquareGridDots;
