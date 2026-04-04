import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDotted({
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
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" stroke="none" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" stroke="none" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" stroke="none" />
        <circle cx="2.302" cy="11.774" fill={fill} r=".75" stroke="none" />
        <circle cx="2.302" cy="6.226" fill={fill} r=".75" stroke="none" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" stroke="none" />
        <circle cx="9" cy="1.75" fill={fill} r=".75" stroke="none" />
        <circle cx="9" cy="16.25" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="14.127"
          cy="14.127"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="16.25" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="14.127"
          cy="3.873"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.774"
          cy="15.698"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="15.698"
          cy="11.774"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="15.698"
          cy="6.226"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.774"
          cy="2.302"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleDotted;
