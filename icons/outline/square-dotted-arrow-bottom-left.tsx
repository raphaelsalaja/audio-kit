import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDottedArrowBottomLeft({
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
        <circle cx="9" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="12.125" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="5.875" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="2.75" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" stroke="none" />
        <circle cx="15.25" cy="5.875" fill={fill} r=".75" stroke="none" />
        <circle cx="2.75" cy="5.875" fill={fill} r=".75" stroke="none" />
        <polyline
          fill="none"
          points="2.75 9.25 8.75 9.25 8.75 15.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="2.75"
          y1="9.25"
          y2="15.25"
        />
      </g>
    </svg>
  );
}

export default SquareDottedArrowBottomLeft;
