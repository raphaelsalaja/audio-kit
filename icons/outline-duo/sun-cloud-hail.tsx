import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunCloudHail({
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
          d="M12.5938 9.47835C13.5956 8.98761 14.2854 7.95796 14.2854 6.7672C14.2854 5.10085 12.9346 3.75 11.2682 3.75C9.60185 3.75 8.25101 5.10085 8.25101 6.7672C8.25101 6.78657 8.25119 6.8059 8.25155 6.82518C8.49315 6.77589 8.74342 6.75 9.00001 6.75C10.7147 6.75 12.1465 7.90712 12.5938 9.47835Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25101 6.826C8.25101 6.801 8.25101 6.776 8.25101 6.75C8.25101 5.093 9.59401 3.75 11.251 3.75C12.908 3.75 14.251 5.093 14.251 6.75C14.251 6.834 14.248 6.918 14.241 7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 0.75V1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.493 2.507L15.139 2.861"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.007 2.507L7.361 2.861"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 6.75H16.75"
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
          d="M11.585 10.499C11.824 10.086 12.179 9.747 12.605 9.527"
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
          d="M6.25 18C6.66421 18 7 17.6642 7 17.25C7 16.8358 6.66421 16.5 6.25 16.5C5.83579 16.5 5.5 16.8358 5.5 17.25C5.5 17.6642 5.83579 18 6.25 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.5C9.41421 16.5 9.75 16.1642 9.75 15.75C9.75 15.3358 9.41421 15 9 15C8.58579 15 8.25 15.3358 8.25 15.75C8.25 16.1642 8.58579 16.5 9 16.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.75 15C12.1642 15 12.5 14.6642 12.5 14.25C12.5 13.8358 12.1642 13.5 11.75 13.5C11.3358 13.5 11 13.8358 11 14.25C11 14.6642 11.3358 15 11.75 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 15C6.66421 15 7 14.6642 7 14.25C7 13.8358 6.66421 13.5 6.25 13.5C5.83579 13.5 5.5 13.8358 5.5 14.25C5.5 14.6642 5.83579 15 6.25 15Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 13.5C9.41421 13.5 9.75 13.1642 9.75 12.75C9.75 12.3358 9.41421 12 9 12C8.58579 12 8.25 12.3358 8.25 12.75C8.25 13.1642 8.58579 13.5 9 13.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SunCloudHail;
