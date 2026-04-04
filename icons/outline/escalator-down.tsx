import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EscalatorDown({
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
          d="M5.5 5.25C6.4665 5.25 7.25 4.4665 7.25 3.5C7.25 2.5335 6.4665 1.75 5.5 1.75C4.5335 1.75 3.75 2.5335 3.75 3.5C3.75 4.4665 4.5335 5.25 5.5 5.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 11.75V9.4615C3.75 8.5163 4.5162 7.75 5.4615 7.75C5.8121 7.75 6.1542 7.8576 6.4415 8.0584L8.0224 9.1626"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.8564 16.25H4C2.757 16.25 1.75 15.243 1.75 14C1.75 12.757 2.757 11.75 4 11.75H5.25L12.4623 5.0189C12.6475 4.8461 12.8913 4.75 13.1446 4.75H14.001C15.244 4.75 16.251 5.757 16.251 7C16.251 8.243 15.244 9.25 14.001 9.25H12.751L5.5387 15.9811C5.3535 16.1539 5.1097 16.25 4.8564 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 16.26H12.74V12.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.74 16.26L16.24 12.76"
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

export default EscalatorDown;
