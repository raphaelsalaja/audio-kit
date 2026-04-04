import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDotted2({
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
        <circle cx="6" cy=".75" fill={fill} r=".75" strokeWidth="0" />
        <circle
          cx="3.375"
          cy="1.453"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="1.453" cy="3.375" fill={fill} r=".75" strokeWidth="0" />
        <circle cx=".75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle cx="1.453" cy="8.625" fill={fill} r=".75" strokeWidth="0" />
        <circle
          cx="3.375"
          cy="10.547"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="6" cy="11.25" fill={fill} r=".75" strokeWidth="0" />
        <circle
          cx="8.625"
          cy="10.547"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="10.547" cy="8.625" fill={fill} r=".75" strokeWidth="0" />
        <circle
          cx="11.25"
          cy="6"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="10.547" cy="3.375" fill={fill} r=".75" strokeWidth="0" />
        <circle
          cx="8.625"
          cy="1.453"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleDotted2;
