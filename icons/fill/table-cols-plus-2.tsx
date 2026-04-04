import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColsPlus2({
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
          d="M5.5 2H4.25C2.733 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.733 16 4.25 16H5.5V2Z"
          fill={fill}
        />
        <path
          d="M9.5 14.75C9.5 13.77 10.129 12.95 11 12.64V2H7V16H9.88101C9.64101 15.64 9.5 15.21 9.5 14.75Z"
          fill={fill}
        />
        <path
          d="M14.25 10C15.4902 10 16.5 11.0093 16.5 12.25V4.75C16.5 3.23 15.267 2 13.75 2H12.5V10.8535C12.9127 10.3374 13.5397 10 14.25 10Z"
          fill={fill}
        />
        <path
          d="M16.75 14H15V12.25C15 11.84 14.664 11.5 14.25 11.5C13.836 11.5 13.5 11.84 13.5 12.25V14H11.75C11.336 14 11 14.34 11 14.75C11 15.16 11.336 15.5 11.75 15.5H13.5V17.25C13.5 17.66 13.836 18 14.25 18C14.664 18 15 17.66 15 17.25V15.5H16.75C17.164 15.5 17.5 15.16 17.5 14.75C17.5 14.34 17.164 14 16.75 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableColsPlus2;
