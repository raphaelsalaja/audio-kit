import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gear4({
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
        <polygon
          fill="none"
          points="8.25 1.75 9.75 1.75 10.25 2.75 7.75 2.75 8.25 1.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="13.596 3.343 14.657 4.404 14.303 5.464 12.536 3.697 13.596 3.343"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="16.25 8.25 16.25 9.75 15.25 10.25 15.25 7.75 16.25 8.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="14.657 13.596 13.596 14.657 12.536 14.303 14.303 12.536 14.657 13.596"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="9.75 16.25 8.25 16.25 7.75 15.25 10.25 15.25 9.75 16.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="4.404 14.657 3.343 13.596 3.697 12.536 5.464 14.303 4.404 14.657"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="1.75 9.75 1.75 8.25 2.75 7.75 2.75 10.25 1.75 9.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill="none"
          points="3.343 4.404 4.404 3.343 5.464 3.697 3.697 5.464 3.343 4.404"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="6.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Gear4;
