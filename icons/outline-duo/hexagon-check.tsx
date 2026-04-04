import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonCheck({
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
          d="M15.25 11.473V6.527C15.25 5.814 14.87 5.155 14.253 4.797L10.003 2.332C9.382 1.972 8.617 1.972 7.996 2.332L3.747 4.797C3.13 5.155 2.75 5.814 2.75 6.527V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 9.25L8 11.75L12.25 6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.473V6.527C15.25 5.814 14.87 5.155 14.253 4.797L10.003 2.332C9.382 1.972 8.617 1.972 7.996 2.332L3.747 4.797C3.13 5.155 2.75 5.814 2.75 6.527V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
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

export default HexagonCheck;
