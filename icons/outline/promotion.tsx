import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Promotion({
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
          d="M14.25,16.25l-5.25-3.5-5.25,3.5V3.75c0-1.105,.895-2,2-2h6.5c1.105,0,2,.895,2,2v12.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="7" cy="6" fill={secondaryfill} r="1" stroke="none" />
        <circle cx="11" cy="10" fill={secondaryfill} r="1" stroke="none" />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7"
          x2="11"
          y1="10.25"
          y2="5.75"
        />
      </g>
    </svg>
  );
}

export default Promotion;
