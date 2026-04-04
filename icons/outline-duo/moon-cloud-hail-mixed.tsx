import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonCloudHailMixed({
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
          d="M14.2477 5.65292C14.5584 5.65292 14.8609 5.61753 15.1512 5.55056C14.8049 7.02224 13.6465 8.18068 12.1748 8.52713C11.5168 7.46148 10.3451 6.75 9 6.75C8.6366 6.75 8.28591 6.80198 7.9546 6.89884C7.51019 6.25391 7.25 5.47222 7.25 4.62977C7.25 2.72924 8.5742 1.13799 10.3503 0.728333C10.2807 1.02397 10.2439 1.33224 10.2439 1.64912C10.2439 3.86036 12.0365 5.65292 14.2477 5.65292Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.341 7.172C14.724 6.703 15.002 6.145 15.142 5.534C14.854 5.6 14.558 5.642 14.25 5.642C12.041 5.642 10.25 3.851 10.25 1.642C10.25 1.334 10.292 1.038 10.358 0.75C8.58 1.156 7.25 2.741 7.25 4.642C7.25 5.47 7.502 6.24 7.933 6.878"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.418 14.16C15.474 13.868 16.25 12.899 16.25 11.75C16.25 10.369 15.131 9.25 13.75 9.25C13.337 9.25 12.953 9.36 12.61 9.537C12.183 7.935 10.736 6.75 9 6.75C7.264 6.75 5.818 7.936 5.39 9.537C5.047 9.36 4.663 9.25 4.25 9.25C2.869 9.25 1.75 10.369 1.75 11.75C1.75 12.899 2.525 13.867 3.582 14.16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.585 10.499C11.824 10.086 12.179 9.74701 12.605 9.52701"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 13.25V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 18C12.1642 18 12.5 17.6642 12.5 17.25C12.5 16.8358 12.1642 16.5 11.75 16.5C11.3358 16.5 11 16.8358 11 17.25C11 17.6642 11.3358 18 11.75 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 13.25V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 18C6.66421 18 7 17.6642 7 17.25C7 16.8358 6.66421 16.5 6.25 16.5C5.83579 16.5 5.5 16.8358 5.5 17.25C5.5 17.6642 5.83579 18 6.25 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 11.75V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.5C9.41421 16.5 9.75 16.1642 9.75 15.75C9.75 15.3358 9.41421 15 9 15C8.58579 15 8.25 15.3358 8.25 15.75C8.25 16.1642 8.58579 16.5 9 16.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MoonCloudHailMixed;
