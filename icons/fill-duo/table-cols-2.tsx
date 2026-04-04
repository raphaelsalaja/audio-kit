import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableCols2({
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
          d="M4.75012 2C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V2H4.75012Z"
          fill={fill}
        />
        <path
          d="M13.2501 2C14.7667 2 16.0001 3.2334 16.0001 4.75V9V13.25C16.0001 14.7666 14.7667 16 13.2501 16H9.00012V9V2H13.2501Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableCols2;
