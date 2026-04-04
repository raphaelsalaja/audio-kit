import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToStart({
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
          d="M16.5,4.946c-1.446,.872-4.6,2.776-6.011,3.628-.322,.194-.318,.661,.004,.856l6.002,3.623c.332,.2,.754-.04,.754-.429V5.377c0-.389-.418-.632-.75-.432Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5,4.946c-1.446,.872-4.6,2.776-6.011,3.628-.322,.194-.318,.661,.004,.856l6.002,3.623c.332,.2,.754-.04,.754-.429V5.377c0-.389-.418-.632-.75-.432Z"
          fill="none"
          stroke={fill}
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
          x1=".75"
          x2=".75"
          y1="13.75"
          y2="4.25"
        />
      </g>
    </svg>
  );
}

export default MediaSkipToStart;
