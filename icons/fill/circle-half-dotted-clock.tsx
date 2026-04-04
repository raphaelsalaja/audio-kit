import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedClock({
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
          d="M12.249,12c-.146,0-.296-.043-.426-.133l-3.25-2.25c-.202-.14-.323-.371-.323-.617V4.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.857l2.927,2.026c.341,.236,.426,.703,.189,1.043-.146,.21-.379,.323-.617,.323Z"
          fill={secondaryfill}
        />
        <path
          d="M9,17c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c4.411,0,8,3.589,8,8s-3.589,8-8,8Z"
          fill={fill}
        />
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" />
        <circle cx="2.302" cy="11.774" fill={fill} r=".75" />
        <circle cx="2.302" cy="6.226" fill={fill} r=".75" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default CircleHalfDottedClock;
