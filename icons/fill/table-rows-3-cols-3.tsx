import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRows3Cols3({
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
        <path d="M11 2H7V5.75H11V2Z" fill={secondaryfill} />
        <path d="M5.5 7.25H1.5V10.75H5.5V7.25Z" fill={secondaryfill} />
        <path d="M11 12.25H7V16H11V12.25Z" fill={secondaryfill} />
        <path d="M16.5 7.25H12.5V10.75H16.5V7.25Z" fill={secondaryfill} />
        <path d="M11 7.25H7V10.75H11V7.25Z" fill={fill} />
        <path
          d="M12.5 12.25V16H13.75C15.267 16 16.5 14.77 16.5 13.25V12.25H12.5Z"
          fill={fill}
        />
        <path
          d="M5.5 12.25H1.5V13.25C1.5 14.77 2.733 16 4.25 16H5.5V12.25Z"
          fill={fill}
        />
        <path
          d="M5.5 5.75V2H4.25C2.733 2 1.5 3.23 1.5 4.75V5.75H5.5Z"
          fill={fill}
        />
        <path
          d="M12.5 5.75H16.5V4.75C16.5 3.23 15.267 2 13.75 2H12.5V5.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRows3Cols3;
