import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceCheck({
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
          d="M6 10C6.552 10 7 9.5523 7 9C7 8.4477 6.552 8 6 8C5.448 8 5 8.4477 5 9C5 9.5523 5.448 10 6 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12 10C12.552 10 13 9.5523 13 9C13 8.4477 12.552 8 12 8C11.448 8 11 8.4477 11 9C11 9.5523 11.448 10 12 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.25 3.75L13.859 5.25L17.256 0.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.965 1.8235C9.6488 1.78 9.3285 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 13.0039 4.996 16.25 9 16.25C13.004 16.25 16.25 13.0039 16.25 9C16.25 8.4124 16.1566 7.8503 16.0234 7.3037"
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

export default FaceCheck;
