import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedCheck({
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
        <path
          d="M9,1.75c4.004,0,7.25,3.246,7.25,7.25s-3.246,7.25-7.25,7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="5.75 9.25 8 11.75 12.25 6.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" stroke="none" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" stroke="none" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" stroke="none" />
        <circle cx="2.302" cy="11.774" fill={fill} r=".75" stroke="none" />
        <circle cx="2.302" cy="6.226" fill={fill} r=".75" stroke="none" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default CircleHalfDottedCheck;
