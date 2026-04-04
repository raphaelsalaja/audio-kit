import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDottedRotateAnticlockwise({
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
        <polyline
          fill="none"
          points="1.872 3.305 2.28 6.25 5.224 5.843"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.232,8.484c-.265-3.763-3.401-6.734-7.232-6.734-3.031,0-5.627,1.86-6.71,4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="14.127"
          cy="14.127"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="9" cy="16.25" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="3.873"
          cy="14.127"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="1.75" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle
          cx="15.698"
          cy="11.774"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.774"
          cy="15.698"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.226"
          cy="15.698"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="2.302"
          cy="11.774"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArrowDottedRotateAnticlockwise;
