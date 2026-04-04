import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlayRotateClockwise2({
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
          d="M11.652 8.56989L8.00099 6.43988C7.66799 6.24998 7.24899 6.48984 7.24899 6.86994V11.1299C7.24899 11.5199 7.66799 11.7599 8.00099 11.56L11.652 9.42999C11.983 9.23989 11.983 8.75999 11.652 8.56989Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.652 8.56989L8.00099 6.43988C7.66799 6.24998 7.24899 6.48984 7.24899 6.86994V11.1299C7.24899 11.5199 7.66799 11.7599 8.00099 11.56L11.652 9.42999C11.983 9.23989 11.983 8.75999 11.652 8.56989Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.25L15.71 6.25C14.627 3.61 12.031 1.75 9 1.75C4.996 1.75 1.75 5 1.75 9C1.75 13 4.996 16.25 9 16.25C12.9365 16.25 16.1404 13.1087 16.2472 9.20166"
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

export default PlayRotateClockwise2;
