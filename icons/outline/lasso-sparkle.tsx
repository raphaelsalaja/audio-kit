import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LassoSparkle({
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
          d="M9 13.75C6.941 13.75 6.788 12.159 7.039 11.553C7.353 10.794 8.243 10.105 10.219 10.281C13.045 10.533 14.683 14.687 9.75 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.74399 5.49201L8.798 5.17701L8.48199 4.22999C8.37999 3.92399 7.873 3.92399 7.771 4.22999L7.45499 5.17701L6.509 5.49201C6.356 5.54301 6.25201 5.68603 6.25201 5.84803C6.25201 6.01003 6.356 6.15299 6.509 6.20399L7.45499 6.51899L7.771 7.46601C7.822 7.61901 7.96501 7.72199 8.12601 7.72199C8.28701 7.72199 8.43099 7.61801 8.48099 7.46601L8.797 6.51899L9.74301 6.20399C9.89601 6.15299 10 6.01003 10 5.84803C10 5.68603 9.89699 5.54301 9.74399 5.49201Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.25 9C5.664 9 6 8.664 6 8.25C6 7.836 5.664 7.5 5.25 7.5C4.836 7.5 4.5 7.836 4.5 8.25C4.5 8.664 4.836 9 5.25 9Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.25079 7.91498C2.25029 7.94318 2.25 7.9716 2.25 8C2.25 11.176 5.272 13.75 9 13.75C12.728 13.75 15.75 11.176 15.75 8C15.75 4.824 12.728 2.25 9 2.25C8.6596 2.25 8.32599 2.27367 7.99979 2.31677"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.65701 2.98996L4.39401 2.56894L3.97299 1.30606C3.83599 0.898061 3.16099 0.898061 3.02399 1.30606L2.603 2.56894L1.34 2.98996C1.136 3.05796 0.997986 3.24896 0.997986 3.46396C0.997986 3.67896 1.136 3.86996 1.34 3.93796L2.603 4.35898L3.02399 5.62198C3.09199 5.82598 3.28399 5.96396 3.49899 5.96396C3.71399 5.96396 3.905 5.82598 3.974 5.62198L4.39499 4.35898L5.65799 3.93796C5.86199 3.86996 6 3.67896 6 3.46396C6 3.24896 5.86101 3.05796 5.65701 2.98996Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default LassoSparkle;
