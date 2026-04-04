import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDottedArrowTopRight({
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
        <circle cx="9" cy="15.25" fill={fill} r=".75" />
        <circle cx="2.75" cy="9" fill={fill} r=".75" />
        <circle cx="2.75" cy="15.25" fill={fill} r=".75" />
        <circle cx="5.875" cy="15.25" fill={fill} r=".75" />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" />
        <circle cx="15.25" cy="15.25" fill={fill} r=".75" />
        <circle cx="2.75" cy="2.75" fill={fill} r=".75" />
        <circle cx="5.875" cy="2.75" fill={fill} r=".75" />
        <circle cx="2.75" cy="5.875" fill={fill} r=".75" />
        <circle cx="2.75" cy="12.125" fill={fill} r=".75" />
        <circle cx="15.25" cy="12.125" fill={fill} r=".75" />
        <path
          d="M15.78,2.22c-.293-.293-.768-.293-1.061,0l-4.72,4.72V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v6c0,.414,.336,.75,.75,.75h6c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-4.189L15.78,3.28c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SquareDottedArrowTopRight;
