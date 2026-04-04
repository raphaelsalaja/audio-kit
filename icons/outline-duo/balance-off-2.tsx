import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BalanceOff2({
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
          d="M9.48599 10.53L12.303 15.408C12.519 15.782 12.249 16.249 11.817 16.249H6.18299C5.75099 16.249 5.48099 15.782 5.69699 15.408L8.51399 10.53C8.72999 10.156 9.26899 10.156 9.48499 10.53H9.48599Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.132 9.05501L1.868 6.44501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.48599 10.53L12.303 15.408C12.519 15.782 12.249 16.249 11.817 16.249H6.18299C5.75099 16.249 5.48099 15.782 5.69699 15.408L8.51399 10.53C8.72999 10.156 9.26899 10.156 9.48499 10.53H9.48599Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 6.25C15.2426 6.25 16.25 5.24264 16.25 4C16.25 2.75736 15.2426 1.75 14 1.75C12.7574 1.75 11.75 2.75736 11.75 4C11.75 5.24264 12.7574 6.25 14 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 4.25C4.07843 4.25 4.75 3.57843 4.75 2.75C4.75 1.92157 4.07843 1.25 3.25 1.25C2.42157 1.25 1.75 1.92157 1.75 2.75C1.75 3.57843 2.42157 4.25 3.25 4.25Z"
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

export default BalanceOff2;
