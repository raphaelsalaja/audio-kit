import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Table({
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
          d="M6.5 5.75H17V4.75C17 3.23 15.767 2 14.25 2H6.5V5.75Z"
          fill={fill}
        />
        <path d="M5 7.25H1V10.75H5V7.25Z" fill={secondaryfill} />
        <path d="M17 7.25H6.5V10.75H17V7.25Z" fill={fill} />
        <path
          d="M6.5 12.25V16H14.25C15.767 16 17 14.77 17 13.25V12.25H6.5Z"
          fill={fill}
        />
        <path
          d="M5 12.25H1V13.25C1 14.77 2.233 16 3.75 16H5V12.25Z"
          fill={secondaryfill}
        />
        <path
          d="M5 5.75V2H3.75C2.233 2 1 3.23 1 4.75V5.75H5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Table;
