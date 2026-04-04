import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KickScooterElectric({
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
          d="M7.439 3.261C7.351 3.1 7.183 3 7 3H5.898L6.424 1.136C6.491 0.898005 6.374 0.647002 6.149 0.545002C5.924 0.443002 5.657 0.521007 5.523 0.729007L3.581 3.72901C3.482 3.88301 3.474 4.07901 3.561 4.24001C3.649 4.40101 3.817 4.50101 4 4.50101H5.102L4.576 6.36501C4.509 6.60301 4.626 6.854 4.851 6.956C4.917 6.986 4.988 7 5.057 7C5.222 7 5.382 6.91801 5.477 6.77201L7.419 3.77201C7.518 3.61801 7.526 3.422 7.439 3.261Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.5 15C4.4665 15 5.25 14.216 5.25 13.25C5.25 12.284 4.4665 11.5 3.5 11.5C2.5335 11.5 1.75 12.284 1.75 13.25C1.75 14.216 2.5335 15 3.5 15Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.25H8.00001C8.00001 10.766 5.98521 8.75 3.50001 8.75C2.88451 8.75 2.29791 8.8736 1.76361 9.0974"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7451 8.5602L12.669 3.53999C12.57 3.07899 12.163 2.75 11.691 2.75H9.74902"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 15C15.4665 15 16.25 14.216 16.25 13.25C16.25 12.284 15.4665 11.5 14.5 11.5C13.5335 11.5 12.75 12.284 12.75 13.25C12.75 14.216 13.5335 15 14.5 15Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default KickScooterElectric;
