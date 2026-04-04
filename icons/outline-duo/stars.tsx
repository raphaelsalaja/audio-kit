import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stars({
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
          d="m7.375,5.495l1.738,3.522,3.887.565-2.813,2.741.664,3.871-3.476-1.828-3.476,1.828.664-3.871-2.813-2.741,3.887-.565,1.738-3.522Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.375,5.495l1.738,3.522,3.887.565-2.813,2.741.664,3.871-3.476-1.828-3.476,1.828.664-3.871-2.813-2.741,3.887-.565,1.738-3.522Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="14.8391 7.2124 16.25 5.837 12.363 5.272 10.625 1.75 9.7075 3.6088"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Stars;
