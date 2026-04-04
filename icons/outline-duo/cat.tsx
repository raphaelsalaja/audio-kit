import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cat({
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
        <ellipse
          cx="9"
          cy="10"
          fill={secondaryfill}
          fillOpacity="0.3"
          rx="6.75"
          ry="6.25"
          stroke="none"
        />
        <path
          d="M2.25 10V2.172C2.25 1.569 2.926 1.212 3.424 1.553L7 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 10V2.172C15.75 1.569 15.074 1.212 14.576 1.553L11 4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.417C9.434 12.94 9.801 12.45 10 11.926C9.667 11.809 9.333 11.751 9 11.751C8.667 11.751 8.333 11.809 8 11.926C8.199 12.45 8.566 12.941 9 13.417Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10.5C6.55228 10.5 7 10.0523 7 9.5C7 8.94772 6.55228 8.5 6 8.5C5.44772 8.5 5 8.94772 5 9.5C5 10.0523 5.44772 10.5 6 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10.5C12.5523 10.5 13 10.0523 13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 11.4477 10.5 12 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.442 11.871C15.642 11.28 15.75 10.652 15.75 10C15.75 6.548 12.728 3.75 9 3.75C5.272 3.75 2.25 6.548 2.25 10C2.25 10.652 2.358 11.28 2.558 11.871"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.655 15.748C10.84 16.071 9.942 16.25 9 16.25C8.057 16.25 7.16 16.071 6.345 15.748"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.75L0.75 12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 13.5L1.5 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 11.75L17.25 12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.5L16.5 15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13V16.25"
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

export default Cat;
