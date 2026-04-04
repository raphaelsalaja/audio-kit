import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MovieReel({
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
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="5.5" fill={secondaryfill} r="1.5" stroke="none" />
        <circle cx="12.5" cy="9" fill={secondaryfill} r="1.5" stroke="none" />
        <circle cx="9" cy="12.5" fill={secondaryfill} r="1.5" stroke="none" />
        <circle cx="5.5" cy="9" fill={secondaryfill} r="1.5" stroke="none" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="16.25"
          y1="16.25"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default MovieReel;
