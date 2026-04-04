import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapRefresh({
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
          d="M14.25 13.25H16.75V10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.7942V4.99609C16.25 4.35599 15.658 3.8809 15.033 4.02L12.035 4.686C11.849 4.727 11.655 4.7148 11.476 4.6499L6.524 2.8491C6.345 2.7839 6.151 2.771 5.965 2.813L2.533 3.5759C2.075 3.678 1.75 4.084 1.75 4.552V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L8.2512 13.9765"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 15.887C15.499 16.418 14.788 16.75 14 16.75C12.481 16.75 11.25 15.519 11.25 14C11.25 12.481 12.481 11.25 14 11.25C15.166 11.25 16.162 11.976 16.563 13"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MapRefresh;
