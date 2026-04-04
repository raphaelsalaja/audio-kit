import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slider({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.75"
          x2="15.25"
          y1="12.25"
          y2="12.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2.75"
          x2="10.25"
          y1="5.75"
          y2="5.75"
        />
        <circle
          cx="5.25"
          cy="12.25"
          fill={secondaryfill}
          opacity=".3"
          r="2.5"
          strokeWidth="0"
        />
        <circle
          cx="12.75"
          cy="5.75"
          fill={secondaryfill}
          opacity=".3"
          r="2.5"
          strokeWidth="0"
        />
        <circle
          cx="5.25"
          cy="12.25"
          fill="none"
          r="2.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="12.75"
          cy="5.75"
          fill="none"
          r="2.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Slider;
