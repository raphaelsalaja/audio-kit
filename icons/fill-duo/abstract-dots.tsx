import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AbstractDots({
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
        <circle cx="4.5" cy="4.5" fill={fill} r="2" strokeWidth="0" />
        <circle cx="9" cy="9" fill={fill} r="2" strokeWidth="0" />
        <circle cx="13.5" cy="4.5" fill={fill} r="2" strokeWidth="0" />
        <circle cx="13.5" cy="13.5" fill={fill} r="2" strokeWidth="0" />
        <circle cx="4.5" cy="13.5" fill={fill} r="2" strokeWidth="0" />
        <circle
          cx="9"
          cy="2"
          fill={secondaryfill}
          opacity=".4"
          r="1"
          strokeWidth="0"
        />
        <circle
          cx="2"
          cy="9"
          fill={secondaryfill}
          opacity=".4"
          r="1"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="16"
          fill={secondaryfill}
          opacity=".4"
          r="1"
          strokeWidth="0"
        />
        <circle
          cx="16"
          cy="9"
          fill={secondaryfill}
          opacity=".4"
          r="1"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default AbstractDots;
