import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareWandSparkle({
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
          d="M6.26349 9.73645L1.98217 14.0179C1.59164 14.4084 1.59164 15.0416 1.98217 15.4321L2.56765 16.0176C2.95818 16.4081 3.59134 16.4081 3.98186 16.0176L8.26318 11.7361L6.26349 9.73645Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.744 2.49201L10.798 2.17701L10.482 1.22999C10.38 0.923988 9.873 0.923988 9.771 1.22999L9.45499 2.17701L8.509 2.49201C8.356 2.54301 8.25201 2.68603 8.25201 2.84803C8.25201 3.01003 8.356 3.15299 8.509 3.20399L9.45499 3.51899L9.771 4.46601C9.822 4.61901 9.96501 4.72199 10.126 4.72199C10.287 4.72199 10.431 4.61801 10.481 4.46601L10.797 3.51899L11.743 3.20399C11.896 3.15299 12 3.01003 12 2.84803C12 2.68603 11.897 2.54301 11.744 2.49201Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.659 5.98996L15.396 5.56894L14.975 4.30606C14.838 3.89806 14.163 3.89806 14.026 4.30606L13.605 5.56894L12.342 5.98996C12.138 6.05796 12 6.24896 12 6.46396C12 6.67896 12.138 6.86996 12.342 6.93796L13.605 7.35898L14.026 8.62198C14.094 8.82598 14.286 8.96396 14.501 8.96396C14.716 8.96396 14.907 8.82598 14.976 8.62198L15.397 7.35898L16.66 6.93796C16.864 6.86996 17.002 6.67896 17.002 6.46396C17.002 6.24896 16.863 6.05796 16.659 5.98996Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 2.5C15.664 2.5 16 2.164 16 1.75C16 1.336 15.664 1 15.25 1C14.836 1 14.5 1.336 14.5 1.75C14.5 2.164 14.836 2.5 15.25 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.95696 8.04302L2.04396 13.956C1.65396 14.346 1.65396 14.979 2.04396 15.37L2.62996 15.955C3.01996 16.346 3.65396 16.346 4.04396 15.955L9.95696 10.043C10.347 9.65192 10.347 9.01898 9.95696 8.62798L9.37097 8.04302C8.98097 7.65192 8.34796 7.65192 7.95696 8.04302Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.992 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V10.616"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.50201 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V9.00732"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 9.75L8.25 11.75"
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

export default SquareWandSparkle;
