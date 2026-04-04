import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedChart2({
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
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="11.7739" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="6.2261" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" strokeWidth="0" />
        <rect
          height="8"
          width="3.25"
          fill={secondaryfill}
          rx=".75"
          ry=".75"
          strokeWidth="0"
          x="9.75"
          y="5"
        />
        <rect
          height="5"
          width="3.25"
          fill={secondaryfill}
          rx=".75"
          ry=".75"
          strokeWidth="0"
          x="5"
          y="8"
        />
      </g>
    </svg>
  );
}

export default CircleHalfDottedChart2;
