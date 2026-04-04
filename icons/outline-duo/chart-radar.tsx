import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartRadar({
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
          d="M2.904 6.15401L7.912 2.13301H7.911C8.548 1.62201 9.452 1.62201 10.088 2.13301L15.096 6.15401C15.628 6.58101 15.863 7.28101 15.698 7.94401L14.208 13.925C14.014 14.704 13.317 15.25 12.518 15.25H5.482C4.683 15.25 3.986 14.704 3.792 13.925L2.302 7.94401C2.137 7.28001 2.372 6.58101 2.904 6.15401ZM5 8L9 5.75L12.25 8L11.017 11.259L6.733 12.25L5 8Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.912 2.13301L2.904 6.15401C2.372 6.58101 2.137 7.28001 2.302 7.94401L3.792 13.925C3.986 14.704 4.683 15.25 5.482 15.25H12.518C13.317 15.25 14.014 14.704 14.208 13.925L15.698 7.94401C15.863 7.28101 15.628 6.58101 15.096 6.15401L10.088 2.13301C9.452 1.62201 8.548 1.62201 7.911 2.13301H7.912Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.75L5 8L6.733 12.25L11.017 11.259L12.25 8L9 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChartRadar;
