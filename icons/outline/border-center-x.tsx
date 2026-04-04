import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderCenterX({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="2.75"
          y2="15.25"
        />
        <circle cx="2.75" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="5.875" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="12.125" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="5.875" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="12.125" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="5.875" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="5.875" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="12.125" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="5.875" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default BorderCenterX;
