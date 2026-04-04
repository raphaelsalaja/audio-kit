import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderTop({
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
          d="M15.25,2H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H15.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <circle cx="15.25" cy="9" fill={fill} r=".75" />
        <circle cx="12.125" cy="9" fill={fill} r=".75" />
        <circle cx="9" cy="9" fill={fill} r=".75" />
        <circle cx="5.875" cy="9" fill={fill} r=".75" />
        <circle cx="2.75" cy="9" fill={fill} r=".75" />
        <circle cx="9" cy="5.875" fill={fill} r=".75" />
        <circle cx="9" cy="12.125" fill={fill} r=".75" />
        <circle cx="9" cy="15.25" fill={fill} r=".75" />
        <circle cx="2.75" cy="5.875" fill={fill} r=".75" />
        <circle cx="2.75" cy="12.125" fill={fill} r=".75" />
        <circle cx="2.75" cy="15.25" fill={fill} r=".75" />
        <circle cx="15.25" cy="5.875" fill={fill} r=".75" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" />
        <circle cx="5.875" cy="15.25" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default BorderTop;
