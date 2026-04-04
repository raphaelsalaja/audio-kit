import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sailboat({
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
          d="M16.911 11.896C16.781 11.652 16.526 11.5 16.25 11.5H1.75001C1.47401 11.5 1.21901 11.652 1.08901 11.896C0.958014 12.14 0.973014 12.436 1.12601 12.666L2.82901 15.221C3.15401 15.709 3.69901 16 4.28501 16H13.715C14.301 16 14.846 15.708 15.171 15.221L16.874 12.666C17.027 12.436 17.042 12.14 16.911 11.896Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.78 1.22001L14.28 8.72001C14.495 8.93401 14.559 9.25701 14.443 9.53701C14.327 9.81701 14.053 10 13.75 10H7V11.5H5.5V1.75001C5.5 1.44701 5.683 1.17301 5.963 1.05701C6.243 0.94101 6.566 1.00601 6.78 1.22001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sailboat;
