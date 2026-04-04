import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretAllDirections({
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
          d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.79499 1.542L6.82599 4.349C6.70999 4.515 6.82799 4.743 7.03099 4.743H10.969C11.171 4.743 11.29 4.515 11.174 4.349L9.20499 1.542C9.10499 1.4 8.89399 1.4 8.79499 1.542Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.458 8.79501L13.651 6.82601C13.485 6.71001 13.257 6.82801 13.257 7.03101V10.969C13.257 11.171 13.485 11.29 13.651 11.174L16.458 9.20501C16.6 9.10501 16.6 8.89401 16.458 8.79501Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.20501 16.458L11.174 13.651C11.29 13.485 11.172 13.257 10.969 13.257H7.03101C6.82901 13.257 6.71001 13.485 6.82601 13.651L8.79501 16.458C8.89501 16.6 9.10601 16.6 9.20501 16.458Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.54199 9.205L4.34899 11.174C4.51499 11.29 4.74299 11.172 4.74299 10.969V7.031C4.74299 6.829 4.51499 6.71 4.34899 6.826L1.54199 8.795C1.39999 8.895 1.39999 9.106 1.54199 9.205Z"
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

export default CaretAllDirections;
