import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StepsIndicator({
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
          d="M3.5 9.75C4.88071 9.75 6 8.63071 6 7.25C6 5.86929 4.88071 4.75 3.5 4.75C2.11929 4.75 1 5.86929 1 7.25C1 8.63071 2.11929 9.75 3.5 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 9.75C4.88071 9.75 6 8.63071 6 7.25C6 5.86929 4.88071 4.75 3.5 4.75C2.11929 4.75 1 5.86929 1 7.25C1 8.63071 2.11929 9.75 3.5 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 8C3.91421 8 4.25 7.66421 4.25 7.25C4.25 6.83579 3.91421 6.5 3.5 6.5C3.08579 6.5 2.75 6.83579 2.75 7.25C2.75 7.66421 3.08579 8 3.5 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 9.75C15.8807 9.75 17 8.63071 17 7.25C17 5.86929 15.8807 4.75 14.5 4.75C13.1193 4.75 12 5.86929 12 7.25C12 8.63071 13.1193 9.75 14.5 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 7.25H9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25V12.25C3.75 12.25 3.292 13.056 2.319 13.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.028 13.249C13.216 12.579 13.866 12.24 14.567 12.25C15.268 12.26 15.928 12.575 15.97 13.276C16.012 13.977 15.268 14.449 14.499 14.763C13.73 15.077 13.091 15.37 13.028 16.25H15.972"
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

export default StepsIndicator;
