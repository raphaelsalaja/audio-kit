import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleChampagne({
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
          d="M8 3.75V5.75H5V3.75L4.5 3.25V1.75C4.5 1.198 4.948 0.75 5.5 0.75H7.5C8.052 0.75 8.5 1.198 8.5 1.75V3.25L8 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 6.75H14.25L14.839 10.284C15.054 11.575 14.059 12.75 12.75 12.75C11.441 12.75 10.446 11.575 10.661 10.284L11.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 6.75H14.25L14.839 10.284C15.054 11.575 14.059 12.75 12.75 12.75C11.441 12.75 10.446 11.575 10.661 10.284L11.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 16.25H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.2037 6.7799C8.0775 6.3847 8.00001 6.0286 8.00001 5.75V3.75L8.50001 3.25V1.75C8.50001 1.198 8.05201 0.75 7.50001 0.75H5.50001C4.94801 0.75 4.50001 1.198 4.50001 1.75V3.25L5.00001 3.75V5.75C5.00001 6.63 4.22501 8.285 3.58501 9.502C3.04301 10.532 2.81601 11.696 2.92701 12.855L3.16401 15.345C3.21301 15.858 3.644 16.25 4.159 16.25H7.25001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 5.75H8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 13.75C7.328 13.75 8 13.0784 8 12.25C8 11.4216 7.328 10.75 6.5 10.75C5.672 10.75 5 11.4216 5 12.25C5 13.0784 5.672 13.75 6.5 13.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BottleChampagne;
