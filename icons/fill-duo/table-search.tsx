import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableSearch({
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
          d="M15.575 14.51C15.838 14.0699 16 13.55 16 13C16 11.35 14.654 10 13 10C11.346 10 10 11.35 10 13C10 14.65 11.346 16 13 16C13.555 16 14.068 15.84 14.514 15.58L15.72 16.7802C15.866 16.9302 16.058 17.0001 16.25 17.0001C16.442 17.0001 16.634 16.9303 16.78 16.7802C17.073 16.4902 17.073 16.0101 16.78 15.72L15.575 14.51ZM11.5 13C11.5 12.17 12.173 11.5 13 11.5C13.827 11.5 14.5 12.17 14.5 13C14.5 13.41 14.332 13.79 14.062 14.0601H14.058C13.787 14.33 13.413 14.5 13 14.5C12.173 14.5 11.5 13.83 11.5 13Z"
          fill={fill}
        />
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M8.25 14.5H6.5V6.5H2V13.25C2 14.77 3.233 16 4.75 16H8.25C8.664 16 9 15.66 9 15.25C9 14.84 8.664 14.5 8.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 2H6.5V6.5H14.5V8.25C14.5 8.6699 14.836 9 15.25 9C15.664 9 16 8.6699 16 8.25V4.75C16 3.23 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableSearch;
