import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserHeart({
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
          d="M9 7.2505C10.519 7.2505 11.75 6.0195 11.75 4.5005C11.75 2.9815 10.519 1.7505 9 1.7505C7.481 1.7505 6.25 2.9815 6.25 4.5005C6.25 6.0195 7.481 7.2505 9 7.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.9475C13.919 17.0185 14.08 17.0185 14.218 16.9475C14.947 16.5735 17.249 15.2175 17.249 13.0135C17.253 12.0455 16.458 11.2565 15.472 11.2505C14.879 11.2575 14.328 11.5515 13.999 12.0365C13.67 11.5525 13.118 11.2585 12.526 11.2505C11.541 11.2565 10.746 12.0445 10.749 13.0135C10.749 15.2185 13.052 16.5735 13.78 16.9475H13.781Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.06079 9.7549C9.04019 9.7547 9.0206 9.7505 9 9.7505C6.449 9.7505 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5154C5.3913 15.8789 6.90599 16.198 8.67709 16.2354"
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

export default UserHeart;
