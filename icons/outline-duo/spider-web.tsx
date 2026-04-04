import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SpiderWeb({
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
          d="M3.33801 5.743C3.66501 6.584 3.95201 7.69 3.95201 9C3.95201 9.598 3.89201 10.833 3.33901 12.256L3.34801 12.275C4.24001 12.412 5.34101 12.716 6.47601 13.371C6.99401 13.67 8.03301 14.339 8.99001 15.53L9.01101 15.532C9.57501 14.828 10.39 14.026 11.525 13.371C12.043 13.072 13.142 12.506 14.652 12.274L14.664 12.257C14.337 11.416 14.05 10.31 14.05 9C14.05 8.402 14.11 7.167 14.663 5.744L14.654 5.725C13.762 5.588 12.661 5.284 11.526 4.629C11.008 4.33 9.96901 3.661 9.01201 2.47L8.99101 2.468C8.42701 3.172 7.61201 3.974 6.47701 4.629C5.95901 4.928 4.86001 5.494 3.35001 5.726L3.33801 5.743Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.33801 5.743C3.66501 6.584 3.95201 7.69 3.95201 9C3.95201 9.598 3.89201 10.833 3.33901 12.256L3.34801 12.275C4.24001 12.412 5.34101 12.716 6.47601 13.371C6.99401 13.67 8.03301 14.339 8.99001 15.53L9.01101 15.532C9.57501 14.828 10.39 14.026 11.525 13.371C12.043 13.072 13.142 12.506 14.652 12.274L14.664 12.257C14.337 11.416 14.05 10.31 14.05 9C14.05 8.402 14.11 7.167 14.663 5.744L14.654 5.725C13.762 5.588 12.661 5.284 11.526 4.629C11.008 4.33 9.96901 3.661 9.01201 2.47L8.99101 2.468C8.42701 3.172 7.61201 3.974 6.47701 4.629C5.95901 4.928 4.86001 5.494 3.35001 5.726L3.33801 5.743Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.25V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.712 5.125L2.28799 12.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.712 12.875L2.28799 5.125"
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

export default SpiderWeb;
