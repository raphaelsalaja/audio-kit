import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRows3Cols2({
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
          d="M16.4999 7.25V5.75H9.75V2H8.25V5.75H1.5V7.25H8.25V10.75H1.5V12.25H8.25V16H9.75V12.25H16.4999V10.75H9.75V7.25H16.4999Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TableRows3Cols2;
