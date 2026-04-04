import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PositionTop({
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
          height="5"
          width="14"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <circle cx="15.25" cy="9" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.75" cy="9" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="9" cy="15.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.75" cy="12.125" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.75" cy="15.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="5.875" cy="15.25" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default PositionTop;
