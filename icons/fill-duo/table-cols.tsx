import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableCols({
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
          d="M4.25 2C2.7334 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.7334 16 4.25 16H6.5V2H4.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.75 2H11.5V16H13.75C15.2666 16 16.5 14.77 16.5 13.25V4.75C16.5 3.23 15.2666 2 13.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path d="M11.5 2H6.5V16H11.5V2Z" fill={fill} />
      </g>
    </svg>
  );
}

export default TableCols;
