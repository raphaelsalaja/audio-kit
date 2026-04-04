import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarSlash({
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
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          points="11.6512 6.3488 11.24 6.289 9 1.75 6.76 6.289 1.75 7.017 5.375 10.551 4.9454 13.0545 11.6512 6.3488"
          strokeWidth="0"
        />
        <polygon
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          points="14.7969 6.4204 8.5106 12.7067 9 13.185 13.481 15.54 12.625 10.551 16.25 7.017 14.7969 6.4204"
          strokeWidth="0"
        />
        <polyline
          fill="none"
          points="4.946 13.054 5.375 10.551 1.75 7.017 6.76 6.289 9 1.75 11.24 6.289 11.651 6.349"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="15.3548 6.8873 16.25 7.017 12.625 10.551 13.481 15.54 9 13.185"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="2"
          x2="16"
          y1="16"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default StarSlash;
