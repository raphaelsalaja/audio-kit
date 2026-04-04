import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BalanceOff({
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
          d="M1.868 9.05501L16.132 6.44501"
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
          d="M4 6.25C5.24264 6.25 6.25 5.24264 6.25 4C6.25 2.75736 5.24264 1.75 4 1.75C2.75736 1.75 1.75 2.75736 1.75 4C1.75 5.24264 2.75736 6.25 4 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 4.25C15.5784 4.25 16.25 3.57843 16.25 2.75C16.25 1.92157 15.5784 1.25 14.75 1.25C13.9216 1.25 13.25 1.92157 13.25 2.75C13.25 3.57843 13.9216 4.25 14.75 4.25Z"
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

export default BalanceOff;
