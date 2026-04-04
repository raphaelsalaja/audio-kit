import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut2({
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
          d="M15.25 6.527V11.473H15.251C15.251 12.186 14.871 12.845 14.254 13.203L10.004 15.668C9.383 16.028 8.618 16.028 7.997 15.668L3.747 13.203C3.13 12.845 2.75 12.186 2.75 11.473V6.527C2.75 5.814 3.13 5.155 3.747 4.797L7.996 2.332C8.617 1.972 9.382 1.972 10.003 2.332L14.253 4.797C14.87 5.155 15.25 5.814 15.25 6.527ZM11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
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

export default Nut2;
