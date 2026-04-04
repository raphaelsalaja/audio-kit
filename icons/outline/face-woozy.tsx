import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceWoozy({
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
          d="M11.25 11.758C10.778 12.504 9.946 13 9 13C8.054 13 7.222 12.504 6.75 11.758"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10C6.552 10 7 9.552 7 9C7 8.448 6.552 8 6 8C5.448 8 5 8.448 5 9C5 9.552 5.448 10 6 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12 10C12.552 10 13 9.552 13 9C13 8.448 12.552 8 12 8C11.448 8 11 8.448 11 9C11 9.552 11.448 10 12 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13 1L17 5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 1L13 5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1456 1.8564C9.7716 1.7944 9.392 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0039 16.25 9C16.25 8.6096 16.2058 8.23171 16.1443 7.85941"
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

export default FaceWoozy;
