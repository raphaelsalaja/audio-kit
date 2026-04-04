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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.781 16.947C13.919 17.018 14.08 17.018 14.218 16.947C14.947 16.573 17.249 15.217 17.249 13.013C17.253 12.045 16.458 11.256 15.472 11.25C14.879 11.257 14.328 11.551 13.999 12.036C13.67 11.552 13.118 11.258 12.526 11.25C11.541 11.256 10.746 12.044 10.749 13.013C10.749 15.218 13.052 16.573 13.78 16.947H13.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.947C13.919 17.018 14.08 17.018 14.218 16.947C14.947 16.573 17.249 15.217 17.249 13.013C17.253 12.045 16.458 11.256 15.472 11.25C14.879 11.257 14.328 11.551 13.999 12.036C13.67 11.552 13.118 11.258 12.526 11.25C11.541 11.256 10.746 12.044 10.749 13.013C10.749 15.218 13.052 16.573 13.78 16.947H13.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.06079 9.75489C9.04019 9.75469 9.0206 9.75049 9 9.75049C6.449 9.75049 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5154C5.3913 15.8789 6.90599 16.198 8.67709 16.2354"
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
