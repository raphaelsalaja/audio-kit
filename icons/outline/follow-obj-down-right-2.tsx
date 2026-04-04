import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDownRight2({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="1.018"
          x2="5.073"
          y1="1.018"
          y2="5.073"
        />
        <polyline
          fill="none"
          points="1.5 5.25 5.25 5.25 5.25 1.5"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <rect
          height="4.5"
          width="4.5"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(18 18) rotate(180)"
          x="6.75"
          y="6.75"
        />
      </g>
    </svg>
  );
}

export default FollowObjDownRight2;
