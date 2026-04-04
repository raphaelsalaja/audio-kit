import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpRightDownLeft({
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
          d="M8.79499 2.042L6.82599 4.849C6.70999 5.015 6.82799 5.243 7.03099 5.243H10.969C11.171 5.243 11.29 5.015 11.174 4.849L9.20499 2.042C9.10499 1.9 8.89399 1.9 8.79499 2.042Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.79499 2.042L6.82599 4.849C6.70999 5.015 6.82799 5.243 7.03099 5.243H10.969C11.171 5.243 11.29 5.015 11.174 4.849L9.20499 2.042C9.10499 1.9 8.89399 1.9 8.79499 2.042Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.958 8.79501L13.151 6.82601C12.985 6.71001 12.757 6.82801 12.757 7.03101V10.969C12.757 11.171 12.985 11.29 13.151 11.174L15.958 9.20501C16.1 9.10501 16.1 8.89401 15.958 8.79501Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.958 8.79501L13.151 6.82601C12.985 6.71001 12.757 6.82801 12.757 7.03101V10.969C12.757 11.171 12.985 11.29 13.151 11.174L15.958 9.20501C16.1 9.10501 16.1 8.89401 15.958 8.79501Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.20501 15.958L11.174 13.151C11.29 12.985 11.172 12.757 10.969 12.757H7.03101C6.82901 12.757 6.71001 12.985 6.82601 13.151L8.79501 15.958C8.89501 16.1 9.10601 16.1 9.20501 15.958Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.20501 15.958L11.174 13.151C11.29 12.985 11.172 12.757 10.969 12.757H7.03101C6.82901 12.757 6.71001 12.985 6.82601 13.151L8.79501 15.958C8.89501 16.1 9.10601 16.1 9.20501 15.958Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.04199 9.205L4.84899 11.174C5.01499 11.29 5.24299 11.172 5.24299 10.969V7.031C5.24299 6.829 5.01499 6.71 4.84899 6.826L2.04199 8.795C1.89999 8.895 1.89999 9.106 2.04199 9.205Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.04199 9.205L4.84899 11.174C5.01499 11.29 5.24299 11.172 5.24299 10.969V7.031C5.24299 6.829 5.01499 6.71 4.84899 6.826L2.04199 8.795C1.89999 8.895 1.89999 9.106 2.04199 9.205Z"
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

export default CaretUpRightDownLeft;
