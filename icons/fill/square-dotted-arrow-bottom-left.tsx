import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDottedArrowBottomLeft({
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
        <circle cx="9" cy="2.75" fill={fill} r=".75" />
        <circle cx="15.25" cy="9" fill={fill} r=".75" />
        <circle cx="15.25" cy="2.75" fill={fill} r=".75" />
        <circle cx="12.125" cy="2.75" fill={fill} r=".75" />
        <circle cx="5.875" cy="2.75" fill={fill} r=".75" />
        <circle cx="2.75" cy="2.75" fill={fill} r=".75" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" />
        <circle cx="15.25" cy="5.875" fill={fill} r=".75" />
        <circle cx="2.75" cy="5.875" fill={fill} r=".75" />
        <path
          d="M8.75,8.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H6.939L2.22,14.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l4.72-4.72v4.189c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SquareDottedArrowBottomLeft;
