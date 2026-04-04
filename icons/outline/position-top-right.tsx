import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PositionTopRight({
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
        <rect
          height="5.5"
          width="5.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(18 -7) rotate(90)"
          x="9.75"
          y="2.75"
        />
        <path
          d="M2.75,3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75,6.625c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75c0,.414,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75,9.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75c0,.414,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75,12.875c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25,12.875c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75,16c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875,16c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875,3.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9,16c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25,16c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75-.75,.336-.75,.75,.336,.75,.75,.75Z"
          fill={fill}
          stroke="none"
        />
        <circle cx="12.125" cy="15.25" fill={fill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default PositionTopRight;
