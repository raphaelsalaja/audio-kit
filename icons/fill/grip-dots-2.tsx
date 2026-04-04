import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GripDots2({
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
        <circle cx="6" cy="8" fill={secondaryfill} r="1" strokeWidth="0" />
        <circle cx="6" cy="4" fill={secondaryfill} r="1" strokeWidth="0" />
        <circle cx="2" cy="8" fill={fill} r="1" strokeWidth="0" />
        <circle cx="2" cy="4" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10" cy="8" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10" cy="4" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default GripDots2;
