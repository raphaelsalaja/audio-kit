import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Balance2({
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
          d="M8.51399 10.53L5.69699 15.408C5.48099 15.782 5.75099 16.249 6.18299 16.249H11.816C12.248 16.249 12.518 15.782 12.302 15.408L9.48499 10.53C9.26899 10.156 8.72999 10.156 8.51399 10.53Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.51399 10.53L5.69699 15.408C5.48099 15.782 5.75099 16.249 6.18299 16.249H11.816C12.248 16.249 12.518 15.782 12.302 15.408L9.48499 10.53C9.26899 10.156 8.72999 10.156 8.51399 10.53Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 5.25C4.4665 5.25 5.25 4.4665 5.25 3.5C5.25 2.5335 4.4665 1.75 3.5 1.75C2.5335 1.75 1.75 2.5335 1.75 3.5C1.75 4.4665 2.5335 5.25 3.5 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 5.25C15.4665 5.25 16.25 4.4665 16.25 3.5C16.25 2.5335 15.4665 1.75 14.5 1.75C13.5335 1.75 12.75 2.5335 12.75 3.5C12.75 4.4665 13.5335 5.25 14.5 5.25Z"
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

export default Balance2;
