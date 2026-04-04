import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedZ({
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
          d="M7.78,10.22c-.293-.293-.768-.293-1.061,0L2.5,14.439v-1.689c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.5c0,.414,.336,.75,.75,.75h3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-1.689l4.22-4.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M7.25,2.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.25,5.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M7.25,8.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
        />
        <circle cx="16.25" cy="10.75" fill={fill} r=".75" />
        <circle cx="13.25" cy="10.75" fill={fill} r=".75" />
        <circle cx="10.25" cy="10.75" fill={fill} r=".75" />
      </g>
    </svg>
  );
}

export default AxisDottedZ;
