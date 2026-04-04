import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Refresh({
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
          d="M9 15.25C12.4518 15.25 15.25 12.45 15.25 9C15.25 5.55 12.4518 2.75 9 2.75C5.5482 2.75 2.75 5.55 2.75 9C2.75 12.45 5.5482 15.25 9 15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 9.5L3 7.25L0.75 9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.495 13.345C12.3587 14.5226 10.7641 15.25 9 15.25C5.548 15.25 2.75 12.45 2.75 9C2.75 8.4 2.834 7.83003 2.99 7.28003"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 8.5L15 10.75L17.25 8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5063 4.65564C5.6425 3.48544 7.2366 2.75 9 2.75C12.452 2.75 15.25 5.55 15.25 9C15.25 9.58 15.171 10.14 15.024 10.67"
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

export default Refresh;
