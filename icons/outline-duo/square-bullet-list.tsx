import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareBulletList({
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
          d="m13.25,2.75H4.75c-1.1046,0-2,.8954-2,2v8.5c0,1.1046.8954,2,2,2h8.5c1.1046,0,2-.8954,2-2V4.75c0-1.1046-.8954-2-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <rect
          height="12.5"
          width="12.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.75"
          y="2.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="12.25"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="12.25"
          y1="6.25"
          y2="6.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="12.25"
          y1="11.75"
          y2="11.75"
        />
        <circle cx="6" cy="6" fill={fill} r="1" strokeWidth="0" />
        <circle cx="6" cy="9" fill={fill} r="1" strokeWidth="0" />
        <circle cx="6" cy="12" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default SquareBulletList;
