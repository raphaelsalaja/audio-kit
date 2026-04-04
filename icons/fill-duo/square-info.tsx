import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareInfo({
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
          d="M13.25 2H4.75C3.233 2 2 3.23 2 4.75V13.25C2 14.77 3.233 16 4.75 16H13.25C14.767 16 16 14.77 16 13.25V4.75C16 3.23 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 13.25C8.5859 13.25 8.25 12.9141 8.25 12.5V9.5H7.75C7.3359 9.5 7 9.1641 7 8.75C7 8.3359 7.3359 8 7.75 8H8.5C9.1895 8 9.75 8.5605 9.75 9.25V12.5C9.75 12.9141 9.4141 13.25 9 13.25Z"
          fill={fill}
        />
        <path
          d="M9 6.75C8.448 6.75 8 6.301 8 5.75C8 5.199 8.448 4.75 9 4.75C9.552 4.75 10 5.199 10 5.75C10 6.301 9.552 6.75 9 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareInfo;
