import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HalfDottedCirclePlay({
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
          d="M11.652,8.568l-3.651-2.129c-.333-.194-.752,.046-.752,.432v4.259c0,.386,.419,.626,.752,.432l3.651-2.129c.331-.193,.331-.671,0-.864Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,1.75c4.004,0,7.25,3.246,7.25,7.25s-3.246,7.25-7.25,7.25"
          fill="none"
          stroke={fill}
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

export default HalfDottedCirclePlay;
