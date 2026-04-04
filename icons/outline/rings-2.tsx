import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rings2({
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
          d="M9 12.562C8.239 13.15 7.285 13.5 6.25 13.5C3.765 13.5 1.75 11.485 1.75 9C1.75 6.515 3.765 4.5 6.25 4.5C8.735 4.5 10.75 6.515 10.75 9C10.75 9.3454 10.711 9.6814 10.6375 10.0042"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.438C9.76 4.85 10.714 4.5 11.75 4.5C14.235 4.5 16.25 6.515 16.25 9C16.25 11.485 14.235 13.5 11.75 13.5C9.265 13.5 7.25 11.485 7.25 9C7.25 8.655 7.2889 8.3193 7.3623 7.9968"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.07404 1.853L7.41904 1.157C7.32404 1.057 7.19203 1 7.05503 1H5.44504C5.30704 1 5.17503 1.057 5.08103 1.157L4.42603 1.853C4.25903 2.03 4.24404 2.30199 4.39104 2.49699L5.85103 4.435C5.94603 4.56 6.09303 4.634 6.25003 4.634C6.40703 4.634 6.55504 4.56 6.64904 4.435L8.10903 2.49699C8.25503 2.30299 8.24004 2.031 8.07404 1.853Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Rings2;
