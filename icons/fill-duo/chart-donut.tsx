import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut({
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
          d="M17 9C17 4.58168 13.4182 1 9 1V6C10.6568 6 12 7.34313 12 9H17Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M1 9C1 4.58168 4.58179 1 9 1V6C7.3432 6 6 7.34313 6 9C6 9.82843 6.33579 10.5784 6.87869 11.1213L3.34315 14.6568C1.89544 13.2091 1 11.2091 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.87867 11.1213L3.34314 14.6568C4.79087 16.1046 6.79087 17 8.99999 17C13.4182 17 17 13.4183 17 9H12C12 10.6569 10.6568 12 8.99999 12C8.17158 12 7.42158 11.6642 6.87867 11.1213Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartDonut;
