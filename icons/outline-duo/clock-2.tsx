import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clock2({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 6.75L9 9L12.5 5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75C9.41421 4.75 9.75 4.41421 9.75 4C9.75 3.58579 9.41421 3.25 9 3.25C8.58579 3.25 8.25 3.58579 8.25 4C8.25 4.41421 8.58579 4.75 9 4.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 9.75C14.4142 9.75 14.75 9.41421 14.75 9C14.75 8.58579 14.4142 8.25 14 8.25C13.5858 8.25 13.25 8.58579 13.25 9C13.25 9.41421 13.5858 9.75 14 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 14.75C9.41421 14.75 9.75 14.4142 9.75 14C9.75 13.5858 9.41421 13.25 9 13.25C8.58579 13.25 8.25 13.5858 8.25 14C8.25 14.4142 8.58579 14.75 9 14.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4 9.75C4.41421 9.75 4.75 9.41421 4.75 9C4.75 8.58579 4.41421 8.25 4 8.25C3.58579 8.25 3.25 8.58579 3.25 9C3.25 9.41421 3.58579 9.75 4 9.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Clock2;
