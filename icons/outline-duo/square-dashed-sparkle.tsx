import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedSparkle({
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
          d="M9 4.75L10.25 7.75L13.25 9L10.25 10.25L9 13.25L7.75 10.25L4.75 9L7.75 7.75L9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 6.75V4.75C2.75 3.645 3.645 2.75 4.75 2.75H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.25V13.25C15.25 14.355 14.355 15.25 13.25 15.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75L10.25 7.75L13.25 9L10.25 10.25L9 13.25L7.75 10.25L4.75 9L7.75 7.75L9 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.159 3.48996L14.896 3.06894L14.475 1.80606C14.338 1.39806 13.663 1.39806 13.526 1.80606L13.105 3.06894L11.842 3.48996C11.638 3.55796 11.5 3.74896 11.5 3.96396C11.5 4.17896 11.638 4.36996 11.842 4.43796L13.105 4.85898L13.526 6.12198C13.594 6.32598 13.786 6.46396 14.001 6.46396C14.216 6.46396 14.407 6.32598 14.476 6.12198L14.897 4.85898L16.16 4.43796C16.364 4.36996 16.502 4.17896 16.502 3.96396C16.502 3.74896 16.363 3.55796 16.159 3.48996Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SquareDashedSparkle;
