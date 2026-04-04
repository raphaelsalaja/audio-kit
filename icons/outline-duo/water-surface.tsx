import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WaterSurface({
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
          d="M1.75 14.25C3.15 14.254 4.479 13.634 5.375 12.558C7.053 14.56 10.036 14.823 12.038 13.145C12.25 12.967 12.447 12.771 12.625 12.558C13.519 13.636 14.849 14.257 16.25 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9.846C3.15 9.85 4.479 9.23 5.375 8.154C7.053 10.156 10.036 10.419 12.038 8.741C12.25 8.563 12.447 8.367 12.625 8.154C13.519 9.232 14.849 9.853 16.25 9.846"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.442C3.15 5.446 4.479 4.826 5.375 3.75C6.272 4.825 7.6 5.445 9 5.442C10.401 5.449 11.731 4.829 12.625 3.75C13.519 4.828 14.849 5.449 16.25 5.442"
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

export default WaterSurface;
