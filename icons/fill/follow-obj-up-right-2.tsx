import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUpRight2({
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
          d="m5.25,6H1.5c-.414,0-.75.336-.75.75s.336.75.75.75h1.939L.487,10.452c-.293.293-.293.768,0,1.061.146.146.338.22.53.22s.384-.073.53-.22l2.952-2.952v1.939c0,.414.336.75.75.75s.75-.336.75-.75v-3.75c0-.414-.336-.75-.75-.75Z"
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
          y="0"
        />
      </g>
    </svg>
  );
}

export default FollowObjUpRight2;
