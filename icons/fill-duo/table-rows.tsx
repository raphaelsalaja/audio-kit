import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRows({
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
          d="M16.0001 4.75C16.0001 3.2334 14.7667 2 13.2501 2H9.00009H4.75009C3.23349 2 2.00009 3.2334 2.00009 4.75V9H9.00009H16.0001V4.75Z"
          fill={fill}
        />
        <path
          d="M16.0001 13.25C16.0001 14.7666 14.7667 16 13.2501 16H4.75009C3.23349 16 2.00009 14.7666 2.00009 13.25V9H9.00009H16.0001V13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableRows;
