import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallEatingDots({
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
          d="M13.5 10C14.0523 10 14.5 9.5523 14.5 9C14.5 8.4477 14.0523 8 13.5 8C12.9477 8 12.5 8.4477 12.5 9C12.5 9.5523 12.9477 10 13.5 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M8.5 6C9.0523 6 9.5 5.5523 9.5 5C9.5 4.4477 9.0523 4 8.5 4C7.9477 4 7.5 4.4477 7.5 5C7.5 5.5523 7.9477 6 8.5 6Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M17 10C17.5523 10 18 9.5523 18 9C18 8.4477 17.5523 8 17 8C16.4477 8 16 8.4477 16 9C16 9.5523 16.4477 10 17 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M8.5 9L14.294 4.655C12.971 2.894 10.872 1.75 8.5 1.75C4.496 1.75 1.25 4.996 1.25 9C1.25 13.004 4.496 16.25 8.5 16.25C10.872 16.25 12.971 15.106 14.294 13.345L8.5 9Z"
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

export default BallEatingDots;
