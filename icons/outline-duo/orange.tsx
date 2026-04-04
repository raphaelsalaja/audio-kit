import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Orange({
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
          d="M9 16.25C12.1756 16.25 14.75 13.6756 14.75 10.5C14.75 7.32436 12.1756 4.75 9 4.75C5.82436 4.75 3.25 7.32436 3.25 10.5C3.25 13.6756 5.82436 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.5 0C11.776 0 12 0.224 12 0.5C12 1.88 10.88 3 9.5 3C9.224 3 9 2.776 9 2.5C9 1.12 10.12 0 11.5 0Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 14C9.41421 14 9.75 13.6642 9.75 13.25C9.75 12.8358 9.41421 12.5 9 12.5C8.58579 12.5 8.25 12.8358 8.25 13.25C8.25 13.6642 8.58579 14 9 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 12.5C11.6642 12.5 12 12.1642 12 11.75C12 11.3358 11.6642 11 11.25 11C10.8358 11 10.5 11.3358 10.5 11.75C10.5 12.1642 10.8358 12.5 11.25 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 12.5C7.16421 12.5 7.5 12.1642 7.5 11.75C7.5 11.3358 7.16421 11 6.75 11C6.33579 11 6 11.3358 6 11.75C6 12.1642 6.33579 12.5 6.75 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.25C12.1756 16.25 14.75 13.6756 14.75 10.5C14.75 7.32436 12.1756 4.75 9 4.75C5.82436 4.75 3.25 7.32436 3.25 10.5C3.25 13.6756 5.82436 16.25 9 16.25Z"
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

export default Orange;
