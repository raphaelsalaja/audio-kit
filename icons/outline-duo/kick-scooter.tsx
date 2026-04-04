import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KickScooter({
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
          d="M3.5 15C4.4665 15 5.25 14.216 5.25 13.25C5.25 12.284 4.4665 11.5 3.5 11.5C2.5335 11.5 1.75 12.284 1.75 13.25C1.75 14.216 2.5335 15 3.5 15Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 15C15.4665 15 16.25 14.216 16.25 13.25C16.25 12.284 15.4665 11.5 14.5 11.5C13.5335 11.5 12.75 12.284 12.75 13.25C12.75 14.216 13.5335 15 14.5 15Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 15C4.4665 15 5.25 14.216 5.25 13.25C5.25 12.284 4.4665 11.5 3.5 11.5C2.5335 11.5 1.75 12.284 1.75 13.25C1.75 14.216 2.5335 15 3.5 15Z"
          fill="none"
          stroke={fill}
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
          d="M13.7451 8.5602L12.669 3.53999C12.57 3.07899 12.163 2.75 11.691 2.75H9.74899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 15C15.4665 15 16.25 14.216 16.25 13.25C16.25 12.284 15.4665 11.5 14.5 11.5C13.5335 11.5 12.75 12.284 12.75 13.25C12.75 14.216 13.5335 15 14.5 15Z"
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

export default KickScooter;
