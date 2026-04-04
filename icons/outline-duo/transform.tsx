import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Transform({
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
          d="M5.106 1.82001L13.606 5.05801C13.994 5.20601 14.25 5.57801 14.25 5.99201V12.012C14.25 12.427 13.994 12.799 13.606 12.946L5.106 16.184C4.451 16.433 3.75 15.95 3.75 15.25V2.75401C3.75 2.05401 4.451 1.57001 5.106 1.82001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.106 1.82001L13.606 5.05801C13.994 5.20601 14.25 5.57801 14.25 5.99201V12.012C14.25 12.427 13.994 12.799 13.606 12.946L5.106 16.184C4.451 16.433 3.75 15.95 3.75 15.25V2.75401C3.75 2.05401 4.451 1.57001 5.106 1.82001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Transform;
