import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableLock({
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
          d="M15.5 12.03V11.25C15.5 10.01 14.491 9 13.25 9C12.009 9 11 10.01 11 11.25V12.03C10.154 12.15 9.5 12.87 9.5 13.75V15.25C9.5 16.21 10.285 17 11.25 17H15.25C16.215 17 17 16.21 17 15.25V13.75C17 12.87 16.346 12.15 15.5 12.03ZM13.25 10.5C13.664 10.5 14 10.84 14 11.25V12H12.5V11.25C12.5 10.84 12.836 10.5 13.25 10.5Z"
          fill={fill}
        />
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M6.5 6.5H2V13.25C2 14.7688 3.2312 16 4.75 16H5.75C6.1642 16 6.5 15.6642 6.5 15.25V6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16 5.75V4.75C16 3.2312 14.7688 2 13.25 2H6.5V6.5H15.25C15.6642 6.5 16 6.1642 16 5.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableLock;
