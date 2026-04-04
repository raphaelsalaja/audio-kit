import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSortArrows({
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
        <path
          d="M8.544,5.032l-1.695,1.978c-.334,.389-.057,.991,.456,.991h3.39c.513,0,.789-.601,.456-.991l-1.695-1.978c-.24-.279-.672-.279-.911,0Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M8.544,12.968l-1.695-1.978c-.334-.389-.057-.991,.456-.991h3.39c.513,0,.789,.601,.456,.991l-1.695,1.978c-.24,.279-.672,.279-.911,0Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CircleSortArrows;
