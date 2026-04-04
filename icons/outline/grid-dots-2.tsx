import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridDots2({
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
        <circle cx="6" cy="6" fill={secondaryfill} r="1" strokeWidth="0" />
        <circle cx="2" cy="6" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10" cy="6" fill={fill} r="1" strokeWidth="0" />
        <circle cx="6" cy="10" fill={fill} r="1" strokeWidth="0" />
        <circle cx="2" cy="10" fill={secondaryfill} r="1" strokeWidth="0" />
        <circle cx="10" cy="10" fill={fill} r="1" strokeWidth="0" />
        <circle cx="6" cy="2" fill={fill} r="1" strokeWidth="0" />
        <circle cx="2" cy="2" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10" cy="2" fill={secondaryfill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default GridDots2;
