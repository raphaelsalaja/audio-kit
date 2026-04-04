import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat4({
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
        <rect
          height="10"
          width="14"
          fill={secondaryfill}
          fillOpacity="0.3"
          rx="5"
          stroke="none"
          x="2"
          y="4"
        />
        <path
          d="M12 4.276C14.388 4.526 16.25 6.546 16.25 9C16.25 11.623 14.123 13.75 11.5 13.75H8.75L11.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 13.724C3.612 13.474 1.75 11.454 1.75 9C1.75 6.377 3.877 4.25 6.5 4.25H9.25L6.75 1.75"
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

export default Repeat4;
