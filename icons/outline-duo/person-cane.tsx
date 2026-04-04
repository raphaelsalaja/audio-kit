import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonCane({
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
          d="M7.75 4C8.57843 4 9.25 3.32843 9.25 2.5C9.25 1.67157 8.57843 1 7.75 1C6.92157 1 6.25 1.67157 6.25 2.5C6.25 3.32843 6.92157 4 7.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 4C8.57843 4 9.25 3.32843 9.25 2.5C9.25 1.67157 8.57843 1 7.75 1C6.92157 1 6.25 1.67157 6.25 2.5C6.25 3.32843 6.92157 4 7.75 4Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75L8.547 13.58C8.516 13.366 8.417 13.167 8.264 13.014L6.543 11.293C6.355 11.105 6.25 10.851 6.25 10.586V6.31799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 13.75L5 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 9.99999V6.31799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3 10L4.146 7.936C4.214 7.813 4.308 7.706 4.42 7.622L5.983 6.45C6.156 6.32 6.367 6.25 6.583 6.25H8.407C8.629 6.25 8.845 6.324 9.021 6.461L10.899 7.921C10.966 7.973 11.04 8.017 11.119 8.051L12.751 8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10.75L15.75 16"
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

export default PersonCane;
