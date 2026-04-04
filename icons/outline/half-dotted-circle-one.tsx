import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HalfDottedCircleOne({
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
          d="M9,16.25c-4.004,0-7.25-3.246-7.25-7.25S4.996,1.75,9,1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25,12.25V5.75s-.745,1.309-2.325,1.612"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="14.127" cy="14.127" fill={fill} r=".75" stroke="none" />
        <circle cx="16.25" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="14.127" cy="3.873" fill={fill} r=".75" stroke="none" />
        <circle cx="11.774" cy="15.698" fill={fill} r=".75" stroke="none" />
        <circle cx="15.698" cy="11.774" fill={fill} r=".75" stroke="none" />
        <circle cx="15.698" cy="6.226" fill={fill} r=".75" stroke="none" />
        <circle cx="11.774" cy="2.302" fill={fill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default HalfDottedCircleOne;
