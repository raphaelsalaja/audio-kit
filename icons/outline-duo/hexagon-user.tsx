import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonUser({
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
          d="M15.25 11.473V6.52701C15.25 5.81401 14.87 5.15501 14.253 4.79701L10.003 2.33201C9.382 1.97201 8.617 1.97201 7.996 2.33201L3.747 4.79701C3.13 5.15501 2.75 5.81401 2.75 6.52701V11.473C2.75 12.186 3.13 12.845 3.747 13.203L5.51728 14.2298C6.20908 13.0234 7.50963 12.2108 8.99999 12.2108C10.4905 12.2108 11.7912 13.0236 12.483 14.2302L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25ZM11 7.75C11 8.85457 10.1046 9.75 9 9.75C7.89543 9.75 7 8.85457 7 7.75C7 6.64543 7.89543 5.75 9 5.75C10.1046 5.75 11 6.64543 11 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.539 14.243C6.232 13.051 7.522 12.25 9 12.25C10.478 12.25 11.768 13.051 12.461 14.243"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.473V6.52701C15.25 5.81401 14.87 5.15501 14.253 4.79701L10.003 2.33201C9.382 1.97201 8.617 1.97201 7.996 2.33201L3.747 4.79701C3.13 5.15501 2.75 5.81401 2.75 6.52701V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
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

export default HexagonUser;
