import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownRight2({
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
          d="M15 13.0408V4.95918C15 3.87716 14.1228 3 13.0408 3L4.95918 3C3.87716 3 3 3.87716 3 4.95918V13.0408C3 14.1228 3.87716 15 4.95918 15H13.0408C14.1228 15 15 14.1228 15 13.0408Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11 11L5.311 5.311C4.366 4.366 5.035 2.75 6.372 2.75H13.251C14.356 2.75 15.251 3.645 15.251 4.75V13.25C15.251 14.355 14.356 15.25 13.251 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 6.75V11.25H6.75"
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

export default SquareArrowDownRight2;
