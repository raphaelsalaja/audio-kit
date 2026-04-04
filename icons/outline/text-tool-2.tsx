import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextTool2({
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
          d="M16.25,12v.75c0,1.105-.895,2-2,2H3.75c-1.105,0-2-.895-2-2v-.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75,6v-.75c0-1.105,.895-2,2-2H14.25c1.105,0,2,.895,2,2v.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="11.798 12.25 9.068 5.75 8.932 5.75 6.202 12.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.832"
          x2="11.168"
          y1="10.75"
          y2="10.75"
        />
        <circle cx="1.75" cy="9" fill={fill} r=".75" stroke="none" />
        <circle cx="16.25" cy="9" fill={fill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default TextTool2;
