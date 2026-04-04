import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagAlert({
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
          d="M15.405 6.512C15.28 5.08 14.104 4 12.667 4H12V3C12 1.346 10.654 0 9.00001 0C7.34601 0 6.00001 1.346 6.00001 3V4H5.33301C3.89601 4 2.71801 5.08 2.59401 6.512L1.94201 14.012C1.87501 14.778 2.13501 15.542 2.65401 16.109C3.17301 16.676 3.91201 17.001 4.68101 17.001H13.318C14.087 17.001 14.826 16.676 15.345 16.109C15.864 15.542 16.124 14.778 16.057 14.012L15.405 6.512ZM10.5 4H7.50001V3C7.50001 2.173 8.17301 1.5 9.00001 1.5C9.82701 1.5 10.5 2.173 10.5 3V4ZM9.00262 7C9.41684 7 9.75262 7.33579 9.75262 7.75V10.25C9.75262 10.6642 9.41684 11 9.00262 11C8.58841 11 8.25262 10.6642 8.25262 10.25V7.75C8.25262 7.33579 8.58841 7 9.00262 7ZM10.0026 13C10.0026 13.5523 9.55492 14 9.00262 14C8.45033 14 8.00262 13.5523 8.00262 13C8.00262 12.4477 8.45033 12 9.00262 12C9.55492 12 10.0026 12.4477 10.0026 13Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BagAlert;
