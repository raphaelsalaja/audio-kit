import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoltLightningSlash({
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
          d="M8.77715 9.25L11.7495 6.25H10L11.485 2.431C11.612 2.103 11.371 1.75 11.019 1.75H6.849C6.64 1.75 6.452 1.881 6.38 2.078L3.997 8.578C3.877 8.904 4.118 9.25 4.466 9.25H8.77715Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.75 9.25H4.466C4.118 9.25 3.877 8.904 3.997 8.578L6.38 2.078C6.452 1.881 6.64 1.75 6.849 1.75H11.019C11.371 1.75 11.612 2.103 11.485 2.431L10 6.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 10.2493L7.25 16.25L7.7531 14.4891"
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

export default BoltLightningSlash;
