import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDesigner({
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
          d="M4.82315 4.31111C5.82682 4.63284 8.45211 5.06784 11.179 4.32111C10.8668 2.85207 9.5621 1.75 8 1.75C6.44144 1.75 5.13912 2.84707 4.82315 4.31111Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8 8.25C9.79493 8.25 11.25 6.79493 11.25 5C11.25 3.20507 9.79493 1.75 8 1.75C6.20507 1.75 4.75 3.20507 4.75 5C4.75 6.79493 6.20507 8.25 8 8.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.179 4.32401C10.166 4.60201 9.1 4.75001 8 4.75001C6.117 4.75001 4.336 4.31601 2.75 3.54401"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.953 14C3.251 12.042 5.475 10.75 8 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.49301 8.51903L2.54701 8.20403L2.23101 7.25703C2.12901 6.95103 1.62201 6.95103 1.52001 7.25703L1.20401 8.20403L0.258007 8.51903C0.105007 8.57003 0.00100708 8.71303 0.00100708 8.87503C0.00100708 9.03703 0.105007 9.18003 0.258007 9.23103L1.20401 9.54603L1.52001 10.493C1.57101 10.646 1.71401 10.749 1.87501 10.749C2.03601 10.749 2.18001 10.645 2.23001 10.493L2.54601 9.54603L3.49201 9.23103C3.64501 9.18003 3.74901 9.03703 3.74901 8.87503C3.74901 8.71303 3.64601 8.57003 3.49301 8.51903Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M17.658 6.52601L16.395 6.10501L15.974 4.84201C15.837 4.43401 15.162 4.43401 15.025 4.84201L14.604 6.10501L13.341 6.52601C13.137 6.59401 12.999 6.78501 12.999 7.00001C12.999 7.21501 13.137 7.40601 13.341 7.47401L14.604 7.89501L15.025 9.15801C15.093 9.36201 15.285 9.50001 15.5 9.50001C15.715 9.50001 15.906 9.36201 15.975 9.15801L16.396 7.89501L17.659 7.47401C17.863 7.40601 18.001 7.21501 18.001 7.00001C18.001 6.78501 17.862 6.59401 17.658 6.52601Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 3C14.6642 3 15 2.66421 15 2.25C15 1.83579 14.6642 1.5 14.25 1.5C13.8358 1.5 13.5 1.83579 13.5 2.25C13.5 2.66421 13.8358 3 14.25 3Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default UserDesigner;
