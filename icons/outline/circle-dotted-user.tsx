import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleDottedUser({
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
        <circle
          cx="9"
          cy="7.75"
          fill="none"
          r="2"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="1.889" cy="10.414" fill={fill} r=".75" stroke="none" />
        <circle cx="2.971" cy="4.972" fill={fill} r=".75" stroke="none" />
        <circle cx="2.972" cy="13.027" fill={fill} r=".75" stroke="none" />
        <circle cx="1.89" cy="7.586" fill={fill} r=".75" stroke="none" />
        <circle cx="4.973" cy="2.972" fill={fill} r=".75" stroke="none" />
        <circle cx="7.586" cy="1.889" fill={fill} r=".75" stroke="none" />
        <circle cx="15.029" cy="13.028" fill={fill} r=".75" stroke="none" />
        <circle cx="16.111" cy="7.586" fill={fill} r=".75" stroke="none" />
        <circle cx="13.028" cy="2.971" fill={fill} r=".75" stroke="none" />
        <circle cx="16.11" cy="10.414" fill={fill} r=".75" stroke="none" />
        <circle cx="15.028" cy="4.973" fill={fill} r=".75" stroke="none" />
        <circle cx="10.414" cy="1.89" fill={fill} r=".75" stroke="none" />
        <path
          d="M9,16.25c1.407,0,2.716-.407,3.827-1.101-.481-1.67-2.003-2.899-3.827-2.899s-3.347,1.229-3.827,2.899c1.112,.694,2.42,1.101,3.827,1.101Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CircleDottedUser;
