import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Blueprint({
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
          d="M6 2.5H2.75C1.78379 2.5 1 3.28379 1 4.25V13.75C1 14.7162 1.78379 15.5 2.75 15.5H6V13C6 12.5858 6.33579 12.25 6.75 12.25C7.16421 12.25 7.5 12.5858 7.5 13V15.5H15.25C16.2162 15.5 17 14.7162 17 13.75V9.75C17 8.78379 16.2162 8 15.25 8H11.5C11.0858 8 10.75 7.66421 10.75 7.25C10.75 6.83579 11.0858 6.5 11.5 6.5H15V4.25C15 3.28379 14.2162 2.5 13.25 2.5H7.5V6.5H8.25C8.66421 6.5 9 6.83579 9 7.25C9 7.66421 8.66421 8 8.25 8H7.5V9.75C7.5 10.1642 7.16421 10.5 6.75 10.5C6.33579 10.5 6 10.1642 6 9.75V2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Blueprint;
