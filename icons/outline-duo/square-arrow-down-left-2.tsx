import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareArrowDownLeft2({
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
          d="M7 11L12.689 5.311C13.634 4.366 15.25 5.035 15.25 6.372V13.251C15.25 14.356 14.355 15.251 13.25 15.251H4.75C3.645 15.251 2.75 14.356 2.75 13.251V4.75C2.75 3.645 3.645 2.75 4.75 2.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 11.25H6.75V6.75"
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

export default SquareArrowDownLeft2;
