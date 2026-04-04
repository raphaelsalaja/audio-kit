import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDownRight({
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
          d="M7.75,2.49c-.414,0-.75,.336-.75,.75v2.7L3.28,2.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.72,3.72H3.24c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H7.75c.414,0,.75-.336,.75-.75V3.24c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <rect
          height="7"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="9"
          y="9"
        />
      </g>
    </svg>
  );
}

export default FollowObjDownRight;
