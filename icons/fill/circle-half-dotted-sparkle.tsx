import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedSparkle({
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
          d="m9,1c-.4141,0-.75.3359-.75.75s.3359.75.75.75c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75c4.4111,0,8-3.5889,8-8S13.4111,1,9,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,13c.3413,0,.6396-.2305.7261-.561l.5596-2.1533,2.1533-.5596c.3306-.0864.561-.3848.561-.7261s-.2305-.6396-.561-.7261l-2.1533-.5596-.5596-2.1533c-.0864-.3306-.3848-.561-.7261-.561s-.6396.2305-.7261.561l-.5596,2.1533-2.1533.5596c-.3306.0864-.561.3848-.561.7261s.2305.6396.561.7261l2.1533.5596.5596,2.1533c.0864.3306.3848.561.7261.561Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="11.7739" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="6.2261" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default CircleHalfDottedSparkle;
