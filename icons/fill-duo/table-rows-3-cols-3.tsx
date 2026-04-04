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
        <path
          d="M16.5 4.75V13.25C16.5 14.77 15.267 16 13.75 16H4.25C2.733 16 1.5 14.77 1.5 13.25V4.75C1.5 3.23 2.733 2 4.25 2H13.75C15.267 2 16.5 3.23 16.5 4.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.5 7.25V5.75H12.5001V2H11.0001V5.75H7.0001V2H5.5001V5.75H1.5001V7.25H5.5001V10.75H1.5V12.25H5.5001V16H7.0001V12.25H11.0001V16H12.5001V12.25H16.5V10.75H12.5001V7.25H16.5ZM11.0001 10.75H7.0001V7.25H11.0001V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TableRows3Cols3;
