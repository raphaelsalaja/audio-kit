import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjUpLeft2({
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
        <path
          d="m2.561,1.5h1.939c.414,0,.75-.336.75-.75s-.336-.75-.75-.75H.75c-.414,0-.75.336-.75.75v3.75c0,.414.336.75.75.75s.75-.336.75-.75v-1.939l2.952,2.952c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768,0-1.061L2.561,1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          strokeWidth="0"
          x="6"
          y="6"
        />
      </g>
    </svg>
  );
}

export default MoveObjUpLeft2;
