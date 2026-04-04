import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut({
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
          d="M6.52701 2.75H11.473C12.186 2.75 12.845 3.13 13.203 3.747L15.668 7.997C16.028 8.618 16.028 9.383 15.668 10.004L13.203 14.254C12.845 14.871 12.186 15.251 11.473 15.251H6.52701C5.81401 15.251 5.15501 14.871 4.79701 14.254L2.33201 10.004C1.97201 9.383 1.97201 8.618 2.33201 7.997L4.79701 3.747C5.15501 3.13 5.81401 2.75 6.52701 2.75ZM11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.473 2.75H6.52701C5.81401 2.75 5.15501 3.13 4.79701 3.747L2.33201 7.997C1.97201 8.618 1.97201 9.383 2.33201 10.004L4.79701 14.254C5.15501 14.871 5.81401 15.251 6.52701 15.251H11.473C12.186 15.251 12.845 14.871 13.203 14.254L15.668 10.004C16.028 9.383 16.028 8.618 15.668 7.997L13.203 3.747C12.845 3.13 12.186 2.75 11.473 2.75Z"
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

export default Nut;
