import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridCircle2({
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
        <circle cx="9" cy="3" fill={secondaryfill} r="2.5" strokeWidth="0" />
        <circle cx="3" cy="9" fill={secondaryfill} r="2.5" strokeWidth="0" />
        <circle cx="3" cy="3" fill={fill} r="2.5" strokeWidth="0" />
        <circle cx="9" cy="9" fill={fill} r="2.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default GridCircle2;
