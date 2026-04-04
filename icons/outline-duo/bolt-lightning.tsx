import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoltLightning({
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
          d="M7.25 16.25L9.25 9.25H4.466C4.118 9.25 3.877 8.904 3.997 8.578L6.38 2.078C6.452 1.881 6.64 1.75 6.849 1.75H11.019C11.371 1.75 11.612 2.103 11.485 2.431L10 6.25H13.75C14.162 6.25 14.397 6.72 14.15 7.05L7.25 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 16.25L9.25 9.25H4.466C4.118 9.25 3.877 8.904 3.997 8.578L6.38 2.078C6.452 1.881 6.64 1.75 6.849 1.75H11.019C11.371 1.75 11.612 2.103 11.485 2.431L10 6.25H13.75C14.162 6.25 14.397 6.72 14.15 7.05L7.25 16.25Z"
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

export default BoltLightning;
