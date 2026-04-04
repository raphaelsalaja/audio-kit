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
          d="M3.75 16C2.233 16 1 14.767 1 13.25V4.75C1 3.233 2.233 2 3.75 2H6V16H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 13.25C17 14.767 15.767 16 14.25 16H6V2H14.25C15.767 2 17 3.233 17 4.75L17 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M1 12.25H17L17 10.75H1V12.25Z" fill={fill} />
        <path d="M1 7.25H17L17 5.75H1V7.25Z" fill={fill} />
        <path d="M5 2L5 16L6.5 16L6.5 2L5 2Z" fill={fill} />
      </g>
    </svg>
  );
}

export default Table;
