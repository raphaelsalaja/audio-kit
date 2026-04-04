import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowDeleteBottom({
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
          d="M11.5301 13.2801C11.6801 13.1341 11.7501 12.942 11.7501 12.75C11.7501 12.558 11.6802 12.366 11.5301 12.22C11.2401 11.927 10.7601 11.927 10.47 12.22L8.99997 13.69L7.52997 12.22C7.23997 11.927 6.75997 11.927 6.46987 12.22C6.17997 12.513 6.17997 12.988 6.46987 13.281L7.93987 14.751L6.46987 16.221C6.17997 16.514 6.17997 16.989 6.46987 17.282C6.75987 17.575 7.23987 17.575 7.52997 17.282L8.99997 15.812L10.47 17.282C10.76 17.575 11.24 17.575 11.5301 17.282C11.6801 17.136 11.7501 16.944 11.7501 16.752C11.7501 16.56 11.6802 16.3681 11.5301 16.2221L10.0601 14.752L11.5301 13.282V13.2801Z"
          fill={secondaryfill}
        />
        <path
          d="M2 4.75V13C2 14.5166 3.2334 15.75 4.75 15.75C5.1641 15.75 5.5 15.4141 5.5 15C5.5 14.5859 5.1641 14.25 4.75 14.25C4.0605 14.25 3.5 13.6895 3.5 13V9H14.5V13C14.5 13.6895 13.9395 14.25 13.25 14.25C12.8359 14.25 12.5 14.5859 12.5 15C12.5 15.4141 12.8359 15.75 13.25 15.75C14.7666 15.75 16 14.5166 16 13V4.75C16 3.2334 14.7666 2 13.25 2H4.75C3.2334 2 2 3.2334 2 4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowDeleteBottom;
