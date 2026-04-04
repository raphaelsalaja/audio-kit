import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertInfo({
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
          d="M9 15.25V7.25C9 6.9739 8.7761 6.75 8.5 6.75H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2C8.449 2 8 2.449 8 3C8 3.551 8.449 4 9 4C9.551 4 10 3.551 10 3C10 2.449 9.551 2 9 2Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AlertInfo;
