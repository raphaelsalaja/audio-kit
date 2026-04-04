import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HalfDottedCircleOne({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C4.996 16.25 1.75 13.004 1.75 9C1.75 4.996 4.996 1.75 9 1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.127 14.877C14.5412 14.877 14.877 14.5412 14.877 14.127C14.877 13.7128 14.5412 13.377 14.127 13.377C13.7128 13.377 13.377 13.7128 13.377 14.127C13.377 14.5412 13.7128 14.877 14.127 14.877Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 9.75C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25C15.8358 8.25 15.5 8.58579 15.5 9C15.5 9.41421 15.8358 9.75 16.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.127 4.623C14.5412 4.623 14.877 4.28721 14.877 3.873C14.877 3.45879 14.5412 3.123 14.127 3.123C13.7128 3.123 13.377 3.45879 13.377 3.873C13.377 4.28721 13.7128 4.623 14.127 4.623Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.774 16.448C12.1882 16.448 12.524 16.1122 12.524 15.698C12.524 15.2838 12.1882 14.948 11.774 14.948C11.3598 14.948 11.024 15.2838 11.024 15.698C11.024 16.1122 11.3598 16.448 11.774 16.448Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.698 12.524C16.1122 12.524 16.448 12.1882 16.448 11.774C16.448 11.3598 16.1122 11.024 15.698 11.024C15.2838 11.024 14.948 11.3598 14.948 11.774C14.948 12.1882 15.2838 12.524 15.698 12.524Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.698 6.976C16.1122 6.976 16.448 6.64021 16.448 6.226C16.448 5.81178 16.1122 5.476 15.698 5.476C15.2838 5.476 14.948 5.81178 14.948 6.226C14.948 6.64021 15.2838 6.976 15.698 6.976Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.774 3.052C12.1882 3.052 12.524 2.71622 12.524 2.302C12.524 1.88779 12.1882 1.552 11.774 1.552C11.3598 1.552 11.024 1.88779 11.024 2.302C11.024 2.71622 11.3598 3.052 11.774 3.052Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.24999 12.25V5.75C9.24999 5.75 8.50499 7.059 6.92499 7.362"
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

export default HalfDottedCircleOne;
