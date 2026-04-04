import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDottedRotateAnticlockwise({
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
        <circle
          cx="9"
          cy="9"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="7.25"
          stroke="none"
        />
        <path
          d="M1.87201 3.30499L2.28001 6.24999L5.22401 5.84299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.232 8.484C15.967 4.721 12.831 1.75 8.99998 1.75C5.96898 1.75 3.37298 3.61 2.28998 6.25"
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
          d="M9 17C9.41421 17 9.75 16.6642 9.75 16.25C9.75 15.8358 9.41421 15.5 9 15.5C8.58579 15.5 8.25 15.8358 8.25 16.25C8.25 16.6642 8.58579 17 9 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.87299 14.877C4.2872 14.877 4.62299 14.5412 4.62299 14.127C4.62299 13.7128 4.2872 13.377 3.87299 13.377C3.45877 13.377 3.12299 13.7128 3.12299 14.127C3.12299 14.5412 3.45877 14.877 3.87299 14.877Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 9.75C2.16421 9.75 2.5 9.41421 2.5 9C2.5 8.58579 2.16421 8.25 1.75 8.25C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.698 12.524C16.1122 12.524 16.448 12.1882 16.448 11.774C16.448 11.3598 16.1122 11.024 15.698 11.024C15.2838 11.024 14.948 11.3598 14.948 11.774C14.948 12.1882 15.2838 12.524 15.698 12.524Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.774 16.448C12.1882 16.448 12.524 16.1122 12.524 15.698C12.524 15.2838 12.1882 14.948 11.774 14.948C11.3598 14.948 11.024 15.2838 11.024 15.698C11.024 16.1122 11.3598 16.448 11.774 16.448Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.22601 16.448C6.64023 16.448 6.97601 16.1122 6.97601 15.698C6.97601 15.2838 6.64023 14.948 6.22601 14.948C5.8118 14.948 5.47601 15.2838 5.47601 15.698C5.47601 16.1122 5.8118 16.448 6.22601 16.448Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.302 12.524C2.71622 12.524 3.052 12.1882 3.052 11.774C3.052 11.3598 2.71622 11.024 2.302 11.024C1.88779 11.024 1.552 11.3598 1.552 11.774C1.552 12.1882 1.88779 12.524 2.302 12.524Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ArrowDottedRotateAnticlockwise;
