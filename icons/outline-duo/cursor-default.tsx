import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CursorDefault({
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
          d="M2.07 3.46299L6.451 15.293C6.802 16.241 8.145 16.235 8.487 15.284L10.113 10.767C10.222 10.463 10.462 10.224 10.766 10.114L15.283 8.48799C16.234 8.14599 16.24 6.80299 15.292 6.45199L3.463 2.06999C2.594 1.74799 1.749 2.59399 2.07 3.46299Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.07 3.46299L6.451 15.293C6.802 16.241 8.145 16.235 8.487 15.284L10.113 10.767C10.222 10.463 10.462 10.224 10.766 10.114L15.283 8.48799C16.234 8.14599 16.24 6.80299 15.292 6.45199L3.463 2.06999C2.594 1.74799 1.749 2.59399 2.07 3.46299Z"
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

export default CursorDefault;
